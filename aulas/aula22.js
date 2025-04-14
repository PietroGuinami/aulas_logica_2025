//Importando a blibioteca para entrada de dados
const prompt = require('prompt-sync')();

//Recer e amazenaro texto
let curso = "desenvolvimento de sistema"
//tipo e nome recebe valor na variavel

//exibir o valor armazenado
console.log("curso") //imprimo uma string(texto)
console.log(curso) //imprimi o valor que esta dentro da variavel
console.log("curso", curso);

//criando e atribuindo valor a outras variavesis
let idade = 25 // valor do tipo int
let temperatura = 35.5 //valor do tipo float
let nome = "Pierre"
let peso = 58
console.log("ola", nome, "voce tem", idade, "pesa", 58, "e hoje esta fazendo", temperatura, "ºC")

//usando teplate string
console.log(`ola ${nome}, voce tem ${idade}, pesa ${58} e hoje esta fazendo ${temperatura} ºC`); 
let dia = true;
let chovendo = false;

const PI = 3.1415
console.log(PI)
                    
// Utilidade prompt para receber dados
// Entrada de dados

// no prompet sempre recebemos uma string
nome = prompt('Qual é seu nome?')
// usando o parseIt ou parseFloat coverte os valores recebidos
// que vem como string
idade = prompt('qual é sua idade?')

peso = parseFloat(prompt('qual seu peso ?'))
 
console.log(`Seu nome é ${nome}, você tem ${idade} e pesa ${peso}`)
console.log(typeof(idade))
console.log(typeof(peso))
// Apos a coversao dos valores é possivel realizar
// calculos matematicos 