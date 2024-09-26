import { sleep } from 'k6';
import { group } from 'k6';
import { SharedArray } from 'k6/data';
import { BaseRest, BaseChecks, ENDPOINTS, testConfig } from '../../../support/base/baseTeste.js';

export const options = testConfig.options.stressTest;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();
const data = new SharedArray('Users', function () {
  const jsonData = JSON.parse(open('../../../data/static/user.json'));
  return jsonData.users;
});

const userPayload = {
  "nome": "Joao Paulo",
  "email": "joaopaulo@qa.com.br",
  "password": "teste",
  "administrador": "true"
}

const productPayload = {
  "nome": "Produto do JP",
  "preco": 100,
  "descricao": "Um produto bom",
  "quantidade": 10
}

export function setup() {
  const userRes = baseRest.post(ENDPOINTS.USER_ENDPOINT, userPayload);
  group('Cadastrar usuario', () => {
    baseChecks.checkStatusCode(userRes, 201);
    baseChecks.checkMessage(userRes, "Cadastro realizado com sucesso");
    baseChecks.checkErrorRate(userRes);
    baseChecks.checkResponseTime(userRes);
  });
  let user = data[0];
  const loginRes = baseRest.post(ENDPOINTS.LOGIN_ENDPOINT, user);
  group('Realizar login', () => {
    baseChecks.checkStatusCode(loginRes, 200);
    baseChecks.checkMessage(loginRes, "Login realizado com sucesso");
    baseChecks.checkErrorRate(loginRes);
    baseChecks.checkResponseTime(loginRes);
  });
  const token = loginRes.json().authorization;
  const productRes = baseRest.post(ENDPOINTS.PRODUCTS_ENDPOINT, productPayload, token);
  group('Cadastrar produto', () => {
    baseChecks.checkStatusCode(productRes, 201);
    baseChecks.checkMessage(productRes, "Cadastro realizado com sucesso");
    baseChecks.checkErrorRate(productRes);
    baseChecks.checkResponseTime(productRes);
  });
  
  return { userResponseData: userRes.json(), productResponseData: productRes.json()}
}

export default (data) => {
  let user = {email: userPayload.email, password: userPayload.password};
  
  group('Realizar login', () => {
    const loginRes = baseRest.post(ENDPOINTS.LOGIN_ENDPOINT, user);
    const token = loginRes.json().authorization;
    baseChecks.checkStatusCode(loginRes, 200);
    baseChecks.checkErrorRate(loginRes); 
    baseChecks.checkResponseTime(loginRes);
    
    group('Listar produtos', () => {
      const productListRes = baseRest.get(ENDPOINTS.PRODUCTS_ENDPOINT); 
      baseChecks.checkStatusCode(productListRes, 200);
      baseChecks.checkErrorRate(productListRes); 
      baseChecks.checkResponseTime(productListRes);
      
      sleep(1);
    });
    group('Criar carrinho', () => {
      const productPayload = {
        "produtos": [
          {
            "idProduto": data.productResponseData._id,
            "quantidade": 1
          }
        ]
      }
      const cartListRes = baseRest.post(ENDPOINTS.CARTS_ENDPOINTS, productPayload, token); 
      baseChecks.checkStatusCode(cartListRes, 201);
      baseChecks.checkErrorRate(cartListRes); 
      baseChecks.checkResponseTime(cartListRes);
      sleep(1);
    });
    group('Cancelar carrinho', () => {
      const cartListRes = baseRest.delete(ENDPOINTS.CARTS_ENDPOINTS + '/cancelar-compra', token); 
      baseChecks.checkStatusCode(cartListRes, 200);
      baseChecks.checkErrorRate(cartListRes); 
      baseChecks.checkResponseTime(cartListRes);
      sleep(1);
    });
    sleep(1);
  });
};

export function teardown(data) {
  let user = {email: userPayload.email, password: userPayload.password};
  const loginRes = baseRest.post(ENDPOINTS.LOGIN_ENDPOINT, user);
  const token = loginRes.json().authorization;
  const userId = data.userResponseData._id;
  const productId = data.productResponseData._id;
  console.log(data.productResponseData._id);
  console.log(data.userResponseData._id);
  const productRes = baseRest.delete(ENDPOINTS.PRODUCTS_ENDPOINT + `/${productId}`, token)
  baseChecks.checkStatusCode(productRes, 200);
  baseChecks.checkMessage(productRes, "Registro excluído com sucesso");
  const userRes = baseRest.delete(ENDPOINTS.USER_ENDPOINT + `/${userId}`)
  baseChecks.checkStatusCode(userRes, 200);
  baseChecks.checkMessage(userRes, "Registro excluído com sucesso");
}
