import Head from 'next/head'
import Image from 'next/image'
import Card from '../Components/Card'
import Layout from '../Components/Layout'

export default function Home({listPokemons}) {
  console.log(listPokemons)
  return (
    <Layout>
      <main>
        {
          listPokemons.map(pokemon => <Card pokemon={pokemon}/>)
        }
      </main>
      <style>{`
        main{
          display:flex;
          flex-wrap:wrap;
          gap:2rem;
          justify-content:center;
        }
      `}</style>
    </Layout>
  )
}
export async function getServerSideProps(context) {
  const listPokemons =await fetch("https://pokeapi.co/api/v2/pokemon/?limit=5&offset=5")
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
