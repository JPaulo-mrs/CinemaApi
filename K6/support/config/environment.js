export const testConfig = {
    environment: {
        hml: {
            url: "http://localhost:3000"
        }
    },
    options: {
        smokeTest: {
            vus: 3,
            duration: '10s',
            thresholds: {
            'http_req_duration': ['p(95)<200'],
            'checks': ['rate>0.95'],
            },
        },

        loadTest: {
            stages: [
                { duration: '1m', target: 50 },
                { duration: '2m', target: 100 },
                { duration: '1m', target: 50 },
            ],
            thresholds: {
                http_req_duration: ['p(95)<200'],
                http_req_failed: ['rate<0.05']
            }
        },

        soakTest: {  
            vus: 30,
            stages: [
                { duration: '2m', target: 100 },
                { duration: '5m', target: 100 },
                { duration: '2m', target: 0 },  
            ],
            thresholds: {
                http_req_duration: ['p(95)<200'],
                http_req_failed: ['rate<0.05']
            }
        },

        spikeTest: {
            stages: [
                { duration: '1m', target: 500 },
                { duration: '1m', target: 0 },
              ],
              thresholds: {
                'http_req_duration': ['p(95)<200'],
                'checks': ['rate>0.95'],
              },
        },

        stressTest: {
            stages: [
                { duration: '2m', target: 500 },
                { duration: '5m', target: 500 },
                { duration: '2m', target: 0 },
              ],
              thresholds: {
                'http_req_duration': ['p(95)<200'],
                'checks': ['rate>0.95'],
              },
        }
    }
};
