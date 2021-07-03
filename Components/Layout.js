import Header from "./Header"
export default function Layout({children}) { 
    return(
        <>   
            <Header></Header>
            <main>{children}</main>
            <div>Footer</div>
        </>
    )
}