import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PokemonsDetails = () => {
    const {id}= useParams();

    const[pokemon, setPokemon]= useState({})
    
    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res=>setPokemon(res.data))
    },[id])


    return (
        <section>
            <h1>PokemonDetails</h1>
            <p>Shoing pokemon with id {id}</p>
            {pokemon.name}
            <img src={pokemon.sprites?.front_default} alt="" />
        </section>
    );
};

export default PokemonsDetails;