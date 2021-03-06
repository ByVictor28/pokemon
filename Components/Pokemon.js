import Card from "./Card"
import Link from "next/link"
import Image from "next/image"
import { countPokemon } from "../services/pokemon"
import { motion } from "framer-motion"

export default function Pokemon({pokemon}) { 
    return (
        <main>
            <div className="controls">
                <div className={`previus ${pokemon.pokemon.id === 1?"hide":""}`}><Link href={`/pokemon/${pokemon.pokemon.id - 1}`}><a>Previus</a></Link></div>
                <div className={`next ${pokemon.pokemon.id === countPokemon?"hide":""}`}><Link href={`/pokemon/${pokemon.pokemon.id + 1}`}><a>Next</a></Link></div>
            </div>
            <h2>#{pokemon.pokemon.id} {pokemon.pokemon.name}</h2>
            <div className="content">
                <div className="pokemon">
                    <motion.div key={"Image"} initial={{opacity:0,x:-200}} animate={{opacity:1,x:0,transition:{duration:1,delay:0.5}}}>
                        <img src={pokemon.pokemon.sprites.other.dream_world.front_default} alt="pokemon random" />    
                    </motion.div>
                    <motion.div initial={{opacity:0,y:200}} animate={{opacity:1,y:0,transition:{duration:1,delay:0.5}}}>
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
                    </motion.div>
                    
                    
                </div>
                
                <div className="evolution">
                    <h3>Evolutions</h3>
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
                h3{
                    background:var(--BackgroundCar_dark);
                    padding:1rem
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
                .controls .hide{
                    visibility:hidden;
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
                    width:30rem;
                    height:30rem;
                    flex:0 1 auto;
                }
                aside {
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    justify-content:center;
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
