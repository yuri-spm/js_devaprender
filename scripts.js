// Obter a média a partir de um array

//0-59: F
//60-69:D
//70-79:C
//80-89:B
//90-100:A

// const array = [90,60,50];

// console.log(mediaDoAluno(array));

// function mediaDoAluno(notas){
//     soma = 0;
//     for(let i in notas){
//         soma += notas[i];

//     }
    
//     const media = soma/(notas.length);
//     //console.log(media);

//     if (media < 60) {
//         console.log('F');
//     } else if (media >= 60 && media < 70) {
//         console.log('D');
//     } else if (media >= 70 && media < 80) {
//         console.log('C');
//     } else if (media >= 80 && media < 90) {
//         console.log('B');
//     } else if (media >= 90) {
//         console.log('A');
//     }
// }


const array = [70,70,80];

console.log(mediaDoAluno(array));

function mediaDoAluno(notas){
    const media = calcularMedia(notas);

    if(media < 59) return 'F';
    if(media < 69) return 'D';
    if(media < 79) return 'C';
    if(media < 89) return 'B';
    return 'A';
}

function calcularMedia(array){
    let soma = 0;
    for(let valor of array){
        soma += valor;
    }
    return soma/(array.length);
}