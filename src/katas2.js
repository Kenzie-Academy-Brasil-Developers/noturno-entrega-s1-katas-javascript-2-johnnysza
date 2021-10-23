// comece a criar a sua função add na linha abaixo

function add(x,y){
    return x + y
}

// descomente a linha seguinte para testar sua função
 console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo

function multiply(x,y){
    let output = 0
    for(let num = 1; num <= y;num++){
         output = add(output,x)
         // É === x + output
    } 
    return output
}
  

// descomente a linha seguinte para testar sua função
 console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
 function power(x,y){
     let output = 1
     for(let num = 1; num <= y; num++){
         output = multiply(output,x)
     }
     return output
 }

// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
 
function factorial(x){
    let output = 1
    for(let num = x; num >= 1; num--){
        output = multiply(output,num)
    }
    return output
}

// descomente a linha seguinte para testar sua função
 console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(8) === 13, 'A função fibonacci não está funcionando como esperado');
