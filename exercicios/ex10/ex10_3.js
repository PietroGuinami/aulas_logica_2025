// Escreva uma função que recebe um nome e o adicione a uma lista global. Em seguida,
// escreva outra função que remova um elemento dessa lista global.

// var listN = ['nome', 'nomes']
// function Novalist(){
//     listN.push('Alemão')
//     console.log(listN)
// }
// Novalist()
// function Novalist(){
//     listN.pop()
//     console.log(listN)
// }
// Novalist()


///////////////////correção/////////////////////

 let Nomel = []

 function adicionarNome(nome){
    Nomel.push(nome)

 }

 function removerNome(){
    Nomel.pop()
 }
 function removerPorNome(nome){
    let posicao = Nomel.indexOf(nome)
//Quando o indexof nao encontra o elemento ele retorna -1
    if(posicao != -1){
        Nomel.splice(posicao, 1)
    }
    }
 adicionarNome('Ana')
 adicionarNome('Camila')
 adicionarNome('Matheus')
 console.log(Nomel)
 adicionarNome('Garro')
 console.log(Nomel)
 removerNome()
 console.log(Nomel)
 removerNome('Camila')
 console.log(Nomel)