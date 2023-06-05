import  { useContext } from 'react';
import { PokemonContext } from '../../../context/pokemon.context';
import './controls.css'
const Controls = () => {

    const { cambioPage, page } = useContext(PokemonContext)

    return (
        <div className='controls'>
            <button onClick={()=>cambioPage(page - 1)} >Anterior</button>
            <span className='amount'>Página: {page}</span>
            <button onClick={() => cambioPage(page + 1)}>Siguiente</button>
        </div>
    );
}

export default Controls;
