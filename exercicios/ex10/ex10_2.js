// Escreva uma função que recebe um nome e o adicione a uma lista global. Em seguida,
// escreva outra função que remova um elemento dessa lista global.

var dolar = 5.67
var euro = 6.64 
function converter(valor){
    console.log('dolar', + (valor / dolar))
    console.log('dolar', + (valor / euro))
}

converter(500)


///////////////////correção/////////////////////

let d = 5.65
let e = 6.64

function converterMoeda(valorReais){
    let vd = valorReais / d
    let ve = valorReais / e

    console.log(`R$ ${valorReais.toFixed(2)} equivale a:`)
    console.log(`US$ ${vd.toFixed(2)}`)
    console.log(`E ${ve.toFixed(2)}`)
}

converterMoeda(100)
converterMoeda(50)
converterMoeda(10)