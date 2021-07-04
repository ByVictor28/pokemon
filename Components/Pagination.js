import Link from "next/link"
import { pagesTotal, PaginationUrls } from "../services/pokemon"



export default function Pagination({pageSelected=44}) { 
    const newList = PaginationUrls(pageSelected)
    
    
    return (
        <div className="pagination">
            {
              newList.map((ulrElement,index) => <div key={`pagination_${index}`} className={`page ${ulrElement.number==pageSelected?"active":""}`}><Link href={ulrElement.url}><a>{ulrElement.number}</a></Link></div>)
            }    
            <style>{`
            .list{
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
        </div>
    ) 
}
