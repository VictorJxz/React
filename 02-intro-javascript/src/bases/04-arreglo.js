

const array = [1,2,3,4];
//array .push(1);

let array2 = [...array, 5];
array2.push( 5 );

//................    fuction callback    ........................
const array3 = array2.map( function( number ) {
    return number*2;
});

console.log( array );
console.log( array2 );
console.log( array3 );