

const name = "Victor";
const surname = "Jimenenz"

let full_name = `${ name } ${ surname} ${2+3}`;

console.log( full_name );

function getSaludo( name ){
    return "Hello "+ name ;
}

console.log( `This is a text ${ getSaludo( name ) }`);