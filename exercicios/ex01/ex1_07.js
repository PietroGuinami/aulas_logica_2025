// at 07

const prompt = require('prompt-sync')()

let reais = Number(prompt("qual o valor?"));
let dolar = reais / 6.00
console.log(` você tem ${reais} * ${6.00} é igual ${dolar.toFixed(2)}`);