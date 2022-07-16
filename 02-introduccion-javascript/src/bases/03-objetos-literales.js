const persona = {
    nombre: 'tony',
    apellido: 'stark',
    edad: 45,
    direccion: {
        carrera: '15A',
        numero: 6,
        guion: 95,
        apart: 2
    }
};
const persona2 = { ...persona };
persona2.nombre = 'batman';

console.log(persona);
console.log(persona2);