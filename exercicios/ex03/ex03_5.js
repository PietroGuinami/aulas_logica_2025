const prompt = require(' prompt- sync ')()

let s = Number(prompt('digite seu salario: '))

if((s <= 2000)){
    // let reajuste = s *0.12
    // s = s + reajuste 
    s = s + (s * 0.12)
    console.log(`Salario reajuste em 12%, o valor total é ${s}`)
}
else if(s > 2000 || s <= 4000){
    // let reajuste = s *0.12
    // s = s + reajuste
    s = s + (s * 0.10)
    console.log(`salario reajuste em 10%, o valor total é ${s}`)
}
    else if{
    // let reajuste = s * 0.12
    // s = s + reajuste
    s = s + (s * 0.08)
    console.log(`salario reajustado em 08%, o valor total é ${s}`)
}