const prompt = require('prompt-sync')()
let i = 1 //inicializa contador
while(i <= 20){
    console.log(`contagem regressiva: ${i}`)
    if(i % 2 == 0){
        console.log(i)
    }
    i++
}
console.log ('FIM');
