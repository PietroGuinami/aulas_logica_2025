// at 04

const prompt = require('prompt-sync')()

let nt = Number(prompt("qual a sua nota"));
let nt2 = Number(prompt("qual a sua nota"));
let soma_notas = nt + nt2;
console.log(` A soma das notas ${nt} + ${nt2} é igual ${soma_notas}`);
let media = soma_notas / 2
console.log(` A soma das notas ${soma_notas} / ${2} é igual ${media}`);