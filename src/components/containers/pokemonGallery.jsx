import  { useContext } from 'react';
import { PokemonContext } from '../../context/pokemon.context';
import PokemonCard from '../pure/card/PokemonCard';
import './pokemonGallery.css'

const PokemonGallery = () => {
    let { pokemons, setPokemons } = useContext(PokemonContext)
    
    return (
        <div>
            <div className='gallery_container'>
                {pokemons.map((pokemon,i) =>{
                    {JSON.stringify(pokemons)}
                    return <PokemonCard key={i} 
                        name={pokemon.name}
                        image={pokemon.image}
                        abilities={pokemon.abilities}
                        weight={pokemon.weight}    
                        />
                })}
            </div>
        </div>
    );
}

export default PokemonGallery;
