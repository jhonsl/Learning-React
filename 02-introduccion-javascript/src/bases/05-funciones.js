const saludar = function( nombre ) {
    return `Hola, ${ nombre }`;
}
const saludar2 = ( nombre ) => `Helowww ${ nombre }`;
const saludar3 = () => ({
    name: 'jhon',
    apellido: 'wick'
})
const saludar4 = ( nombre ) => ({
    name: 'super',
    apellido: nombre
})

console.log(saludar('pedro'));
console.log(saludar2('pablo'));
console.log(saludar3());
console.log(saludar4('perro'));