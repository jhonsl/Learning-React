import { heroes } from '../data/heroes';

export const getHeroesByPublihser = (publisher) => {
    const validPublishers = ['Marvel Comics', 'DC Comics'];

    if(!validPublishers.includes(publisher)) {
        throw new Error(`${ publisher } is not a valid publisher`);
    }
    return heroes.filter(heroe => heroe.publisher === publisher);
}