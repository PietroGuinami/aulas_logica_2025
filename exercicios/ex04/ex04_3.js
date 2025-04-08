const prompt = require('prompt-sync')()

// Pede ao usuário para digitar o número de um mês e imprime o seu nome.

let mes = parseInt(prompt('digite o numero referente ao mês: '))

switch(mes){
    case 1:
        console.log("mês de janeiro")
        break
    case 2:
        console.log("mês de fevereiro")
        break
    case 3:
        console.log("mês de marco")
        break
    case 4:
        console.log("mês de abril")
        break
    case 5:
        console.log("mês de maio")
        break
    case 6:
        console.log("mês de junho")
        break
    case 7:
        console.log("mês de julho")
        break
    case 8:
        console.log("mês de agosto")
        break
    case 9:
        console.log("mês de setenbro")
        break
    case 10:
        console.log("mês de outubro")
        break
    case 11:
        console.log("mês de novembro")
        break
    case 12:
        console.log("mês de dezembro")
        break
     default:
        console.log('mês invalido')
}
