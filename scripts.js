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

celular1 = criarCeular('Samsung', 5.5, 5000);
console.log(celular1);