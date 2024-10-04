import { sleep } from 'k6';
import { group } from 'k6';
import { BaseRest, BaseChecks, ENDPOINTS, testConfig } from '../../../support/base/baseTeste.js';

export const options = testConfig.options.smokeTest;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

const data = new SharedArray('Users', function () {
    const jsonData = JSON.parse(open('../data/dynamic/movies.json'));
    return jsonData.movies;
});

export function setup() {
    let responseData = [];
    data.forEach(movie => {
        group('Cadastrar filme', () => {
            const res = baseRest.post(ENDPOINTS.MOVIES_ENDPOINT, movie);
            baseChecks.checkStatusCode(res, 201);
            baseChecks.checkMessage(res, "Cadastro realizado com sucesso")
            responseData.push(res.json())
        });
    })
    return {responseData}
}


export default () => {
  group('Listar filmes', () => {
    const res = baseRest.get(ENDPOINTS.MOVIES_ENDPOINT);
    baseChecks.checkStatusCode(res, 200);
    baseChecks.checkErrorRate(res); 
    baseChecks.checkResponseTime(res);
    sleep(1);
  });
};

export function teardown(responseData) {
    const ids = responseData.responseData.map(item => item._id)
}