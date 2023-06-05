import React, { useContext } from 'react';
import psyduck from '../../../assets/psyduck.png'
import './modal.css'
import { PokemonContext } from '../../../context/pokemon.context';
const Modal = () => {

    const { setDeleted} = useContext(PokemonContext)

    const handleCancel = () =>{
        setDeleted([])

    }
    return (
        <div className='modalContainer'>
            <img src={psyduck}/>
            <span>Eliminar ???</span>
            <button className='btn btnSi'>Si</button>
            <button onClick={() => handleCancel()} className='btn btnNo'>Cancelar</button>
        </div>
    );
}

export default Modal;
