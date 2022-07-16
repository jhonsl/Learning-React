const personajes = ['goku', 'vegeta', 'gohan'];
const [p1,p2,p3] = personajes;
const [,veggita] = personajes;

console.log(veggita);
console.log(p1,p2,p3);

const returnArray = () => ['ABC', 123];
const [letras, numeros] = returnArray();

console.log(`Letras: ${ letras }\nNumeros: ${ numeros }`);

const arrayDes = (valor) => [valor, () => console.log('Hola mundo')];
const [ nombre, verName]  = arrayDes('piccoro');

console.log(nombre);
verName();