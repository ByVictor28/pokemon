import { faHeart, faFistRaised, faShieldAlt, faRunning, faStar} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card({pokemon}) { 
    return (
        <div className="container">
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
                                pokemon.types.map(type => <div className="block">{type.type.name}</div>)
                            }
                        </div>

                    </div>
                    <div className="stats">
                        <h4>stats</h4>
                        <div className="list">
                            {
                                pokemon.stats.map(stat => {
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
                                    return <div className="block"><span>{icon}{stat.base_stat}</span></div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .container{
                    background:var(--BackgroundCar_dark);
                    width:25rem;
                    height:35rem;
                    border-radius:1rem;
                    text-align:center;
                }
                h3,h4{
                    margin:0;
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
                }
                .container .card .image .image_center{
                    width:100%;
                    margin:0 auto;
                }
                .container .card .image .image_front{
                    visibility:hidden;
                    opacity: 0;
                    transition: visibility 0s, opacity 0.5s linear 0.5s;
                    height:9rem;
                }
                .container .card .image .image_back{
                    visibility:hidden;
                    opacity: 0;
                    transition: visibility 0s, opacity 0.5s linear 0.5s;
                    height:9rem;
                }
                .container .card .content .list{
                    display:flex;
                    gap:0.5rem;
                    padding:1rem;
                    flex-wrap:wrap;
                }
                .container .card .content .list .block{
                    
                    padding:0.5rem 1rem;
                    border-radius:2rem
                }

                .container .card .content .stats .list .block {
                    display:relative;
                }
                .container .card .content .stats .list strong {
                    display:absolute;
                }
                
                .container .card .content .types{
                    transition: visibility 0s, opacity 0.5s linear;
                    margin:2rem 0;
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
            `}</style>
        </div>
    ) 
}


