import  { useContext } from 'react';
import { PokemonContext } from '../../context/pokemon.context';
import PokemonCard from '../pure/card/PokemonCard';
import './pokemonGallery.css'
import Modal from '../pure/modal/modal';

const PokemonGallery = () => {
    
    let { pokemons, deleted } = useContext(PokemonContext)
    
    return (
        <div>
            {deleted.length > 0 ? <Modal/> : null }
            
            <div className='gallery_container'>
                {pokemons.map((pokemon,i) =>{
                if(!pokemon.deleted){
                    return <PokemonCard key={i}
                            id={pokemon.id}
                            name={pokemon.name}
                            image={pokemon.image}
                            abilities={pokemon.abilities}
                            weight={pokemon.weight}    
                            />
                }   
                })}
            </div>
        </div>
    );
}

export default PokemonGallery;
