import Link from "next/link"

export default function Header({children}) { 
    return (
        <nav className="navigation">
            <ul>
                <li id="start"><Link href="/"><a>Home</a></Link></li>
                <li id="middle"><Link href="/random"><a>Random</a></Link></li>
                <div id="end">
                    <li><Link href="/items"><a>Items</a></Link></li>
                    <li><Link href="/berries"><a>Berries</a></Link></li>
                </div>
            </ul>
            <style jsx>{`
                .navigation{
                    padding:0 2rem; 
                }
                .navigation ul{
                    padding:0;
                    margin:0;
                    display:flex;
                    justify-content:space-between;
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
                }
                
            `}</style>
            <style jsx global>{`
                :root{
                    --main-color:#E1EAEC;
                    --main-text:#040404;
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

