//Crie uma função que receba 2 números e o operador matemático para realizar a
//operação (Ex. envio os parâmetros 2 e 5 e *, fazer a multiplicação), tratar as operações + - * / **
const prompt = require('prompt-sync')()

function Numeros(n1, n2, operador){
    if(operador === '+'){
        console.log(`${n1} + ${n2} = ${n1 + n2}`)
}
else if( operador === '-' ){
    console.log(`${n1} - ${n2} = ${n1 - n2}`)
}
else if( operador === '*' ){
    console.log(`${n1} * ${n2} = ${n1 * n2}`)}
else if( operador === '/' ){
        console.log(`${n1} / ${n2} = ${n1 / n2}`)
 }else if( operador === '**' ){
        console.log(`${n1} ** ${n2} = ${n1 ** n2}`)
    }
    else{console.log("Operador invalido")
        return;
    }
}
Numeros(2, 4, '+')
Numeros(2, 4, '-')
Numeros(2, 4, '*')
Numeros(2, 4, '/')
Numeros(2, 4, '**')