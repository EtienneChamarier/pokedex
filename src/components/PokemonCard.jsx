function Image() {
 return (
 <figure>
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"></img>
    <figcaption>bulbasaur</figcaption>
 </figure>
)
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



function PokemonCard() {
 const pokemon = pokemonList[0];
 
 return (
   <figure>
     <img src={pokemon.imgSrc} alt={pokemon.name} />
     <figcaption>{pokemon.name}</figcaption>
     {!pokemon.imgSrc && <p>???</p>}
   </figure>
 );

 }

export default Image;