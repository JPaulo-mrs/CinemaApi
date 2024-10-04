const { faker } = require('./lib/node_modules/@faker-js/faker/dist/locale/pt_BR.cjs')
const fs = require('fs');

const quantidade = process.argv[2] || 1;

const ingressos = [];

for(let i = 0; i < quantidade; i++)
{
    const ingresso = {
        movieId: faker.string.nanoid(15),
        userId: faker.string.nanoid(15),
        seatNumber: faker.number.int({ max: 100 }),
        price: faker.number.int({ max: 100 }),
        showtime: faker.date.between({ from: '2020-01-01', to: '2030-01-01' })
    }
    ingressos.push(ingresso)
}

const data = {
    tickets : ingressos
}

fs.writeFileSync('tickets.json', JSON.stringify(data, null, 2), error =>{
    if(error){
        console.error(error)
    }
})