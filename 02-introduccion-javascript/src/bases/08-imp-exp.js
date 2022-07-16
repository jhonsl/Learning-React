import  heroes, { owners } from "../data/heroes";

const getHeroById = (id) => heroes.find((heroe) => heroe.id === id);
const getHeroByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

// console.log(getHeroById(2));
// console.log(getHeroByOwner('DC'));
// console.log(owners);

export {
    getHeroById
}