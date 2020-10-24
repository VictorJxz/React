
import { heroes } from './data/heroes';

const getHeroeById = ( id ) => {
    return heroes.find( element => element.id === id);
}

console.log( getHeroeById(2) );