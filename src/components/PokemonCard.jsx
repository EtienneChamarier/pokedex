
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
 const pokemon = pokemonList[1]; //création de la variable Pokemon//

 // Figure = crée mon conteneur pour l'image et le nom du pokemon
 // Figcaption = création la légende de l'image 
 // img src = récupére l'image du pokemon est affiche "???" si jamais aucunes images ne s'affiche.

 return (
   <figure> 
     <img src={pokemon.imgSrc} alt="???" />
     <figcaption>{pokemon.name}</figcaption>
   </figure>
 );

 }

export default PokemonCard;