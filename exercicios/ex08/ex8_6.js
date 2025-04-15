// Receba uma palavra do usuário e calcule quantas vogais há nesta palavra.
const prompt = require('prompt-sync')()
let v = ['a', 'e', 'i', 'o', 'u']

let p = prompt('Digite uma palavra: ')
let qtdV = 0
for(let letra of p){
    if(v.includes(letra)){
        qtdV++
    }
}
console.log(`${p} tem ${qtdV} vogais`)