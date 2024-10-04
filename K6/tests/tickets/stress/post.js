import { sleep } from 'k6';
import { group } from 'k6';
import { SharedArray } from 'k6/data';
import { BaseRest, BaseChecks, ENDPOINTS, testConfig } from '../../../support/base/baseTeste.js';

export const options = testConfig.options.postTest;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

const data = new SharedArray('Users', function () {
  const jsonData = JSON.parse(open('../../../data/dynamic/tickets.json'));
  return jsonData.tickets;
});

export default () => {
  let userIndex = __ITER % data.length;
  let user = data[userIndex]
  group('Cadastrar tickets', () => {
    const res = baseRest.post(ENDPOINTS.TICKETS_ENDPOINT, user);
    baseChecks.checkStatusCode(res, 201);
    baseChecks.checkResponseTime(res,300);
    sleep(3);
  });
};