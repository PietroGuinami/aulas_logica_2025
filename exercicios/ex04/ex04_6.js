// Pede o salário do funcionário, e calcular o aumento que ele terá, considerando se ganhar até
// 2000, reajuste de 12%, até 4000, reajuste de 10%, acima de 4000 reajuste de 8%, exibir o novo salário.

const prompt = require('prompt-sync')()

let s = Number(prompt('digite o salario: '))

switch(true){
    case s < 2000:
        s = s + (s *0.12)
        console.log(`salario reajustado ${s}`)
        break
        case s < 2000 && s < 4000:
        s = s + (s *0.10)
        console.log(`salario reajustado ${s}`)
        break
        case s < 4000:
        s = s + (s *0.08)
        console.log(`salario reajustado ${s}`)
        break
        default:
            console.log('operação errada')
}