const prompt = require(' prompt- sync ')()

let n1 = Number(prompt('digite sua nota 1 '))
let n2 = Number(prompt('digite sua nota 2 '))
let me = (n1+n2) / 2

if(me<=4){
    console.log('reprovado');
}else if(me<=7){
    console.log('recuperacao');
}else{
    console.log('aprovado');
}

