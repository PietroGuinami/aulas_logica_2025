const prompt = require('prompt-sync')()

// Pede ao usuário para digitar um número de 1 a 7 e imprime o dia da semana correspondente

let semana = Number(prompt('Digite um numero de 1 a 7:'))

switch (semana){
        case semana >= 1:
            console.log('domingo')
            break
    case semana = 2:
        console.log('segunda-feira')
        break
    case semana = 3:
        console.log('terca-feira')
        break
    case semana = 4:
        console.log('quarta-feira')
        break
    case semana = 5:
        console.log('quinta-feira')
        break
    case semana = 6:
        console.log('sexta-feira')
        break
        default:
            semana = 'valor iválido'
    }
    