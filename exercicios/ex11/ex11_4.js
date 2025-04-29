// Faça um algoritmo que pergunte quanto você ganha por hora e o número de horas 
// trabalhadas no mês. Calcule em uma nova variável e mostre o total do seu salário no referido 
// mês.

const prompt = require('prompt-sync')()

let ht = Number(prompt('quanto você ganha por hora?: '))
let hm = Number(prompt('quanto você ganha por mês?: '))
let s = ht * hm
console.log(`${s}`)