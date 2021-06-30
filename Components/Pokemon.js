import Card from "./Card"
import Link from "next/link"
import Image from "next/image"
import { countPokemon } from "../services/pokemon"

export default function Pokemon({pokemon}) { 
    console.log(pokemon)
    return (
        <main>
            <div className="controls">
                {pokemon.pokemon.id !== 1 && <div className="previus"><Link href={`/pokemon/${pokemon.pokemon.id - 1}`}><a>Previus</a></Link></div>}
                {pokemon.pokemon.id !== countPokemon && <div className="next"><Link href={`/pokemon/${pokemon.pokemon.id + 1}`}><a>Next</a></Link></div>}
            </div>
            <h2>#{pokemon.pokemon.id} {pokemon.pokemon.name}</h2>
            <div className="content">
                <div className="pokemon">
                    <Image src={pokemon.pokemon.sprites.other.dream_world.front_default} width={300} height={300} alt="pokemon random" />
                    <aside>
                        <p>{pokemon.specie.flavor_text_entries[1].flavor_text}</p>
                        <div className="caracteristics">
                            <div className="block">
                                <p>Height</p>
                                <span>{pokemon.pokemon.height}</span>
                            </div>
                            <div className="block">
                                <p>Weight</p>
                                <span>{pokemon.pokemon.weight}</span>
                            </div>
                            <div className="block">
                                <p>Shape</p>
                                <span>{pokemon.specie.shape.name}</span>
                            </div>
                            <div className="block">
                                <p>Habitad</p>
                                <span>{pokemon.specie.habitat.name}</span>
                            </div>
                            <div className="block">
                                <p>Ability</p>
                                <span>{pokemon.pokemon.abilities[0].ability.name}</span>
                            </div>
                        </div>
                        <h4>Type</h4>
                        <div className="type">
                        {
                            pokemon.pokemon.types.map((type,id) => <div key={id,type.type.name} className="block">{type.type.name}</div>)
                        }
                        </div>
                        <h4>Moves</h4>
                        <div className="weaknesses">
                            {
                                pokemon.pokemon.moves.map((moves,id) => <div key={id} className="block">{moves.move.name}</div>)
                            }
                        </div>
                    </aside>
                    
                </div>
                
                <div className="evolution">
                    <h4>Evolutions</h4>
                    <div className="list">
                        {
                            pokemon.evolutions2.map((pokemon,id) => {
                                return <Card key={id,pokemon.name} pokemon={pokemon}></Card> 
                            })
                        }
                    </div>
                </div>
            </div>   
            <style jsx>{`
                h2{
                    margin:0;   
                }
                main{
                    text-align:center;
                }
                .controls{
                    display:flex;
                    justify-content:space-between;
                    gap:1rem;
                    position:relative;
                }
                .controls::after{
                    content:"";
                    position:absolute;
                    width:30rem;
                    height:3rem;
                    background:red;
                    top:5rem;
                    left:calc(50% - 15rem);
                    border-radius:5rem 5rem 0 0;
                    background:var(--Background_dark);
                }
                .controls div{
                    background:var(--BackgroundCar_dark);
                    padding:3rem 0;
                }
                .controls .previus{
                    flex:1 1 auto;
                    text-align:center;
                }
                .controls .next{
                    flex:1 1 auto;
                    text-align:center;
                }
                .content{
                    text-align:start;
                }
                .pokemon{
                    display:flex;
                    justify-content:center;
                    flex-wrap:wrap;
                }
                .pokemon img{
                    width:35rem;
                    height:35rem;
                    flex:0 1 auto;
                }

                aside .caracteristics{
                    background:var(--BackgroundCar_dark);
                    display:flex;
                    flex-wrap:wrap;
                    justify-content:space-between;
                    padding:2rem;
                    max-width:60rem;
                }
                aside .caracteristics p{
                    color:var(--Bright_Red);
                    margin:0.8rem 0;
                }
                aside .caracteristics .block{
                    width:15rem;
                    margin:1rem;
                }
                aside .type,
                aside .weaknesses{
                    display:flex;
                    gap: 0 1rem;
                }
                aside .type .block,
                aside .weaknesses .block{
                    background:var(--Lime_Green);
                    display:inline-block;
                    padding:0.5rem 1rem;
                    border-radius:2rem;
                }

                .evolution{
                    width:100%;
                }
                .evolution .list{
                    display:flex;
                    flex-wrap:wrap;
                    gap:1rem;
                    text-align:center;
                    align-items:center;
                    justify-content:center;
                }
                .evolution .list .next{
                    width:5rem;
                    height:5rem;
                    font-size:5rem
                }
            `}</style>
        </main>
    ) 
}
