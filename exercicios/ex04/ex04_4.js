const prompt = require('prompt-sync')()
// Pede ao usuário para digitar o nome de um mês e imprime o número de dias naquele mês.

let mes = prompt('digite o nome do mês referente ao mês: ')

switch(mes){
    case 'janeiro':
    case 'março':
    case 'maio':
    case 'julho':
    case 'agosto':
    case 'outubro':
    case 'dezembro':
        console.log(`${mes} tem 31 dias`)
        break

    case 'abril':
    case 'junho':
    case 'setembro':
    case 'novembro':
        console.log(`${mes} tem 30 dias`)
        break
    case 'fevereiro':
            console.log(`${mes} tem 29 dias`)
            break
     default:
        console.log('mês invalido')
}
