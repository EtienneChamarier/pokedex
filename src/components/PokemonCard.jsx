function PokemonCard(props) {
  const pokemon = pokemonList[0];
  console.log(props)
  return (
    <figure>
      <img src={props.pokemon.imgSrc} alt="???"/>
      <figcaption>{props.pokemon.name}</figcaption>
    </figure>
  );
  }
 


const pokemonList = [
   {
     name: "bulbasaur",
     imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
   },
   {
     name: "mew", 
   },
 ];





export default PokemonCard;