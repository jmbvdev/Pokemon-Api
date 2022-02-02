import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PokemonInfo from './PokemonInfo';

const Pokemons = () => {

    const [pokemons, setPokemons]= useState([])

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon`)
        .then(res=>setPokemons(res.data.results))

    },[])

    const name = useSelector(state=>state.name)

    return (
        <div>
            <h1>Pókemons</h1>
            <p>Welcome {name}!</p>
            <ul>
                {
                    pokemons.map(pokemon=>(
                        <li key={pokemon.url}>
                            <PokemonInfo url={pokemon.url}/>

                        </li>

                    ))
                }
            </ul>
        </div>
    );
};

export default Pokemons;