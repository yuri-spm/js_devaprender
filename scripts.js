// Operador Lógico e (&&)
// Retorna TRUE se os dois operando forem true

console.log(true && true);
console.log(false && true);

// let maiorDeIdade = true;
// let possuiCarteiraDeTrabalho = true;
// let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

// console.log(podeAplicar);


// Operador Lógico ou (||)
// Retornar true se um dos operandos forem true

// let maiorDeIdade = true;
// let possuiCarteiraDeTrabalho = true;
// let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;
// console.log(podeAplicar);


// Operador NOT (!)

let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = false;
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;
console.log('pode aplicar: ', podeAplicar);
let canditatoRecusado = !podeAplicar;

console.log('Candidato Recusado ',canditatoRecusado);
