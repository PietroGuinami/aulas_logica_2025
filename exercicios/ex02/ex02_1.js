
const prompt = require('prompt-sync')();

let Nota = Number(prompt("qual é a Nota?"));
let Nota2 = Number(prompt("qual é a nota?"));
let media = (Nota + Nota2) / 2

if(media >= 7 ){
    console.log("aprovado")
} else{
    console.log("reprovado")
}