function verifyValue(a, b){


    if(a > b){
        console.log(a + ' e maior que ' + b);
    }else if (b > a){
        console.log(b + ' e maior que ' + a);
    }else{
        console.log('Os numeros são iguais');
    }
}

verifyValue(10, 8);

let valorMaior = max(1,2);
console.log(valorMaior);

function max(a,b){
    if(a > b)
        return a;
    return b;
}