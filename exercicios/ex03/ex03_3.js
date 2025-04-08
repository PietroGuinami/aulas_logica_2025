const prompt = require('prompt-sync')()

let mes = (prompt('qual o mes?'))

if(mes == 'janeiro'){
    console.log('em janeiro tem 31 dias');
}else if(mes == 'fevereiro'){
    console.log('tem 28 dias em fevereiro');
}else if(mes == 'março'){
    console.log('tem 29 dias em março')
}else if(mes == 'abril'){
    console.log(' abril possui 30 dias')
}else if(mes == 'maio'){
    console.log(' maio tem 31 dias')
}else if(mes == 'junho'){
    console.log(' junho possui 30 dias')
}else if(mes == 'julho'){
    console.log('julho tem 31 dias')
}else if(mes == 'agosto'){
    console.log('agosto tem 30 dias');
}else if(mes == 'setembro'){
    console.log('setembro tem 30 dias')
}else if(mes == 'outubro'){
    console.log('outubro tem 31 dias')
}else if(mes == 'novembro'){
    console.log('novembro tem 29 dias')
}else if(mes == 'dezembro'){
    console.log('dezembro possui 31 dias')
}