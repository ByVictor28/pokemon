import { faHeart, faFistRaised, faShieldAlt, faRunning, faStar} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';
export default function Card({pokemon}) { 
    return (
        <div className="container">
        <div className="circle"></div>
            <Link href={`/pokemon/${pokemon.id}`}>
                <div className="card">
                    <div className="image">
                        <img className="image_front" src={pokemon.sprites.front_default} alt="pokemon front" />
                        <img className="image_center" src={pokemon.sprites.other.dream_world.front_default} alt="pokemon main" />
                        <img className="image_back" src={pokemon.sprites.back_default} alt="pokemon back" />
                    </div>
                    <div className="content">
                        <h3>{pokemon.name}</h3>
                        <div className="types">
                            <h4>types</h4>
                            <div className="list">
                                {
                                    pokemon.types.map((type,i) => <div key={i+type.type.name} className="block">{type.type.name}</div>)
                                }
                            </div>

                        </div>
                        <div className="stats">
                            <h4>stats</h4>
                            <div className="list">
                                {
                                    pokemon.stats.map((stat,i) => {
                                        let icon;
                                        switch (stat.stat.name) {
                                            case "hp":
                                                icon = <FontAwesomeIcon icon={faHeart}/>
                                                break;
                                            case "attack":
                                                icon = <FontAwesomeIcon icon={faFistRaised}/>
                                                break;
                                            case "defense":
                                                icon = <FontAwesomeIcon icon={faShieldAlt}/>
                                                break;
                                            case "special-attack":
                                                icon = <><FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faFistRaised}/></>
                                                break;
                                            case "special-defense":
                                                icon = <><FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faShieldAlt}/></>
                                                break;
                                            default:
                                                icon = <FontAwesomeIcon icon={faRunning}/>
                                                break;
                                        }
                                        return <div key={i+stat.stat.name} className="block"><span>{icon}{stat.base_stat}</span></div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <style jsx>{`
            
                h3,h4{
                    margin:0;
                }
                .container{
                    background:var(--BackgroundCar_dark);
                    width:25rem;
                    height:40rem;
                    border-radius:1rem;
                    text-align:center;
                    padding:1rem 0;
                    position:relative;
                    overflow:hidden;

                }
                .container .circle{
                    content:"";
                    display:block;
                    width:50rem;
                    height:50rem;
                    top:-34rem;
                    right:-15rem;
                    border-radius:50%;
                    background:var(--Bright_Red);
                    position:absolute;
                    z-index:0;
                    transition:all 1s ease;
                }
                .container .card{
                    position: relative;
                    z-index:5;
                    cursor:pointer;
                }
                .container .card .image{
                    padding:0 1rem; 
                    width:100%;
                    margin:0 auto;
                    transition:all 1s ease;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    margin-bottom:2rem;
                    // background:blue;
                }
                .container .card .image .image_center{
                    width:100%;
                    margin:0 auto;
                    // z-index:99;
                }
                .container .card .image .image_front{
                    visibility:hidden;
                    opacity: 0;
                    transition: visibility 0s, opacity 0.5s linear 0.5s;
                    height:9rem;
                    // z-index:99;
                }
                .container .card .image .image_back{
                    visibility:hidden;
                    opacity: 0;
                    transition: visibility 0s, opacity 0.5s linear 0.5s;
                    height:9rem;
                    // z-index:99;
                }
                
                .container .card .content .list{
                    display:flex;
                    gap:0.5rem;
                    padding:0.5rem 1.5rem;
                    flex-wrap:wrap;
                }
                .container .card .content .list .block{
                    background:var(--Lime_Green);
                    padding:0.5rem 1rem;
                    border-radius:2rem
                }
                
                .container .card .content .types{
                    transition: visibility 0s, opacity 0.5s linear;
                    margin-top:2rem;
                    visibility:hidden;
                    opacity: 0;
                }
                .container .card .content .stats{
                    visibility:hidden;
                    opacity: 0;
                    transition: visibility 0s, opacity 0.5s linear 0.5s;
                }

                //TRANSITIONS
                .container:hover > .card .image{
                    width:45%;
                }
                .container:hover > .card .content .types{
                    visibility:visible;
                    opacity: 1;
                }
                .container:hover > .card .content .stats{
                    visibility:visible;
                    opacity: 1;
                }
                .container:hover > .card .image .image_back{
                    visibility:visible;
                    opacity: 1;
                }
                .container:hover > .card .image .image_front{
                    visibility:visible;
                    opacity: 1;
                }
                .container:hover > .circle {
                    width:30rem;
                    height:30rem;
                    top:-13rem;
                    right:-10rem;
                    border-radius:50%;
                }
            `}</style>
        </div>
    ) 
}


