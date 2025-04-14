const prompt = require('prompt-sync')()

//trabalhando com lanços de repetiçao (while)

//executar o laço x vezes
let contador = 1;
//ira repetir enquanto a condiçao for verdadeira
// ou seja sera verdade enquanto o contador for menor ou igual a 5
while(contador <=5){
         console.log(`o contador é ${contador}`)
         //incrementado a variavel ou seja adicionando o valor a ela
         // para que continue o processo ate que a condiçao seja atiginda
         // contador = contador ++;
         contador = contador + 1;


}
console.log("Fim")

let senha_senai = '12345'

while(true){
 let senha = prompt('Digite a senha')
 if(senha_senai == senha){
    console.log('voce hackeou a senha');
    break;
 }else if(senha == 'desisto'){
    break;
 }
}
console.log('fim');

let soma = 0;
let quantidade = 0;

while(true){
    let valor = Number(prompt('digite o valor do produto):'));
    if(valor == 0){
        break;

    }
    else{
        soma = soma + valor;
        quantidade++;
    }
}
console.log(`foram informados ${quantidade}`)
console.log(`valor total produto ${soma.toFixed(2)}`);




let sm = 0;
let qtd = 0;
let encerrar =""
while(encerrar != "sub total"){
    let valor = Number(prompt('digite o valor'));
      sm = sm + valor;
        qtd++;
        encerrar = prompt("deseja continuar:(digite sub total)")

}
console.log(`foram informados ${qtd}`)
console.log(`valor total produto ${sm.toFixed(2)}`);

//crie um jogo de adivinhação de numeros,
//computador precisa sortear um numero,
//enquanto ele nao acertar continua pedind um novo numero

console.log("#################################");
console.log("🤔 jogo da adivinhação 🤔");
console.log("#################################");

let nrsorteado = Math.random() * 100 + 1 //gera um numero aleatorio
console.log(nrsorteado);
while(!acertou){
    const chute = parseint(prompt('🐔 digite um numero entre 1 e para adivinha'))

    if(chute > nrsorteado){
    console.log(`voce chutou ${chute}, tente um numero😊!`);
    }
    else if(chute < nrsorteado){
        console.log(`voce chutou ${chute}, tente um numero🤷‍♂️!`);
    }
    else if(chute == nrsorteado){
        console.log(`voce chutou ${chute}, 🙊 parbéns você acertou!`);
        acertou = true;
    }
}

