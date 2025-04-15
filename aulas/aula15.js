// criando nossa primeira função
const prompt = require('prompt-sync')()
function Cabecalho(texto){
    console.log('----------------------------')
    console.log(texto)       
    console.log('----------------------------')
}
// criando outra função, função de saudaçao
function Saudacao(){
    let nome = prompt('Digite seu nome: ')
    console.log(` tenha um bom dia Senhor ${nome}`)
}

// chamando função
// passando o parametro junto com a função
Cabecalho('SESI/SENAI')
// posso declarar uma variavel e passa-la como parametro
let escola = 'Sesi 025'
Cabecalho(escola)
Saudacao()

// criei a função que vai receber dois parametros a partir desses valores, realizara o calculo e mostra o resultado
function Soma(n1, n2){
    let resultado = n1 + n2
    console.log(resultado)
}

Soma(5,6)
Soma(8 ,9)
Soma(8, 18)

// EX7_1.JS
function Parlmpar(n){
    if(n % 2 == 0){ 
        console.log(' Seu numero é par! ')
    }else{
        console.log(' seu numero é ímpar! ')
    }
}
Parlmpar(5)
Parlmpar(10)

// Função com retorno do resultado
// o calculo é realizado e é retornado para a chamada da função
function Media(nn, nnn){
    let resultado = (nn + nnn) / 2
    return(resultado)
}

console.log(Media(6, 8))
// amazenei o retorno da função em uma variavel
let valor = Media(9, 7);
// utilizei o retorno da para escrever na tela
console.log(valor)
// utilizei a variavel que reebeu o retorno da função para chamar a função Par ou Impar passando o vaor como parametro
ParImpar(valor)