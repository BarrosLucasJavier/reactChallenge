import { createContext, useEffect, useState} from 'react';
import Axios from 'axios';

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) =>{

    const [pokemons, setPokemons] = useState([]);
    const [page, setPage] = useState(1);
    const [pokemonNumber, setPokemonNumber] = useState(11);
    const [deleted, setDeleted] = useState([])


    useEffect(() => {
        loadPokemon(page)
        setDeleted([])
    },[page]);

    const loadPokemon = async (pag) =>{
        let tempor = [];
        
        for (let i = (pokemonNumber - 10 ); i <= pokemonNumber; i++) {
            const response = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
                let abilityTemp = [];
                for (let x = 0; x < response.data.abilities.length; x++) {
                    abilityTemp.push(response.data.abilities[x].ability.name)
                }
                tempor.push({
                    id: i,
                    name: response.data.name,
                    weight: response.data.weight,
                    image: response.data.sprites.other.dream_world.front_default,
                    abilities: abilityTemp,
                    deleted:false
                })
        }
        setPokemons(tempor)
    }
    const cambioPage = (pag) =>{
        if (pag <= 1) {
            setPokemonNumber(11)
            setPage(1);
        }else{
            setPokemonNumber((pag *10) + pag )
            setPage(pag);
        }
    }
    return (
        <PokemonContext.Provider value={{
            pokemons,
            cambioPage,
            deleted,
            setDeleted,
            page,
            setPage
            }}>
            {children}
        </PokemonContext.Provider>
    )
}