function largestOfFour(arr) {
    //para mutarlo en cada ciclo y hacer un nuevo array con los números mayores de cada elemento
    var estado = [];
    
    //para obtener los índices del array arr y con los índices obtener los elementos o valores del array
    for(let i = 0; i < arr.length;i++){
        //console.log(arr[i])
        //para agregar un nuevo array con los números mayores de cada elemento.
        estado.push(Math.max(...arr[i]))
    }
    return estado;
  }
  
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
  // [5,27,39,1001]
  