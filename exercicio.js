const prompt = require('prompt-sync')();

console.log("exercícios aula de lógica");
console.log("bem vindo ao curso de JavaScript!");
console.log("estou aprendendo a usar o console.log")

console.log( 15 + 25);
console.log( 100 - 45);
console.log( 12 * 7);
console.log( 144 /12);
console.log( 20 % 5);
console.log(2 ** 5);


// exercicios de variaveis

// 1- criar 5 variaveis 

let nome = "Pg"
let idade = 17;
let tamanho = 1.70
let ano = '2º colegial'
let escola = 'SESI025'
console.log(` ${nome} tem ${idade}, mede ${tamanho} e esta no ${ano} na escola ${escola} `)

nome = prompt('qual seu nome?')
idade = prompt( 'quantos anos você tem?')
tamanho = prompt('qual seu tamanho?')
escola = prompt('qual sua escola?')
ano = prompt('que ano estamos?')
//exibir variaveis
console.log(`qual seu nome ? ${nome}, quantos anos você tem ? ${idade}, qual seu tamanho ? ${tamanho}, qual sua escola ? ${escola}, que ano estamos ? ${ano} `)

// 2 - crie 3 variaveis 
let nomeProf = 'Julia'
let chegou = 2024
let materia = 'biologia'
console.log(`a professora ${nomeProf}, entrou em ${chegou} e da aula de ${materia}`)

// retribuindo valores as nossas variaveis 
nomeAluno = prompt(' digite o nome do aluno?')
altura = prompt('digite a altura?')
escola = prompt('digite o nome da escola?')
ano = prompt(' digite o ano da turma?')
console.log(`O aluno ${nomeAluno} tem ${altura}, estuda na escola ${escola}, esta no ano ${ano} `)

