exibirnumerosPrimos(15);

function exibirnumerosPrimos(divi){
    for(S = 2; S <= divi; S++){
        if(isPrimos(S)){
            console.log(S);
        }
    }
} 

function isPrimos(S){
    for(i = 2; i < S; i++){
        if(S % i === 0){
            return false;
        }
    }
    return S > 1;
}
