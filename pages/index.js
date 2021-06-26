import Head from 'next/head'
import Image from 'next/image'
import Card from '../Components/Card'
import Layout from '../Components/Layout'

export default function Home({listPokemons}) {
  console.log(listPokemons)
  return (
    <Layout>
      <main>
        <Card pokemon={listPokemons[0]}/>
      </main>
    </Layout>
  )
}
export async function getServerSideProps(context) {
  const listPokemons =await fetch("https://pokeapi.co/api/v2/pokemon/?limit=1&offset=1")
  const listPokemonsJSON =await listPokemons.json()
  const results = listPokemonsJSON.results

  const listPokemonsDetails = await Promise.all(
    results.map( async pokemon => {
      const pokemonDetail = await fetch(pokemon.url)
      console.log(pokemon.name , pokemon.url)
      const pokemonDetailJSON = await pokemonDetail.json()
      return pokemonDetailJSON
    })
  )
  return {
    props: {listPokemons:listPokemonsDetails},
  }
}
