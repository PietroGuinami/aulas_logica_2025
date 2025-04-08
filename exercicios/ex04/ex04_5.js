const prompt = require('prompt-sync')()

// Pede ao usuário para digitar 2 notas e calcule sua média, e considere a média acima de 7
// aprovado, entre 5 e 7, em recuperação, abaixo de 5 reprovado.

let n1 = Number(prompt(' digite a primeira nota: '))
let n2 = Number(prompt(' digite a segunda nota: '))
let media = (n1 + n2) /2

switch(true)
{
    case media > 7:
        console.log('aprovado')  
        break    
        case media > 5 && media <= 7:
            console.log('recuperação')
        break    
        default:
            console.log('valor invalido')
}
