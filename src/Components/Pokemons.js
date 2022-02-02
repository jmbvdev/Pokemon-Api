import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonInfo from './PokemonInfo';

const Pokemons = () => {

    const [pokemons, setPokemons]= useState([])
    const [types, setTypes]= useState([])
    const [pokemonSearched, setPokemonSearched]= useState("")
    const navigate=useNavigate()

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon`)
        .then(res=>setPokemons(res.data.results))
    },[])
    
    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/type/`)
        .then(res=>setTypes(res.data.results))
    },[])

    const name = useSelector(state=>state.name)

    const filteredPokemons= url=>{
        axios.get(url)
        .then(res=>setPokemons(res.data.pokemon))
    }
   
    const search=()=>navigate(`/pokemons/${pokemonSearched}`)

    return (
        <div>
            <h1>Welcome {name}!</h1>
            <select onChange={e=> filteredPokemons(e.target.value)}>
            {
                    types.map(type=>(
                        <option key={type.url} value={type.url}>
                            {type.name}
                        </option>
                    ))
            }
            </select>
            <input type="text" value={pokemonSearched} onChange={e=>setPokemonSearched(e.target.value)}/>
            <button onClick={search}>submit</button>
          
            
            <ul>
                {
                    pokemons.map(pokemon=>(
                        <li key={pokemon.url ? pokemon.url: pokemon.pokemon.url}>
                            <PokemonInfo url={pokemon.url ? pokemon.url: pokemon.pokemon.url}/>
                        </li>

                    ))
                }
            </ul>
        </div>
    );
};

export default Pokemons;