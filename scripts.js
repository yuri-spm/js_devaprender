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

function Celular(marcaCelular, tamanhoTela, capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela  = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function(){
        console.log("Fazendo Ligação....");
    }
}

const celular = new Celular('Asus', 5.4, 5000);
console.log(celular);