

const person = {
    name : 'Tony',
    surname : 'Stark',
    age : 45,
    direction : {
        city : ' New York',
        zip : 155555444,
        lat: 23.4567,
        lng: 53.345678,

    }
};



const person2 = { ...person };
person2.name = 'Peter'

console.log(person2);
console.log( person );