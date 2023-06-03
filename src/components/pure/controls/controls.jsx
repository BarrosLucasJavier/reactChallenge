import  { useContext } from 'react';
import { PokemonContext } from '../../../context/pokemon.context';
import './controls.css'
const Controls = () => {

    const { cambioPage, page } = useContext(PokemonContext)

    return (
        <div className='controls'>
            <button onClick={()=>cambioPage(page - 11)} >Anterior</button>
            <span className='amount'>{page} a {page + 10}</span>
            <button onClick={() => cambioPage(page + 11)}>Siguiente</button>
        </div>
    );
}

export default Controls;
