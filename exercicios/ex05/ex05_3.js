const prompt = require('prompt-synce')()
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
