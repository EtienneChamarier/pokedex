function Image() {
 return (
 <figure>
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"></img>
    <figcaption>bulbasaur</figcaption>
 </figure>
)
}

function PokemonCard() {

const pokemonList = [
   {
     name: "bulbasaur",
     imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
   },
   {
     name: "mew", 
   },
 ];

 const pokemon = pokemonList[0];

 return (
   <div>
      <figure>
        {imgSrc && <img src={imgSrc} />}
        {!imgSrc && <p>???</p>}
        <figcaption>{name}</figcaption>
      </figure>

   </div>
 );
}

export default Image;