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
 
 if (pokemon.imgSrc) {
   return (
     <figure>
       <img src={pokemon.imgSrc}/>
       <figcaption>{pokemon.name}</figcaption>
     </figure>
   );
 } else {
   return (
     <figure>
       <p>???</p>
       <figcaption>{pokemon.name}</figcaption>
     </figure>
   );
 }
}

export default Image;