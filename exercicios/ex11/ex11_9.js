// Faça uma função que imprima na tela apenas os números ímpares entre 1 e 50.

function mostrarnI(){
    mostrarnI = 0
    while(mostrarnI <= 50){
        if(mostrarnI % 2 == 1){
            console.log(mostrarnI)
        }
        mostrarnI++
    }
}
mostrarnI()