const prompt = require(' prompt- sync ')()

let y = Number(prompt('digite sua iadade:'))
if (y <= 10 ){
    console.log(' criança')
}else if(y <=17 ){
    
}else if(y <= 50 ){
    console.log('adulto')
}else{
    console.log('idoso')
}