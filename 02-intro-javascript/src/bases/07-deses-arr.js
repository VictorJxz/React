


const data = ['Test1', 'Test2','Test3'];
const [ ,,t1 ] = data;

console.log( t1 );

const returnArray = () => {
    return ['ABC', 123];
}

const [stringx, numbers] = returnArray();
console.log(stringx, numbers);

const useState = (value) => {   
    return [value, () => { console.log('Hello world') } ];
}

const [ namex, setName ] = useState('@Qubit');

console.log( namex );
setName();