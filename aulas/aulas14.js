let frutas = ['maça', 'banana', 'uva', 'abacaxi']

// A variavel x serve para iterar os valores ate o limite da lista
// O nome não é obrigatoriamente ser o nome i, x ou contator
// pode ser qualquer o nome variavel
for(let x = 0; x < frutas.length; x++){

    console.log(`A fruta é ${frutas [x]}`)
}
    let listaNome = ['Bill Gates', 'Rafinha', 'Raul Seixas', 'Esteves', 'Vieira']
    // para cada nome da lista nomes, escreva um nome
    for(let name of listaNome){
        console.log(nome)
    }
    // verificando se é uma consoante 
    // lista de vogais
    const prompt = require('prompt-sync')()
    let vogais = ['a', 'e', 'i', 'o', 'u']

    let letra = prompt('Digite uma letra: ')

    if(vogais.includes(letra.toLocaleLowerCase())){
        console.log('É uma vogal ?')
    }

    // obtendo a posição do item
    for(let[pos,fruta] of frutas.entries()){
        // entries retorna o par de cada elemento do vetor
        // ou seja a posição e a fruta
        console.log(`Posição ${pos} e frutas ${fruta}`)
    }

    // separando os itens em uma lista
    let produto = 'Celular, Notbook, TV, Tablet, Headset'
    // O split divide a string e forma uma lista a partir do limita
    // no caso abaixo uma virgula
    let listaProdutos = produto.split(',')
    for(let produto of listaProdutos){
        console.log(produto)
    }

    //Percorrendo uma string com uma lista(lista de caracteres)
    let palavra =  'SENAI'
    for(let letra of palavra ){
        console.log(letra)
    }

    // EXERCICIO
    let consoantes = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'L', 'M','N', 'P', 'Q', 'R', 'S', 'T', 'V', 'X', 'Z']
    let c = prompt('Digite uma letra: ')
    if(consoantes.includes(c.toLocaleLowerCase())){
        console.log('É uma vogal ?')
    }else if(consoantes.includes(c.toLocaleLowerCase())){
        console.log('Consoante')}
        else{console.log('Não e uma letra')}