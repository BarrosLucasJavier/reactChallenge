export const getAllPokemon = async () =>{
    let response = await fetch('https://pokeapi.co/api/v2/pokemon');
    return response.json()
}

export const pokemonDetail = async (url) =>{
    let response = await fetch(url);
    return response.json()
}