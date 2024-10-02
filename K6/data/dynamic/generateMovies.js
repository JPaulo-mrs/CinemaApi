const { faker } = require('./lib/node_modules/@faker-js/faker/dist/locale/pt_BR.cjs')
const fs = require('fs');

const quantidade = process.argv[2] || 1;

const movies = [];

for(let i = 0; i < quantidade; i++)
{
    const movie = {
        "title": faker.lorem.words(2),
        "description": faker.lorem.sentences(2),
        "launchdate": faker.date.between({ from: '2020-01-01', to: '2030-01-01' }),
        "showtimes": faker.date.betweens({ from: '2020-01-01T00:00:00.000Z', to: '2030-01-01T00:00:00.000Z', count: { min: 2, max: 5 }})
    }
    movies.push(movie)
}

const data = {
    movies : movies
}

fs.writeFileSync('movies.json', JSON.stringify(data, null, 2), error =>{
    if(error){
        console.error(error)
    }
})