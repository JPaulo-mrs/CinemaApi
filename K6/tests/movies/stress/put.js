import { sleep } from 'k6';
import { group } from 'k6';
import { SharedArray } from 'k6/data';
import { BaseRest, BaseChecks, ENDPOINTS, testConfig } from '../../../support/base/baseTeste.js';

export const options = testConfig.options.stressTest;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

const data = new SharedArray('Users', function () {
    const jsonData = JSON.parse(open('../../../data/dynamic/movies.json'));
    return jsonData.movies;
});

export function setup() {
    let responseData;
    data.forEach(movie => {
        group('Cadastrar filme', () => {
            const resPost = baseRest.post(ENDPOINTS.MOVIES_ENDPOINT, movie);
            baseChecks.checkStatusCode(resPost, 201);
            baseChecks.checkResponseTime(resPost, 200);
        });
    })
    group('Listar filmes', () => {
        const resGet = baseRest.get(ENDPOINTS.MOVIES_ENDPOINT);
        baseChecks.checkStatusCode(resGet, 200);
        baseChecks.checkResponseTime(resGet, 100);
        responseData = resGet.json();
        sleep(1);
    });
    return {responseData}
}


export default (responseData) => {
  const ids = responseData.responseData.map(item => item._id)
  group('Atualizar filmes por id', () => {
    ids.forEach(id =>{
        const res = baseRest.put(ENDPOINTS.MOVIES_ENDPOINT + `/${id}`)
        baseChecks.checkStatusCode(res, 200);
        baseChecks.checkResponseTime(res, 300);
    })
    sleep(1);
  });
};

export function teardown(data) {
    const ids = data.responseData.map(item => item._id)
    group('Deletar filmes',() => {
        ids.forEach(id =>{
            const res = baseRest.delete(ENDPOINTS.MOVIES_ENDPOINT + `/${id}`)
            baseChecks.checkStatusCode(res, 200);
            baseChecks.checkResponseTime(res, 400);
        })
    })
}