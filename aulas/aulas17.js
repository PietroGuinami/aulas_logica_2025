// variaveis globais e locais

function nomeEscola(cidadePara){


     //declarando uma variavel local
    let cidade1 = 'Andradina'
}
// essa variavel é uma variavel global pois ela pode ser acessada em qualquer parte do codigo
var escola = 'Senai'
console.log(escola)
nomeEscola()
var cidade = 'Mirandopolis'
console.log(cidade)

//////////////////////////////////////////////////////////////////
var x = 10 //variavel global
console.log('Fora da função', x)

function minhaFuncao(){
    let x = 0 //variavel local
    x = x + 1
    console.log('Dentro da função', x)
}

minhaFuncao()
x += 1
console.log('Fora da função', x)
