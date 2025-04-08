// Pede ao usuário o ano atual e o ano de nascimento e verifique em qual faixa etária ele pertence
// considerando (abaixo de 10 é criança, de 11 a 17 adolescente, de 18 a 59 adulto, acima de 60 idoso)

const prompt = require('prompt-sync')()

let anoAv= parseInt(prompt('em que ano estamos?: '))

let anoN = parseInt(prompt('digite o ano de nascimento: '))

switch (true){
    case anoN < 10:
    console.log("faixa etária: criança")
    break
    case anoN >= 11 && anoN <= 17:
    console.log("faixa etária: adolecente")
    break
    case anoN >= 18 && anoN < 59:
    console.log("faixa etária: adulto")
    break
    case anoN >= 60:
    console.log("faixa etária: idoso")
    break
   default:
            anoN = "valor iválido"
}       