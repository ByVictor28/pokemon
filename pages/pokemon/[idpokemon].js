import { useRouter } from 'next/router'
import {getAllPokemonDetails} from "../../services/pokemon"
import Layout from '../../Components/Layout'
import Pokemon from '../../Components/Pokemon'

export default function PokemonD({pokemon}) { 
    const router = useRouter()
    const { idpokemon } = router.query

    return (
        <Layout>
            <main>
                <Pokemon pokemon={pokemon}/>
            </main>
        </Layout>
    ) 
}

export async function getServerSideProps({params}) {
    const pokemonDetails = await getAllPokemonDetails(params.idpokemon)
    return {
        props:{pokemon:pokemonDetails}
    }
}