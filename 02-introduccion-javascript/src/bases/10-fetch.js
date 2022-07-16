const apiKey = 'PnviC75oN0m8gG1Zi7CkXtuxqdyrtdxg';
const http = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

http.then((resp) => resp.json())
    .then(({data}) => {
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
    .catch(console.error);