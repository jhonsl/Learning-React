import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas 06-deses-obj', () => {
    test('usContext debe retornar un objeto igual al establecido', () => {

        const clave = '123456789';
        const nombre = 'wilson';
        const edad = 20;
        const object = usContext({clave, nombre, edad});
        
        expect( object ).toStrictEqual({
            nombreClave: clave,
            name: nombre,
            anios: edad,
            tipo: 'Capitán',
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        })
    });
});