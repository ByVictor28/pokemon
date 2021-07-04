import Card from '../Components/Card'
import Layout from '../Components/Layout'
import { getPokemonList } from '../services/pokemon'
import { motion } from 'framer-motion'
import Pagination from '../Components/Pagination'

export default function Home({listPokemons}) {
  // console.log(listPokemons)
  
  
  return (
    <Layout>
      <motion.div className="prinsipal" exit={{opacity:0}} initial={{opacity:0}} animate={{opacity:1,transition:{duration:1}}}>
          
          <Pagination  pageSelected={0}/>
          
          <div className="list">
            {
              listPokemons.map((pokemon,id) => <Card pokemon={pokemon} key={`${id}_${pokemon.name}`}/>)
            }
          </div>
      </motion.div>
      <style jsx>{`
        .prinsipal{
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
        }
      `}</style>
    </Layout>
  )
}
export async function getServerSideProps() {
  const listPokemonsDetails =await getPokemonList(0)

  return {
    props: {listPokemons:listPokemonsDetails},
  }
}
