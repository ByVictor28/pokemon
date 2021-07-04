import Layout from "../../../../Components/Layout"
import Card from   "../../../../Components/Card"
import { getPokemonListByType } from "../../../../services/pokemon"
import { motion } from "framer-motion"
import { useRouter } from "next/router"
import Link from "next/link"
export default function PageIndex({listPokemons}) { 
    const router = useRouter()
    const {page} = router.query
    console.log(listPokemons)
    return (
        <Layout>
            <motion.div key={`page_type_${page}`} exit={{opacity:0}} initial={{opacity:0}} animate={{opacity:1,transition:{duration:1}}}>
                <h3>{listPokemons.name}</h3>
                <div className="pagination"> 
                    {
                        listPokemons.pages.map((pageI,index) => <div key={`page_${index+1}`} className={`page ${page==index+1?"active":""}`}><Link href={pageI}><a>{index+1}</a></Link></div>)
                    }
                </div>
                <div className="list">
                    {
                        listPokemons.pokemons.map((pokemon,id) => <Card pokemon={pokemon} key={`${id}_${pokemon.name}`}/>)
                    }
                </div>
            </motion.div>
            <style jsx>{`
                h3{
                    margin: 1rem;
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
    const pokemonsByType = await getPokemonListByType(params.id,params.page)
    return {
      props: {listPokemons:pokemonsByType},
    }
  }