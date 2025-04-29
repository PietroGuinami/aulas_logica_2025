// Faça um algoritmo que receba 2 números inteiros armazenando-os em variáveis e 
// exiba a divisão entre eles no console. 

const prompt = require('prompt-sync')()

let n1 = Number(prompt('Digite um numero: '))
let n2 = Number(prompt('Digite um numero: '))

let conta = n1 / n2

console.log(`${n1} / ${n2} é igual a ${conta}`)