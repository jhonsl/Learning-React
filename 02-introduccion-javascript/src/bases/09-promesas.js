import { getHeroById } from "../bases/08-imp-exp";

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroById(id);
    
            if(heroe) {
                resolve(heroe);
            } else {
                reject('No se encontro el heroe');
            }
        }, 2000)
    });
}

getHeroeByIdAsync(2).then(console.log)
                    .catch(console.error);