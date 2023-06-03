import './card.css'

const PokemonCard = ({ name, image, weight, abilities }) => {
    
    return (
        <div className='container'>
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
