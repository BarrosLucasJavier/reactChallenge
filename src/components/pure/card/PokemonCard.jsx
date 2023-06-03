import './card.css'

const PokemonCard = ({ name, image, weight, abilities }) => {
   /*  console.log(abilities); */
    return (
        <div className='container'>
            <div className='img'>
                <img src={image}/>
            </div>
            <div>
                <h3 className='name'>{name} - {weight}</h3>
            </div>
        </div>
    );
}

export default PokemonCard;
