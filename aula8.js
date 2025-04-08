 const prompt = require('prompt-sync')()

// let altura = Number(prompt(' Qual sua altura? '))
// let peso = Number(prompt(' Qual seu peso? '))
// let imc = peso/(altura**2)

// if (imc<18.5){
//     console.log('Abaixo do peso');
// }else if(imc >= 18.5 && imc <25){
//     console.log('Peso ideal');
// }else if (imc >= 25 && imc <30){
//     console.log('Sobrepeso');
// }else{
//     console.log('Obesidade');
// }
// // verificar se um triangulo é equilatero ou escaleno 
// // receber o lado 1
// let lado1 = Number(prompt(' Digite o valor do lado 1: '))
// let lado2 = Number(prompt(' Digite o valor do lado 2: '))
// let lado3 = Number(prompt(' Digite o valor do lado 3: '))

// // verficar se o triangulo é equilatero caso tenha 
// // os lado iguais
// let eq = (lado1 == lado2) && (lado2 == lado3)
// let es = (lado1 != lado2) && (lado2 != lado3) && (lado1 != lado3)

// console.log( 'Tiangulo Equilatero?', eq, ' Triangulo Escaleno', es);

// // at 8
// let l1 = Number(prompt('Qual é o valor do lado1? '))
// let l2 = Number(prompt('Qual é o valor do lado2? '))
// let l3 = Number(prompt('Qual é o valor do lado3? '))

// if (eq = (l1 == l2) && (l2 == l3)){
//     console.log('Tiangulo Equilatero');
// }else{
//     console.log(' Triangulo Escaleno');
// }

// // descobrir a quantidade de horas trabalhadas 
// let horas = Number(prompt('Total de horas trablhadas:'))
// let vendas = Number(prompt('Total de vendas:'))

// // validar  se uma das condiçôes foram atendids 
// // (mais de 500 em vendas ou mais de 40h trabalhadas)
// if(vendas > 5000 || horas > 40){
//     console.log('Tem direito ao bonus')
// }else{
//     console.log('Não tem direito ao bonus ')
// }

// // Crie um algoritimo que recebe um caractere e verifique se ele é 
// // um vogal ou consoante

let c1 = (prompt(' digite seu caractere: '))

if( c1 == "a" || c1 == "e" || c1 == "i" || c1 == "o" || c1 == "u" ){
    console.log('seu caractere é vogal');
}else{
    console.log('seu caractere é consoante');
}