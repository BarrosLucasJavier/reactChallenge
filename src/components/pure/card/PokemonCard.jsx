import { useContext, useEffect, useRef } from 'react';
import './card.css'
import { PokemonContext } from '../../../context/pokemon.context'

const PokemonCard = ({ id, name, image, weight, abilities }) => {

    const { setDeleted, deleted } = useContext(PokemonContext);

    const containerRef = useRef()
    useEffect(() => {
        return () => {
            containerRef.current.className === 'container'
        };
    });
    const deleteHandle = ()=> {
        if (containerRef.current.className === 'container') {
            containerRef.current.className = 'container delete'
            if (!deleted.includes(id)){
                setDeleted([...deleted, id])
                console.log(deleted)
            }
        } else {
            containerRef.current.className = 'container'
            let temp = deleted.filter(element => element !== id)
            setDeleted(temp)
            
        }
    }

    return (
        <div ref={containerRef} onClick={deleteHandle} className='container'>
            <div className='img'>
                <img src={image}/>
            </div>
            <div>
                <h3 className='name'>{name} - {weight}</h3>
                <div className='abilityContainer'>
                    {abilities.map((ability, index) =>{
                        return <span className='ability' key={index}>{ability}</span>
                    })}
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;
