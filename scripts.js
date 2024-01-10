// If..Else

// Se a hora estiver entre as 06h ate 12h : Bom dia
// Se a hora estiver entre as 12h ate 18h : Boa tarde
// Caso contrário: Boa noite

let hora = 22

if(hora > 6 && hora < 12){
    console.log("Bom dia");
}else if(hora > 12 && hora < 18){
    console.log("Boa tarde");
}else{
    console.log("Boa noite");
}