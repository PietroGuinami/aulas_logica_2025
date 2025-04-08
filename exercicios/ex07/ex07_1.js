// Exiba apenas o primeiro o filme da lista
// Exiba o filme da posição 4
// Substitua o filme da última posição e exiba a lista
// Insira um novo filme no final da lista e exiba a lista
// Insira um novo filme na posição 5 e exiba a lista
// Exclua o primeiro filme e exiba a lista
// Exclua o último filme e exiba a lista
// Exiba os 3 primeiros filmes da lista
// Exiba os 4 últimos filmes da lista
// Exiba a quantidade de filmes atualmente na lista
// Ordene os filmes em ordem decrescente e exiba-os

const prompt = require('prompt-sync')();

let filmes = ['velozes e furiosos', 'mais Velozes mais Furiosos', 
    'Velozes e Furiosos: Desafio em Tóquio', 'Velozes e Furiosos 4' ]
console.log(filmes[1])
console.log(filmes[3])

filmes[3] = 'bumblebee'
console.log(filmes)

filmes.push('clube da luta')
console.log(filmes)
filmes = [...filmes, 'clube da luta']
filmes.push('scarface')
console.log(filmes)
filmes = [...filmes, 'scarface']

filmes.shift()
console.log(filmes)

filmes.pop()
console.log(filmes)

console.log(filmes[0])
console.log(filmes[1])
console.log(filmes[2])

console.log(filmes[3])
console.log(filmes[4])
console.log(filmes[5])

console.log(filmes[1])
console.log(filmes[2])
console.log(filmes[4])
console.log(filmes[5])

console.log(filmes)

console.log


console.log(filmes.length)

console.log(filmes.sort().reverse())
console.log(filmes + 'comentario')
