// at 09

const prompt = require('prompt-sync')()

let preco = Number(prompt("qual o preço?"));
console.log(` valor do desconto ${preco -((preco*5)/100)}`)