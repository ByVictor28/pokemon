import { useRouter } from 'next/router'
import {getAllPokemonDetails} from "../../services/pokemon"
import Layout from '../../Components/Layout'
import Pokemon from '../../Components/Pokemon'
import { motion } from 'framer-motion'

export default function PokemonD({pokemon}) { 
    const router = useRouter()
    const { idpokemon } = router.query

    return (
        <Layout>
            <motion.div key={`Pokemon_${idpokemon}`} exit={{opacity:0}} initial={{opacity:0}} animate={{opacity:1,transition:{duration:1}}}>
                <Pokemon pokemon={pokemon}/>
            </motion.div>
        </Layout>
    ) 
}

export async function getServerSideProps({params}) {
    const pokemonDetails = await getAllPokemonDetails(params.idpokemon)
    return {
        props:{pokemon:pokemonDetails}
    }
}