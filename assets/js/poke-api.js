const pokeApi = {};

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.order
    pokemon.name = pokeDetail.name
    pokemon.types = pokeDetail.map((typeSlot) => typeSlot.type.name)
    pokemon.type = pokemon.types.get[0]
    pokemon.photo = 
}

pokeApi.getPokemonDetails = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then((pokemon) => {

    })
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetails))
        .then((detalRequests) => Promise.all(detalRequests))
        .then((pokemonDetails) => pokemonDetails)
        .catch((error) => console.error(error));
};
