// Oque são objetos?
// Chave-Valor (Key-Value pair)


let marcaCelular = 'LG';
let tamanhoTelaVertical = 155;
let tamanhoTelaHorizontal = 75;
let capacidadeBateria = 5000;

const celular =  {
    marcaCelular: "Asus",
    tamanhoTela: {
        vertical: 155,
        horizontal: 75
    },
    capacidadeBateria: 5000,
    ligar: function(){
        console.log("Fazendo ligação ..")
    }
}

celular.ligar();


function criarCeular(marcaCelular, tamanhoTela, capacidadeBateria ){
    return celular =  {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar(){
            console.log("Fazendo ligação ..")
        }
    }
    
}

criarCeular('Samsung', 5.5, 5000);
console.log(celular1);