import { createContext, useEffect, useState} from 'react';
import Axios from 'axios';

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) =>{

    const [pokemons, setPokemons] = useState([]);
    const [page, setPage] = useState(1);


    useEffect(() => {
        loadPokemon(page)
    },[page]);

    const loadPokemon = async (page) =>{
        let tempor = [];
        
        for (let i = page; i <= (page +10); i++) {
            await Axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then(response =>{
                tempor.push({
                    name: response.data.name,
                    weight: response.data.weight,
                    image: response.data.sprites.other.dream_world.front_default,
                    abilities: response.data.abilities
                    
                })
            })
            .catch(error =>{
                console.log("Error al cargar datos:", error);
            })
            .finally(()=>{
                console.log("Proceso finalizado");
            }) 
        }
        setPokemons(tempor)
    }
    const cambioPage = (page) =>{
        if (page <= 1) {
            setPage(1);
        }else{
            setPage(page);
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