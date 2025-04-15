// Nessa string ‘Gol;Corsa;Palio;Monza;Fusca;’, faça a separação desses itens para
// uma lista e exiba o item e a posição que ele está.

let carros = 'Gol;Corsa;Palio;Monza;Fusca;'
let Lc = carros.split(';')

Lc.pop()
for(let[posicao, carro] of Lc.entries()){
    console.log(`Posição ${posicao}: ${carros} `)
}