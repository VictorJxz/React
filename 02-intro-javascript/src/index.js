
// Ternary

const active = true;

/* if ( !active ){
    message = 'Active';
} else {
    message = 'Inactive';
} */

//const message = ( active ) ? 'Active': 'Inactive';
const message = !active && 'Active';


console.log( message );