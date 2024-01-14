const filme = {
    titulo : 'Vingadores',
    ano: 208,
    diretor: 'Yuri',
    personagem: 'Thor'
}

exibiPropriedades(filme);
function exibiPropriedades(obj){
   for(string in obj){
     if(typeof(obj[string]) === 'string'){
        console.log(string, obj[string]);
     }
   }
}