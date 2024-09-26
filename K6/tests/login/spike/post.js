import { sleep } from 'k6';
import { group } from 'k6';
import { SharedArray } from 'k6/data';
import { BaseRest, BaseChecks, ENDPOINTS, testConfig } from '../../../support/base/baseTeste.js';

export const options = testConfig.options.spikeTest;

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

export function setup() {
  const userRes = baseRest.post(ENDPOINTS.USER_ENDPOINT, userPayload);
  group('Cadastrar usuario', () => {
    baseChecks.checkStatusCode(userRes, 201);
    baseChecks.checkMessage(userRes, "Cadastro realizado com sucesso");
    baseChecks.checkErrorRate(userRes);
    baseChecks.checkResponseTime(userRes);
  });
  return { userResponseData: userRes.json() }
}

export default () => {
  let userIndex = __ITER % data.length;
  let user = data[userIndex];
  group('Realizar login', () => {
    const loginRes = baseRest.post(ENDPOINTS.LOGIN_ENDPOINT, user);
    baseChecks.checkStatusCode(loginRes, 200);
    baseChecks.checkErrorRate(loginRes); 
    baseChecks.checkResponseTime(loginRes);
    sleep(1);
  });
};

export function teardown(data) {
  const userId = data.userResponseData._id;
  const userRes = baseRest.delete(ENDPOINTS.USER_ENDPOINT + `/${userId}`)
  group('Cadastrar usuario', () => {
    baseChecks.checkStatusCode(userRes, 200);
    baseChecks.checkMessage(userRes, "Registro excluído com sucesso");
    baseChecks.checkErrorRate(userRes);
    baseChecks.checkResponseTime(userRes);
  });
}
