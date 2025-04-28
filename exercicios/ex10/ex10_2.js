// Escreva uma função que recebe um nome e o adicione a uma lista global. Em seguida,
// escreva outra função que remova um elemento dessa lista global.

var dolar = 5.67
var euro = 6.44 
function converter(valor){
    console.log('dolar', + (valor / dolar))
    console.log('dolar', + (valor / euro))
}

converter(500)