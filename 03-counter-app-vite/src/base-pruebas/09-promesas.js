import { getHeroeById } from './08-imp-exp'

export const getHeroeByIdAsync = ( id ) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () =>  {
            const p1 = getHeroeById( id );

            p1 ? resolve( p1 ) : reject( 'No se pudo encontrar el héroe' );
        }, 1000 );
    });
}