// Escreva uma função que utilize uma variável global para contar o número de vezes que foi
// chamada. A função deve retornar o número atual de chamadas.


    var chamadas = 0
    console.log(chamadas)

    function chamadasA(){
        chamadas ++;
        console.log(chamadas)
        return chamadas
    }

    chamadasA()
    chamadasA()
    chamadasA()
    chamadasA()
    chamadasA()

///////////////////correção/////////////////////

    let contador = 0
    function contar(){
        contador = contador +1
        // contador++
        // contador += 1
    }
    contar()
    contar()
    contar()

    console.log(contador)