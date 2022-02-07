import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const TrainerName = () => {

    const navigate= useNavigate()

    const dispatch=useDispatch()
    const [name, setName]= useState("")
    const submit =e=>{
        e.preventDefault()
        dispatch({type: "SET_NAME", playload: name})
        navigate("/pokemons")
    }
    return (
        <section className='App'>
            <div className='pokeball'></div>
           
            <div className='banner'>
                <h2 className='title title-h2'>Hello trainer!</h2>
                <img className='trainer-img' src="https://www.seekpng.com/png/full/345-3459799_starmetroids-vgc-2015-retrospective-pokemon-alpha-sapphire-trainer.png" alt="" />
            </div>
            <p className='title'>Give me your name to start</p>
            <form onSubmit={submit}>
                <label>
                    <input type="text" 
                    className='input-trainer'
                    value={name}
                    onChange={e=> setName(e.target.value)}
                    />
                </label>
                <button >
                    <i> <FontAwesomeIcon icon={faSearch}/></i>
                   
                </button>
            </form>
        </section>
    );
};

export default TrainerName;