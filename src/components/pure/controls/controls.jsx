import  { useContext } from 'react';
import { PokemonContext } from '../../../context/pokemon.context';
import './controls.css'
const Controls = () => {

    const { cambioPage, page } = useContext(PokemonContext)

    return (
        <div className='controls'>
            <button onClick={()=>cambioPage(page - 10)} >Anterior</button>
            <span>Pagina:</span>
            <button onClick={() => cambioPage(page + 10)}>Siguiente</button>
        </div>
    );
}

export default Controls;
