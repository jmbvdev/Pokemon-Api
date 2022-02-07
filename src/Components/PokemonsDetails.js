import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BackgroundColors from './BackgroundColors';
import ProgressBar from './ProgressBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
const PokemonsDetails = () => {
    const {id}= useParams();

    const[pokemon, setPokemon]= useState({})

    const navigate = useNavigate()
    
    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res=>setPokemon(res.data))
    },[id])

    const back=()=> navigate(`/pokemons`)
    const home=()=> navigate(`/`)

    return (
        <div className='details-container' style={{background: `${BackgroundColors(pokemon.types?.[0].type.name)}`}} >
             <div className='pokeball-details'></div>
            <header  className='details-header'>
                <button className='navigation-btn' onClick={home}>
                    <i> <FontAwesomeIcon icon={faHome}/></i>   
                </button>
                <button onClick={back} className="navigation-btn">
                    <i> <FontAwesomeIcon icon={faArrowLeft}/></i> 
                </button>
                <img className='details-logo' src="https://logos-marcas.com/wp-content/uploads/2020/05/Pokemon-Logo.png" alt="" />
            </header>
            <div className='details-pokemon'>
                <div className='details-pokemon-container'>
                    <div className='detail-pokemon-img'>
                        <img src={pokemon.sprites?.front_default} alt="" />
                        <img className='back-img' src={pokemon.sprites?.back_default} alt="" />
                    </div>
                    <div className='details-name'>
                        <h1 style={{color: `${BackgroundColors(pokemon.types?.[0].type.name)}`}}>{pokemon.name}</h1>
                    </div>
                    <div className='base'>
                        <h2>Base Stats</h2>
                    </div>
                    <div className='details-pokemon-measures'>
                        <div className='measure-container'>
                            <div className='measures'>
                                <b>Hp</b>
                                <div className='bar-progress'>
                                <ProgressBar data={pokemon.stats?.[0]?.base_stat}  BackgroundColors={BackgroundColors} pokemon={pokemon}/>
                                </div>
                            </div>
                            <div className='measures'>
                                <b>Attack</b>
                                <div className='bar-progress'>
                                <ProgressBar data={pokemon.stats?.[1]?.base_stat} BackgroundColors={BackgroundColors} pokemon={pokemon}/>
                                </div>
                            </div>
                            <div className='measures'>
                                <b>Defense</b>
                                <div className='bar-progress'>
                                <ProgressBar  data={pokemon.stats?.[2]?.base_stat} BackgroundColors={BackgroundColors} pokemon={pokemon}/>
                                </div>
                            </div>
                            <div className='measures'>
                                <b>Speed</b>
                                <div className='bar-progress'>
                                <ProgressBar data={pokemon.stats?.[3]?.base_stat} BackgroundColors={BackgroundColors} pokemon={pokemon}/>
                                </div>
                            </div>
                            
                        </div>
                        <div className='measure'>
                            <div className='measure-height'  style={{background: `${BackgroundColors(pokemon.types?.[0].type.name)}`}} >
                                    <h2>{pokemon.height}</h2>
                                    <p>Height</p>
                            </div>
                            <img src={pokemon.sprites?.front_shiny} alt="" />
                            <div className='measure-height'  style={{background: `${BackgroundColors(pokemon.types?.[0].type.name)}`}} >
                                    <h2>{pokemon.weight}</h2>
                                    <p>Weight</p>
                            </div>
                        </div>
                    </div>
        

                </div>
            </div>
        </div>
        );
};

export default PokemonsDetails;