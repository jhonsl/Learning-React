const heroe = {
    nombre: 'batman',
    edad: 40,
    comic: 'DC'
}
const {nombre, edad, comic} = heroe;
const {nombre:hero} = heroe;
const {nombre:name, ...rest} = heroe;

console.log(rest);
console.log(hero);
console.log(nombre, edad, comic);


// const returnPerson = ({ nombre, edad }) => console.log(`Nombre: ${ nombre }, \nEdad: ${ edad }`);
const returnData = ({ nombre, edad }) => ({
    nombreClave: nombre,
    anios: edad,
    poderes: {
        volar: false,
        dinero: true
    }
});
const { nombreClave, anios, poderes:{ volar, dinero } } = returnData(heroe);

console.log(nombreClave, anios, volar, dinero);