export const countPokemon = 376;

export async function getAllPokemonDetails(id) {
    let pokemonDetails = {}
    const random = Math.round(Math.random() * (898 - 1) + 1);

    // const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const pokemonJSON = await pokemon.json()
    
    pokemonDetails.pokemon = pokemonJSON

    const pokemonSpecie = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonJSON.name}`)
    const pokemonSpecieJSON = await pokemonSpecie.json()
    
    pokemonDetails.specie = pokemonSpecieJSON

    const pokemonEvolutions = await fetch(pokemonSpecieJSON.evolution_chain.url)
    const pokemonEvolutionsJSON = await pokemonEvolutions.json()
    
    pokemonDetails.evolutions = pokemonEvolutionsJSON

    
    let evolutions = []
    
    evolutions.push(pokemonEvolutionsJSON.chain.species)
    evolutions.push(pokemonEvolutionsJSON.chain.evolves_to[0].species)
    console.log(pokemonEvolutionsJSON.chain.evolves_to[0].evolves_to[0])
    if (pokemonEvolutionsJSON.chain.evolves_to[0].evolves_to[0] !== undefined){
        evolutions.push(pokemonEvolutionsJSON.chain.evolves_to[0].evolves_to[0].species)
    }
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
        if (pokemonJSON.moves[i] !== undefined) {
            newMoves.push(pokemonJSON.moves[i]);   
        }
        // console.log(pokemonJSON.moves[i])
    }
    pokemonDetails.pokemon.moves = newMoves

    return pokemonDetails
}