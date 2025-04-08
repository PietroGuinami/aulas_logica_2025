// at 08

const prompt = require('prompt-sync')()

let h = Number(prompt("qual a altura da parede?"));
let l = Number(prompt("qual a largura da parede?"));
let area = h * l
console.log(`  ${h} * ${l} é igual ${area}`);
let valor = area / 2
console.log(`${area} / ${2} é igual a valor ${valor}`)