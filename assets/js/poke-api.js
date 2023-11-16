

const pokeApi = {

}

pokeApi.getPokemons = (offseat = 10, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offseat}&limit=${limit}`
    fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .catch((error) => console.error(error))
}
