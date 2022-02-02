import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
        <section>
            <h1>TrianerName</h1>
            <form onSubmit={submit}>
                <label>
                    Give me your name to start
                    <input type="text" 
                    value={name}
                    onChange={e=> setName(e.target.value)}
                    />
                </label>
                <button >Submit</button>
            </form>
        </section>
    );
};

export default TrainerName;