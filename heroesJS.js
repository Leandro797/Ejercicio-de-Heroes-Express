let fs = require('fs');
let path = require('path');

let arrayHeroes = JSON.parse(fs.readFileSync(path.join(__dirname, './data/heroes.json'), 'utf-8'));

module.exports = arrayHeroes;

console.log(arrayHeroes[3].nombre);