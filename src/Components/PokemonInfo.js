import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PokemonInfo = ({url}) => {

    const [pokemon, setPokemon]= useState({})

    useEffect(()=>{
        axios.get(url)
        .then(res=>setPokemon(res.data))

    },[url])
    return (

        <Link to={`/pokemons/${pokemon.id}`}>
            {pokemon.name}
            <img src={pokemon.sprites?.front_default} alt="" />
        </Link>

    );
};

export default PokemonInfo;