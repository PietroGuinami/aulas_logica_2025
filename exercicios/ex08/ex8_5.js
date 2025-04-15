// Crie uma lista com 5 números aleatórios e exiba o nr e seu dobro.
const prompt = require('prompt-sync')()

let nu = []

for(let i = 0; i< 5; i++){
    let nuA = Math.floor(Math.random() * 100) + 1
    nu.push(nuA)
    console.log(`O dobro de ${nu[i]} : ${nu[i] * 2}`)
}