import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BackgroundColors from './BackgroundColors';

const PokemonInfo = ({url}) => {

    const [pokemon, setPokemon]= useState({})

    useEffect(()=>{
        axios.get(url)
        .then(res=>setPokemon(res.data))

    },[url])
 
    return (

            <div className='row'>
                <div className='pokeball'></div>
                <Link style={{background: `${BackgroundColors(pokemon.types?.[0].type.name)}`}} to={`/pokemons/${pokemon.id}`} className='card'>
                    <div className='card-text'>
                        <h3 className='card-title'>{pokemon.name}</h3>
                        <div className='container-text'>
                            <b>Types: </b>  {pokemon.types?.[0].type.name}  {pokemon.types?.[1]?.type.name} 
                        </div>
                        <div className='container-text'>
                            <b>Hp: </b> {pokemon.stats?.[0].base_stat}
                        </div>
                        <div className='container-text'>
                            <b>Attack: </b> {pokemon.stats?.[1].base_stat}
                        </div>
                        <div className='container-text'>
                            <b>Defense: </b> {pokemon.stats?.[2].base_stat}
                        </div>
                        <div className='container-text'>
                            <b>Speed: </b> {pokemon.stats?.[5].base_stat}
                        </div>
                    </div>
                    <div className='card-img'>
                        <img src={pokemon.sprites?.front_default} alt="" />
                        <div className='pokeball-img'></div>

                    </div>
                </Link>
            </div>

    );
};

export default PokemonInfo;