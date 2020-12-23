
// Basic Algorithm Scripting: Find the Longest Word in a StringPassed
// Return the length of the longest word in the provided sentence.
// Your response should be a number.

findLongestWordLength("The quick brown fox jumped over the lazy dog");

function findLongestWordLength(str) {
    const spliteado = str.split(" ");
    //console.log(spliteado)
    let estado = 0;
    for(let i = 0; i < spliteado.length; i++ ){
        if (estado<spliteado[i].length){
            estado = spliteado[i].length 
        } 
    }

    return estado;
}


