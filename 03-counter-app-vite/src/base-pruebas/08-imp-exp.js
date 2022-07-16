import Heroes from '../data/heroes';

export const getHeroeById = ( id ) => Heroes.find( (heroe) => heroe.id === id );
export const getHeroesByOwner = ( owner ) => Heroes.filter( (heroe) => heroe.owner === owner );