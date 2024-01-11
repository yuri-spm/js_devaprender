const resultado = fizzBuzz(29);
console.log(resultado);


function fizzBuzz(entrada){
    if(entrada % 3 === 0 && entrada % 5 !== 0 )
        return 'Fizz';
    if(entrada % 5 === 0 && entrada % 3 !== 0 )
        return 'Buzz';
    if(entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz';
    if (entrada % 3 !== 0 && entrada % 5 !== 0 && typeof(entrada) === "number" )
    return 'Não e divisivel por 3 e por 5'
    if( typeof(entrada) !== "number")
        return 'Não e um numero'
    
    
}