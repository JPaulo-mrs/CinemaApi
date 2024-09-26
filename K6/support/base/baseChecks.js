import { check } from 'k6';

export class BaseChecks {
    checkStatusCode(response, expectedStatus) {
        check(response, {
            'status code correto': (r) => r.status === expectedStatus,
        });
    }

    checkMessage(response, expectedMessage) {
        check(response, {
            'mensagem correta': (r) => r.json('message') === expectedMessage,
        });
    }

    checkErrorRate(response, maxErrorRate = 0.05) {
        const errorRate = ![200, 201].includes(response.status) ? 1 : 0;
        check({ errorRate }, {
            'taixa de erro dentro do critério de aceitação': (r) => r.errorRate < maxErrorRate,
        });
    }
    
    checkResponseTime(response, maxDuration = 200) {
        check(response, {
            'tempo de resposta dentro do critério de aceitação': (r) => r.timings.duration < maxDuration,
        });
    }
}