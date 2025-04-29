// Faça uma função que peça um valor e mostre na tela se o valor é positivo ou negativo

const prompt = require('prompt-sync')()

function numeropn(valor){
    if(valor >= 0){
        console.log('positivo')
    }else(valor < 0);{
        console.log('negativo')
    }
}
numeropn(30)
numeropn(-30)