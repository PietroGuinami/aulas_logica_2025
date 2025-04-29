// Crie uma função que gere uma senha aleatória, deve receber como parâmetro a
// quantidade de caracteres que terá a senha, crie uma lista com todos os caracteres disponíveis
// para a senha e com o random sorteie a qual de dígitos terá a senha

function gerarSenha(tamanhoSenha){
    let c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let s = ''

    for(let i = 0; i < tamanhoSenha; i++){
        let letraSorteada = Math.floor(Math.random() * c.lenght)
        senha += c[letraSorteada]
    }
    return senha;
}

console.log(' senha de 6 carcteres:', gerarSenha(6))
console.log(' senha de 6 carcteres:', gerarSenha(10))