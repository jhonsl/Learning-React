export const getImagen = async() => {

    try {
        const apiKey = 'PnviC75oN0m8gG1Zi7CkXtuxqdyrtdxg';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 
        const { url } = data.images.original;

        return url;
    } catch (error) {
        console.error(error);
        return 'No se encontro la imagen buscada';
    }   
}