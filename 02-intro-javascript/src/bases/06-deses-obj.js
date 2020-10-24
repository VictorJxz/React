
const saludar =  function ( name ){
    return `Hi! ${ name }`;
}

const saludar2 = (name) => {
    return `Hi! ${ name }`;
}

const saludar3 = (name) => `Hi! ${name}`;

const getUser = () => ({ udi: '13312', username: 'virus',});

const getUserActive = ( name ) => {
    return {udi: '56738', surname: name};
}

const userActive = getUserActive('@virus');
console.log( userActive );

console.log( saludar2('@Qubit') );
console.log( saludar3('HdrLab') );


const user = getUser();
console.log( user );