// calcular si el numero es primo

function isPrimo(num) {
    if (num < 2){
        return false;
    }

    // obtenemos los numeros del 2 hasta el num // 2,3,4,5,6
    for (let i = 2; i < num; i++ ){
        //  3%2 == 0
        if(num%i == 0){
           return false;
        }
        
    } 
    return true;
  }
  
  console.log(isPrimo(2));
  