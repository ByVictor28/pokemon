export const countPokemon = 376;

export async function getPokemonList(page) {
    const listPokemons =await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${20*page}`)
    const listPokemonsJSON =await listPokemons.json()
    const results = listPokemonsJSON.results

    const listPokemonsDetails = await Promise.all(
        results.map( async pokemon => {
        const pokemonDetail = await fetch(pokemon.url)
        const pokemonDetailJSON = await pokemonDetail.json()
        return pokemonDetailJSON
        })
    )
    return listPokemonsDetails
}

export async function getTypesList(page) {
    const listTypes =await fetch(`https://pokeapi.co/api/v2/type`)
    const listTypesJSON =await listTypes.json()
    
    
    return listTypesJSON.results
}


export async function getPokemonListByType(id,page) {
    const listPokemons =await fetch(`https://pokeapi.co/api/v2/type/${id}`)
    const listPokemonsJSON =await listPokemons.json()
    const results = []
    let pokemonsByType = {}

    const start = page===1?0:(20*(page-1)+1)
    const end = 20*page
    console.log(page,start,end)

    listPokemonsJSON.pokemon.some((pokemon,index) => {
        
        if (index > start) {
            results.push(pokemon)
        }
        if (index > end) {
            return true
        }
    });
    const listPokemonsDetails = await Promise.all(
        results.map( async pokemon => {
        const pokemonDetail = await fetch(pokemon.pokemon.url)
        const pokemonDetailJSON = await pokemonDetail.json()
        return pokemonDetailJSON
        })
    )
    pokemonsByType.pokemons = listPokemonsDetails
    pokemonsByType.allPokemons = listPokemonsJSON.pokemon
    pokemonsByType.name = listPokemonsJSON.name
    pokemonsByType.pages = []
    const pagesLength = Math.ceil(listPokemonsJSON.pokemon.length/20)
    for (let index = 0; index < pagesLength; index++) {
        pokemonsByType.pages.push(`/types/${id}/page/${index+1}`)
    }
    
    return pokemonsByType
}

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
    // console.log(pokemonEvolutionsJSON.chain.evolves_to[0].evolves_to[0])
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