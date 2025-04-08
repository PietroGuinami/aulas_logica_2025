// at 10

const prompt = require('prompt-sync')()

let dias = Number(prompt("quantos dias alugado?"));
let km = Number(prompt("quantos km rodado?"));
console.log( `você irar pagar ${((dias*60)+ km*0.15)} `);

