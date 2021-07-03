import srcimage from "../public/images/pokeapi.png"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

export default function Footer({}) { 
    return (
        <footer>
            <div className="api">
                <Image src={srcimage} alt="pokeapi" />
                <nav>
                    <ul>
                        <li><a target="_blank" href="https://pokeapi.co/">Home</a></li>
                        <li><a target="_blank" href="https://pokeapi.co/about">About</a></li>
                        <li><a target="_blank" href="https://pokeapi.co/docs/v2">API v2</a></li>
                    </ul>
                </nav>
            </div>
            <div>
                <p>Created by <span>Victor Manuel Delfin Santos</span></p>
                <div className="social">
                <a target="_blank" href="https://www.linkedin.com/in/victor-manuel-delfin-santos-8a32a416a/"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a target="_blank" href="https://www.facebook.com/victor.delfin.3"><FontAwesomeIcon icon={faFacebook} /></a>
                <a target="_blank" href="https://github.com/ByVictor28"><FontAwesomeIcon icon={faGithub} /></a>   
                </div>
            </div>
            <style jsx>{`
                footer{
                    text-align:center;
                    background:var(--BackgroundCar_dark);
                    display:flex;
                    justify-content:center;
                    gap:1px;
                    padding:1rem;
                }
                footer div{
                    padding:3rem 1rem 1rem 1rem; 
                }
                footer .api{
                    border-right: 1px solid black;
                }
                footer nav{
                    width:10rem;
                }
                footer nav li{
                    margin:0.5rem 0;
                }
                .social{
                    font-size:4rem;
                    display:flex;
                    justify-content:center;
                    gap:2rem;
                }
            `}</style>
        </footer>
    ) 
}
