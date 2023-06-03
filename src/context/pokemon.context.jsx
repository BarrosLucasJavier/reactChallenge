import { createContext, useEffect, useState} from 'react';
import Axios from 'axios';

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) =>{

    const [pokemons, setPokemons] = useState([]);
    const [page, setPage] = useState(1);


    useEffect(() => {
        loadPokemon(page)
    },[page]);

    const loadPokemon = async (pag) =>{
        let tempor = [];
        
        for (let i = pag; i <= (pag +10); i++) {
            const response = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
                let abilityTemp = [];
                for (let x = 0; x < response.data.abilities.length; x++) {
                    abilityTemp.push(response.data.abilities[x].ability.name)
                }
                tempor.push({
                    name: response.data.name,
                    weight: response.data.weight,
                    image: response.data.sprites.other.dream_world.front_default,
                    abilities: abilityTemp,
                })
        }
        setPokemons(tempor)
    }
    const cambioPage = (pag) =>{
        if (pag <= 1) {
            setPage(1);
        }else{
            setPage(pag);
        }
    }
    return (
        <PokemonContext.Provider value={{
            pokemons,
            setPokemons,
            cambioPage,
            page
            }}>
            {children}
        </PokemonContext.Provider>
    )
}