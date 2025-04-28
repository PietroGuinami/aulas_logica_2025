// Crie uma função que recebe um número como parâmetro e exiba a tabuada até o
// 10, chame essa função por 3 vezes enviando parâmetros diferentes

function exibirtabuada(numero){
    console.log(`Tabuada do ${numero}: `)
    for(let i = 0; i <= 10; i++){
        console.log(`${numero} X ${i} = ${numero * i}`)
    }
}

exibirtabuada(2)
exibirtabuada(5)
exibirtabuada(8)
