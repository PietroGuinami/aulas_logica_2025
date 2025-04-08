const prompt = require('prompt-sync')();

let numero = Number(prompt("qual o numero"));
if( numero <= 0){
    console.log("negativo")
} else{
    console.log("positivo")
}
