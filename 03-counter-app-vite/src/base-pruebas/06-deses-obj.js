export const usContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {
    return {
        nombreClave: clave,
        name: nombre,
        anios: edad,
        tipo: rango,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}