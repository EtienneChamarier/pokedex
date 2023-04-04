import { useState } from "react";
import PropTypes from 'prop-types';



function NavBar({setPokemonIndex, pokemonIndex, pokemonlist}) {
 
  const handleClick = () => {
    if (pokemonlist[pokemonIndex+1].name === "pikachu") {
      alert("pika pikachu !!!");
      }
      setPokemonIndex(pokemonIndex + 1)}
    

  const decrementClick = () => {
    if (pokemonlist[pokemonIndex-1].name === "pikachu") {
      alert("pika pikachu !!!");
      }
      setPokemonIndex(pokemonIndex - 1)
    }
 
  return (
    <div>
      <button onClick={decrementClick}>Precedent</button>
      <button onClick={handleClick}>Suivant</button>
    </div>
  );
  }

export default NavBar