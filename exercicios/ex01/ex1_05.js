// at 05

// centimetro
const prompt = require('prompt-sync')()

let mt = Number(prompt("qual valor de cm?"));
let cm = mt * 100
console.log(` A conversão das cm ${mt} * ${100} é igual ${cm}`);

// milimetro
let mt2 = Number(prompt("qual valor de mm?"));
let mm = mt2 * 1000
console.log(` A conversão de mm ${mt2} * ${1000} é igual ${mm}`);

// quilometros
let mt3 = Number(prompt("qual valor de km?"));
let km = mt3 / 1000
console.log(` A conversão de km ${mt3} * ${1000} é igual ${km}`);