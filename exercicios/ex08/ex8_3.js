
// Crie uma lista com os meses e imprima apenas os meses que começam com "J".

let m = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 
                'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
let mj = 'j'
for(let mes of m){
        if(mes.startsWith(mj)){
                console.log(mes)
        }
}