import { useState } from "react";
import PropTypes from 'prop-types';



function NavBar({setPokemonIndex, pokemonIndex}) {
 
  const handleClick = () => {
    setPokemonIndex(pokemonIndex + 1)}
  const decrementClick = () => {
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