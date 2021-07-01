import Layout from "../../Components/Layout";
import Pokemon from "../../Components/Pokemon";
import {getAllPokemonDetails} from "../../services/pokemon"

export default function RandomPokemon({pokemon}) {
    return (
        <Layout>
            <main>
                <Pokemon pokemon={pokemon}/>
            </main>
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

