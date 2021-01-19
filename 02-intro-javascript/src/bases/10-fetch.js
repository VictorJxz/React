
const api_key = 'qp6QYR04lUvpmbKSObQAOErmfsfqE8YR';

const request = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ api_key }`);
request
    .then( response => response.json())
    .then( ({data}) => {

        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
        
    })
    .catch( console.warn );