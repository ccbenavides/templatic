function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b)
    var estado = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            estado = i
        }
    }
    return estado;
}

console.log(getIndexToIns([3, 10, 5], 10));
