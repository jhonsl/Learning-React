const array = [1,2,3,4]
const array2 = [...array,5,6,7,8,9]
const array3 = array.map(numero => Math.pow(numero, 2));
const array4 = array.map(function(numero) {
    return Math.pow(numero, 2);
});

console.log(array);
console.log(array2);
console.log(array3);
console.log(array4);