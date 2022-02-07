import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonInfo from './PokemonInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';



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
    const home=()=> navigate(`/`)

    
   

    return (
        <div className='container'>
            <button className='navigation-home' onClick={home}><i> <FontAwesomeIcon icon={faHome}/></i> </button>
            <h2 className='title'>Pokedex</h2>
            <p className='title-pokedex'>Welcome {name}!, here you can find your favorite pokemon</p>
            <select onChange={e=> filteredPokemons(e.target.value)}>
                <option value="" >All types</option>
            {
                    types.map(type=>(
                        <option key={type.url} value={type.url}>
                            {type.name}
                        </option>
                    ))
            }
            </select>
            <input  placeholder="Search Here..." type="text" value={pokemonSearched} onChange={e=>setPokemonSearched(e.target.value)}/>
            <button className='search-icon' onClick={search}><i ><FontAwesomeIcon icon={faSearch}/></i></button>
          
            <div>
            <ul className='container-card' >
                {
                    pokemons.map(pokemon=>(
                        <li className='row-list' key={pokemon.url ? pokemon.url: pokemon.pokemon.url}>
                            <PokemonInfo url={pokemon.url ? pokemon.url: pokemon.pokemon.url}/>
                        </li>

                    ))
                }
            </ul>

            </div>
        </div>
    );
};

export default Pokemons;