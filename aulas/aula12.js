const prompt = require('prompt-sync')();

// criando nosso primeiro for

for(let i = 0; i < 100; i++){
    console.log(i)
}

//entregando os notebooks por ordem

for(let nr = 1; nr <= 32; nr++ ){
    let nome = prompt(`Quem é o numero${nr}`)
    let presente = prompt(`O(A) ${nome} veio para escola`)

    if(presente == 'S'){
        console.log(`Pegar notebook ${nr}`)
        console.log(`Pegar mouse ${nr}`)
    console.log(`Pegar fonte ${nr}`)
    console.log(`Levar notebook até ${nome}`)
}else{
    console.log(`Não pegar notebook${nr}`)
}
}

let entrada;
let qtdPar = 0;
let somaPar = 0;
let qtdImpar = 0;
let somaImparm = 0;

console.log("Digite numeros (0 para encerrar):");
while (true){
    entrada = parseFloat(prompt("numero:"))

    if(entrada === 0){
        break;

    }

    if(entrada % 2 == 0){
        somaPar = entrada + somaPar;
        qtdPar++
    }
    else{
        somaImparm = entrada + somaImparm;
        qtdImpar++;
    }
}

console.log(`soma dos pares digitados:${somaPar} quantidade de par: ${qtdPar}`);
console.log(`soma dos impares digitados:${somaImparm} quantidade de impar: ${qtdImpar}`);

