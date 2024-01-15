// somar multiplos de 3 e 5

somar(10);
function somar(n){
    let mult3 = 0;
    let mult5 = 0;
  
    for(i=0; i <= n; i++){
       if(i % 3 === 0 ){
        mult3 +=i;

       }else if(i % 5 === 0 ){
         mult5 += i;
       }
}
    
    console.log(mult3 + mult5);
}