import { useState } from "react";
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faRandom,faSearch} from "@fortawesome/free-solid-svg-icons"
import { useRouter } from 'next/router'
import Switch from "./Switch"

export default function Header({children}) { 
    const router = useRouter()
    const [searchValue, setSearchValue] = useState("")
    const [blackTheme, setBlackTheme] = useState(true)

    const searchHandler = () =>{
        router.push(`/pokemon/${searchValue}`)
    }
    const enterHandler = (e) =>{
        
        if (e.key === "Enter") {
            searchHandler()
        }
    }
    return (
        <nav className="navigation">
            <ul>
                <li id="start"><Link href="/"><a>Pokemons</a></Link></li>
                <div id="middle">    
                    <FontAwesomeIcon icon={faRandom} />
                    <li><Link href="/random"><a>Random</a></Link></li>
                </div>
                <div id="end">
                    <div className="search">
                        <input type="text" placeholder="Name or id" id="search" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} onKeyPress={(e) => enterHandler(e)} />
                        <button onClick={searchHandler}><FontAwesomeIcon icon={faSearch}/></button>
                    </div>
                    <li><Link href="/types"><a>types</a></Link></li>
                    <Switch changeColor={setBlackTheme}/>
                </div>
            </ul>
            <style jsx>{`
                .navigation{
                    padding:1rem 2rem; 
                }
                .navigation ul{
                    padding:0;
                    margin:0;
                    display:flex;
                    justify-content:space-between;
                }
                .navigation ul #middle{
                    display:flex;
                    align-items:center;
                    gap:1rem;
                }
                .navigation ul li{
                    list-style:none;
                    padding:1rem 1rem 1rem 0;
                }
                .navigation ul li #start{
                    padding:0 !important:
                }
                #end{
                    display:flex;
                    align-items:center;
                    gap:0.5rem;
                }
                .search{
                    position:relative;
                }
                #search{
                    border:none;
                    height:3rem;
                    background:var(--BackgroundCar_dark);
                    color:var(--TextSub_dark);
                }
                .search button{
                    background:var(--BackgroundCar_dark);
                    // background:red;
                    border:none;
                    font-size:1.5rem;
                    padding:0.5rem;
                    position:absolute;
                    top:0.1rem;
                    right:0.2rem;
                    cursor:pointer;
                    color:var(--TextSub_dark);
                }
                
            `}</style>
            <style jsx global>{`
                :root{
                    --Background_dark: ${blackTheme?"hsl(230, 17%, 14%)":"hsl(0, 0%, 100%)"} ;
                    --BackgroundTop_dark: ${blackTheme?"hsl(232, 19%, 15%)":"hsl(225, 100%, 98%)"} ;
                    --BackgroundCar_dark: ${blackTheme?"hsl(228, 28%, 20%)":"hsl(227, 47%, 96%)"} ;
                    --TextSub_dark: ${blackTheme?"hsl(228, 34%, 66%)":"hsl(228, 12%, 44%)"} ;
                    --Text_dark: ${blackTheme?"hsl(0, 0%, 100%)":"hsl(230, 17%, 14%)"} ;
                }
                body{
                    background:var(--Background_dark);
                    color:var(--Text_dark);
                }
                #__next{
                    display:flex;
                    flex-direction:column;
                    justify-content:space-between;
                    height:100vh;
                }
                main{
                    flex:1 1 auto;
                    padding:2rem;
                }
            `}</style>
        </nav>
    ) 
}

