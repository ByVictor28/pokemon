import Layout from "../../Components/Layout";
import Pokemon from "../../Components/Pokemon";
import {getAllPokemonDetails} from "../../services/pokemon"
import { motion } from "framer-motion";
export default function RandomPokemon({pokemon}) {
    return (
        <Layout>
            <motion.div key={`pokemon_random_${pokemon.pokemon.id}`} exit={{opacity:0}} initial={{opacity:0}} animate={{opacity:1,transition:{duration:1}}}>
                <Pokemon pokemon={pokemon}/>
            </motion.div>
        </Layout>
    ) 
}

export async function getServerSideProps(context) {
    const random = Math.round(Math.random() * (376 - 1) + 1);
    // console.log(random)
    const pokemonDetails = await getAllPokemonDetails(random)
    return {
        props:{pokemon:pokemonDetails}
    }
}

