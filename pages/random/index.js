import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import Pokemon from "../../Components/Pokemon";

export default function RandomPokemon({pokemon}) {
    return (
        <Layout>
            <main>
                <Pokemon pokemon={pokemon}/>
            </main>
        </Layout>
    ) 
}

export async function getServerSideProps(context) {
    let pokemonDetails = {}
    const random = Math.round(Math.random() * (898 - 1) + 1);

    // const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/1`)
    const pokemonJSON = await pokemon.json()
    
    pokemonDetails.pokemon = pokemonJSON

    const pokemonSpecie = await fetch(`https://pokeapi.co/api/v2/pokemon-species/1`)
    const pokemonSpecieJSON = await pokemonSpecie.json()
    
    pokemonDetails.specie = pokemonSpecieJSON

    const pokemonEvolutions = await fetch(pokemonSpecieJSON.evolution_chain.url)
    const pokemonEvolutionsJSON = await pokemonEvolutions.json()
    
    pokemonDetails.evolutions = pokemonEvolutionsJSON

    
    let evolutions = []
    
    evolutions.push(pokemonEvolutionsJSON.chain.species)
    evolutions.push(pokemonEvolutionsJSON.chain.evolves_to[0].species)
    evolutions.push(pokemonEvolutionsJSON.chain.evolves_to[0].evolves_to[0].species)

    const pokemonEvolutionsChain = await Promise.all(
        evolutions.map( async (pokemon) => {
            const pokemonDetails = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            const pokemonDetailsJSON = await pokemonDetails.json()
            return pokemonDetailsJSON
        })
    )

    pokemonDetails.evolutions2 = pokemonEvolutionsChain


    const newMoves = [] 
    for(let i = 0 ; i<5 ;i++){
        newMoves.push(pokemonJSON.moves[i]);
    }
    pokemonDetails.pokemon.moves = newMoves
    return {
        props:{pokemon:pokemonDetails}
    }
}

