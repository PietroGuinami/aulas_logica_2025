// declarando um novo vetor
// reconhendo que é um vetor pelo colchetes
let listaVazia = []

// declarando uma lista de numeros
let n = [1,2,3,4,5,6]
console.log(n)
console.log(n[2])

// declaração de uma lista de strings
let nomes = ["Ana", "joão", "Maria"]
console.log(nomes)

// declaração de uma lista mista
let listaMista = [1, "dois", true, 2.5]
console.log(listaMista)

let listaComLista = [
    ['Coca-cola', 'cachorro-quente']
    [5.0, 10.0]
]
console.log(ListaComLista)

// Alternando valores da lista
let frutas = ['maça', 'pera', 'uva','abacaxi']
console.log(frutas)
// A função push adiciona um novo elemento no vetor
frutas.push('laranja')
console.log(frutas)
// o spread adiciona um novo elemento no vetor
frutas = [...frutas, 'banana']
console.log(frutas)

frutas.splice(2, 0, 'morango')
console.log(frutas)

// excluindo item na lista
frutas.splice(3,1) //Excluindo itemm pelo indice
console.log(frutas)
frutas.shirt() //excluindo primeiro item da lista
frutas.pop()
console.log(frutas)

// acessar os itens da lista
console.log(frutas[3])
console.log(frutas.slince(0,4))//posição até 4
console.log(frutas.slince(1))//apartir da posi 1
console.log(frutas.slince(-1))//mostrar os itens do fim ao inicio 
console.log(frutas.length)//total de itens na lista

// ordenar itens da lista
console.log(frutas)
frutas.sort()//ordenar a lista de forma crescente
console.log(frutas)
frutas.reverse()//ordenando de forma decrescente
console.log(frutas)