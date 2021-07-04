import Card from '../../Components/Card'
import Layout from '../../Components/Layout'
import { getPokemonList } from '../../services/pokemon'
import Link from 'next/dist/client/link'
import { useRouter } from 'next/dist/client/router'
import { motion } from 'framer-motion'
import Pagination from '../../Components/Pagination'

export default function Home({listPokemons}) {
  const router = useRouter()
  const {page} = router.query 
  return (
    <Layout>
      <motion.div className="prinsipal" key={`Pokemon_${page}`}  exit={{opacity:0}} initial={{opacity:0}} animate={{opacity:1,transition:{duration:1}}}>
        
        <Pagination  pageSelected={page}/>
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
        .list{
          display:flex;
          flex-wrap:wrap;
          gap:2rem;
          justify-content:center;
        }
        .pagination{
          // background:red;
          width:88%;
          margin:2rem 0 2rem 0;
          display:flex;
          justify-content:center;
          flex-wrap:wrap;
        }
        .pagination .page{
          background:var(--BackgroundCar_dark);
          margin:1rem;
          min-width:3rem;
          text-align:center;
          border-radius:0.5rem;
        }
        .pagination .page a{
          display:block;
          width:100%;
          padding:1rem;
        }
        .pagination .active{
          background:var(--Lime_Green);
        }

      `}</style>
    </Layout>
  )
}
export async function getServerSideProps({params}) {
  const page = params.page
  const listPokemonsDetails =await getPokemonList(page)

  return {
    props: {listPokemons:listPokemonsDetails},
  }
}
