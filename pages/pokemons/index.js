import Card from '../../Components/Card'
import Layout from '../../Components/Layout'
import { getPokemonList } from '../../services/pokemon'
import Link from 'next/dist/client/link'
export default function Home({listPokemons}) {
  // console.log(listPokemons)
  return (
    <Layout>
      <main>
        <div className="pagination">
          <div className="page active"><Link href={`/pokemons/`}><a>1</a></Link></div>
          <div className="page"><Link href={`/pokemons/${2}`}><a>2</a></Link></div>
          <div className="page"><Link href={`/pokemons/${3}`}><a>3</a></Link></div>
          <div className="page"><Link href={`/pokemons/${4}`}><a>4</a></Link></div>
          <div className="page"><Link href={`/pokemons/${5}`}><a>5</a></Link></div>
          <div className="page"><Link href={`/pokemons/${6}`}><a>6</a></Link></div>
          <div className="page"><Link href={`/pokemons/${7}`}><a>7</a></Link></div>
          <div className="page"><Link href={`/pokemons/${8}`}><a>8</a></Link></div>
          <div className="page"><Link href={`/pokemons/${9}`}><a>9</a></Link></div>
          <div className="page"><Link href={`/pokemons/${10}`}><a>10</a></Link></div>
          <div className="page"><Link href={`/pokemons/${11}`}><a>11</a></Link></div>
          <div className="page"><Link href={`/pokemons/${12}`}><a>12</a></Link></div>
          <div className="page"><Link href={`/pokemons/${13}`}><a>13</a></Link></div>
          <div className="page"><Link href={`/pokemons/${14}`}><a>14</a></Link></div>
          <div className="page"><Link href={`/pokemons/${15}`}><a>15</a></Link></div>
          <div className="page"><Link href={`/pokemons/${16}`}><a>16</a></Link></div>
          <div className="page"><Link href={`/pokemons/${17}`}><a>17</a></Link></div>
          <div className="page"><Link href={`/pokemons/${18}`}><a>18</a></Link></div>
          <div className="page"><Link href={`/pokemons/${19}`}><a>19</a></Link></div>
          <div className="page"><Link href={`/pokemons/${20}`}><a>20</a></Link></div>
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
          padding:1rem;
          text-align:center;
          border-radius:0.5rem;
        }
        .pagination .active{
          background:var(--Lime_Green);
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
