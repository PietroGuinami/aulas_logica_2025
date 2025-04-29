// Crie um caixa eletrônico: Crie uma variável global para armazenar o saldo, crie função para
// depositar e sacar, recebendo o valor como parâmetro, crie outra função para consultar o
// saldo. Crie um menu interativo com while para navegar entre as funções:
// [1] Depositar
// [4] Parar programa
// [2] Sacar
// [3] Consultar saldo

let saldo = 0 

//criar uma função depositar
function depositar(valorDeposito){
    saldo += valorDeposito
}
//criar a função sacar
function sacar(valorSaque){
    saldo -= valorSaque
}
//função mostrar saldo
function mostrarSaldo(){
    console.log(`Seu saldo: ${saldo}`)
}
//menu interativo
function caixaEletronico(){
    const prompt = require('prompt-sync')()
    let opcao = 0

while(opcao != 4){
    console.log('=== caixa Eletro ===')
    console.log('[1] - Depositar ')
    console.log('[2] - Sacar ')
    console.log('[3] - Consultar saldo ')
    console.log('[4] - Parar programa ')

    opcao = Number(prompt('Escolha uma opção: '))

    switch(opcao){
        case 1:
            let valorDeposito = Number(prompt('Digite o valor a ser depositado: '))
            depositar(valorDeposito)
            break
            case 2:
                let valorSaque = Number(prompt('Digite o valor a ser sacado: '))
                sacar(valorSaque)
                break
                case 3: 
                mostrarSaldo()
                break
                case 4:
                    console.log('Obrigado por usar o banco Barreto')
                    break
                    default:
                    console.log('Opção invalida')
    }
}
}

caixaEletronico()