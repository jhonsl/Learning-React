const nombre = "jhon";
const apellido = "salazar";
const nombreCompleto = `${ nombre } ${ apellido }`;

 console.log(nombreCompleto);

 function getSaludo(nombre) {
    return `hola mundo ${ nombre }`;
 }

 console.log(`Este es un texto: ${ getSaludo(nombreCompleto) }`);