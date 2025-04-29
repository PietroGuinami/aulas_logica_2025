// Tendo como dado de entrada a altura (h) de uma pessoa e o sexo, construa um 
// algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:  
// Para homens: (72.7 * altura) – 58   Para mulheres: (62.1 * altura) - 44.7, exiba qual é o 
// peso ideal da pessoa

const prompt = require('prompt-sync')()

let hm = 72.7
let hf = 62.1
let h = prompt('Digite altura desejada: ')
let cm = hm * h - 58
let cf = hf * h - 44.7
let s = prompt('Digite (m) ou (f) para saber para saber o sexo: ')
if(s == 'f'){
    console.log((`${hf} * ${h} - 58 = ${cf}`))
}else if(s == 'm'){
    console.log((`${hm} * ${h} - 44.7 = ${cm}`))
}