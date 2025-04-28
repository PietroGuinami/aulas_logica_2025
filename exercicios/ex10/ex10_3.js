// Escreva uma função que recebe um nome e o adicione a uma lista global. Em seguida,
// escreva outra função que remova um elemento dessa lista global.
var listN = ['nome', 'nomes']
function Novalist(){
    listN.push('Alemão')
    console.log(listN)
}
Novalist()
function Novalist(){
    listN.pop()
    console.log(listN)
}
Novalist()
