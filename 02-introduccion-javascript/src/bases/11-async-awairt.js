const getImage = async() => {
    try {
        const apiKey = 'PnviC75oN0m8gG1Zi7CkXtuxqdyrtdxg';
        const http = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await http.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
    
        img.src = url;
        document.body.append(img);
    } catch(error) {
        console.error(error);
    }
}

getImage();