import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import Heroes from '../../src/data/heroes'

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe retornar un heroe por ID', () => {

        const id = 1;
        const hero = getHeroeById( id );

        expect( hero ).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
    });

    test('getHeroeById debe retornar undefined si no existe', () => {

        const id = 100;
        const hero = getHeroeById( id );

        expect( hero ).toBeFalsy(); 
    })

    test('getHeroesByOwner con DC debe retornar 3 heroes', () => {
        
        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );

        expect( 3 ).toBe( heroes.length );
        expect( heroes ).toEqual( Heroes.filter(heroe => heroe.owner === owner) );
        expect( heroes ).toEqual([
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            }
        ])
    });

    test('getHeroesByOwner con Marvel debe retornar 2 heroes', () => {
        
        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );

        expect( 2 ).toBe( heroes.length );
        expect( heroes ).toEqual( Heroes.filter( heroe => heroe.owner === owner ) );
        expect( heroes ).toEqual([
            {
                id: 2,
                name: 'Spiderman',
                owner: 'Marvel'
            },
            {
                id: 5,
                name: 'Wolverine',
                owner: 'Marvel'
            },
        ])
    });
});