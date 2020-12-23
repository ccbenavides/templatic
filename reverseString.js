// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.
function reverseString(str) {
    //para mutar y generar el nuevo string
    let estado = "";
    //para obtener los índices, desde el índice final hasta el primer índice
    for(let i = str.length - 1;i >=0;i-- ){
        //mutando el estado concatenando los valores del string
        estado = estado + str[i] 
    }
    return estado;
  }
  
  console.log(reverseString("hello"));
  