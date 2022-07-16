import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas 05-funciones', () => { 
    test('getUser debe retornar un objeto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const user = getUser();

        expect( testUser ).toStrictEqual( user );
    });

    test('getUsuarioActivo debe retornar un objeto con userName jhon', () => {
        
        const userName = 'jhon';
        const user = getUsuarioActivo(userName);

        expect( user ).toStrictEqual({
            uid: 'ABC567',
            username: userName
        });
    })
});