import Layout from "../../Components/Layout";
import { getTypesList } from "../../services/pokemon";
import Link from "next/link";
import { motion } from "framer-motion";
export default function TypeIndex({listPokemons}) { 
    return (
        <Layout>
            <motion.div exit={{opacity:0}} initial={{opacity:0}} animate={{opacity:1,transition:{duration:1}}}>
                <div className="list">
                    {
                        listPokemons.map((type,index) => <Link key={`type_${index}`} className="block" href={`/types/${type.name}/page/1`}><a>{type.name}</a></Link> )
                    }    
                </div>    
            </motion.div>
                <style jsx>{`
                    .list{
                        display:grid;
                        grid-template-columns:repeat(3, 1fr);
                        gap:2rem 3rem ;
                    }
                    .list a{
                        text-align:center;
                        padding:1rem;
                        background:var(--BackgroundCar_dark);
                        border-radius:1rem;
                    }
                
                `}</style>
        </Layout>
    ) 
}

export async function getServerSideProps({params}) {
    const pokemonsByType = await getTypesList()
    return {
      props: {listPokemons:pokemonsByType},
    }
}
  