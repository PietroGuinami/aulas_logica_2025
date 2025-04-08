
const prompt = require('prompt-sync')()

// Estrutura condicional aninhada
let idade = Number(prompt('Digite sua idade'))

if(idade >= 18 && idade <= 70){
    console.log('Voto Obrigatório')
}
else{
    if(idade < 16){
        console.log('Você nâo pode votar!')
    }else{
        if(idade >= 16 || idade > 70){
            console.log('Voto Obrigatório')
        }
    }
} 

// Switch case - Estrutura de controle de fluxo para tomar decisôes com base no valor de uma variavel
let n1 = Number(prompt('Digite o primeiro numero '))
let n2 = Number(prompt('Digite o segundo numero '))
let op = (prompt('Escolha a operação (+, -, *, /, **'))

// Testar o valor da variavel se é true
switch(op){
    case '+':
     console.log(`resultado ${n1+n2}`)
     break;
     case '-':
      console.log(`resultado ${n1-n2}`);
      break;
      case '*':
      console.log(`resultado ${n1*n2}`);
     break;
     case '/':
      console.log(`resultado ${n1/n2}`);
      break;
      case '**':
      console.log(`resultado ${n1**n2}`);
     break;
     default:
        console.log(`Operação invalida`)
  }
  
//verificar qual letra é igual 
let L = prompt('Digite uma letra: ').toUpperCase()
// quando usamos switch(variavel), o switch compara exatamente o valor da variavel com os cases definidos 
switch(L){
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
        console.log('Vogal')
        break
    default:
        console.log(' consoante ')
}


// converter a nota do aluno para letra 
let nota = parseInt(prompt('Digite a nota do aluno'))
// o switch(true) verifica quais expressôes dentro do case retornam true(verdade) ou seja comparamos as expressôes booleanas
switch(true){
    case nota >= 90:
        console.log('Nota A')
        break
case nota >= 80:
    console.log('Nota B')
    break
case nota >= 70:
    console.log('Nota C')
    break
case nota >= 60:
    console.log('Nota D')
    break
default:
    console.log('Nota E')
}
