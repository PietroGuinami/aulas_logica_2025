// Faça um algoritmo que verifique se uma letra digitada é "F" ou "M". Conforme a letra 
// escrever: F - Feminino, M – Masculino, se não for nenhuma das opções, Sexo Inválido. 

const prompt = require('prompt-sync')()

let s = prompt('Digite (m) ou (f) para saber para saber o sexo: ')
if(s == 'f'){
    console.log('é Feminino')
}else if(s == 'm'){
    console.log(' É Masculino')
}else{
    console.log('sexo invalido')
}