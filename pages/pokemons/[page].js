import Card from '../../Components/Card'
import Layout from '../../Components/Layout'
import { getPokemonList } from '../../services/pokemon'
import Link from 'next/dist/client/link'
import { useRouter } from 'next/dist/client/router'

export default function Home({listPokemons}) {
  const router = useRouter()
  const {page} = router.query 
  console.log(page)
  return (
    <Layout>
      <main>
        <div className="pagination">
          <div className={`page ${page===0&&"active"}`}><Link href={`/pokemons/`}><a>1</a></Link></div>
          <div className={`page ${page==="2"?"active":""}`}><Link href={`/pokemons/${2}`}><a>2</a></Link></div>
          <div className={`page ${page=="3"?"active":""}`}><Link href={`/pokemons/${3}`}><a>3</a></Link></div>
          <div className={`page ${page==="4"?"active":""}`}><Link href={`/pokemons/${4}`}><a>4</a></Link></div>
          <div className={`page ${page==="5"?"active":""}`}><Link href={`/pokemons/${5}`}><a>5</a></Link></div>
          <div className={`page ${page==="6"?"active":""}`}><Link href={`/pokemons/${6}`}><a>6</a></Link></div>
          <div className={`page ${page==="7"?"active":""}`}><Link href={`/pokemons/${7}`}><a>7</a></Link></div>
          <div className={`page ${page==="8"?"active":""}`}><Link href={`/pokemons/${8}`}><a>8</a></Link></div>
          <div className={`page ${page==="9"?"active":""}`}><Link href={`/pokemons/${9}`}><a>9</a></Link></div>
          <div className={`page ${page==="10"?"active":""}`}><Link href={`/pokemons/${10}`}><a>10</a></Link></div>
          <div className={`page ${page==="11"?"active":""}`}><Link href={`/pokemons/${11}`}><a>11</a></Link></div>
          <div className={`page ${page==="12"?"active":""}`}><Link href={`/pokemons/${12}`}><a>12</a></Link></div>
          <div className={`page ${page==="13"?"active":""}`}><Link href={`/pokemons/${13}`}><a>13</a></Link></div>
          <div className={`page ${page==="14"?"active":""}`}><Link href={`/pokemons/${14}`}><a>14</a></Link></div>
          <div className={`page ${page==="15"?"active":""}`}><Link href={`/pokemons/${15}`}><a>15</a></Link></div>
          <div className={`page ${page==="16"?"active":""}`}><Link href={`/pokemons/${16}`}><a>16</a></Link></div>
          <div className={`page ${page==="17"?"active":""}`}><Link href={`/pokemons/${17}`}><a>17</a></Link></div>
          <div className={`page ${page==="18"?"active":""}`}><Link href={`/pokemons/${18}`}><a>18</a></Link></div>
          <div className={`page ${page==="19"?"active":""}`}><Link href={`/pokemons/${19}`}><a>19</a></Link></div>
          <div className={`page ${page==="20"?"active":""}`}><Link href={`/pokemons/${20}`}><a>20</a></Link></div>
        </div>
        <div className="list">
          {
            listPokemons.map((pokemon,id) => <Card pokemon={pokemon} key={`${id}_${pokemon.name}`}/>)
          }
        </div>
      </main>
      <style jsx>{`
        main{
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
        }
        main .list{
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
