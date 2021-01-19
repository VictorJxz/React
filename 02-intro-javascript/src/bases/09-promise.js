
import { getHeroeById } from '../bases/08-import';

const promesa = new Promise( (resolve, reject) => {
    setTimeout( () => {

        const data = getHeroeById(2);
        resolve( data );
        //reject('Data cannot be found');
    }, 2000);
});

/* promesa.then( ( data ) => {
    console.log('Data ',data);
})
.catch( err => console.warn( err )); */

const getHeroeByIdAsync = ( id ) => {
    return  new Promise( (resolve, reject) => {
        setTimeout( () => {
    
            const data = getHeroeById( id );
            if( data ){
                resolve( data );
            } else {
                reject('Data cannot be found');
            }
        }, 2000);
    });
}

getHeroeByIdAsync(1).then( console.log ).catch( console.warn);