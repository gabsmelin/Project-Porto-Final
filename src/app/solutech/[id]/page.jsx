'use client'
import { useEffect, useState } from "react"
import Ajuda from "@/components/ajuda/page";
import Sobre from "@/components/sobre/page";
import Home from "@/app/page";
import NotFound from "@/app/not-found";
import Integrantes from "@/components/integrantes/page";

export default function Login({params}) {
    const [msg, setMsg] = useState(<Home/>);
    const id = params.id;

    useEffect(() => {
        if(id == 'ajuda') {
            setMsg(<Ajuda/>)
        } else if(id == 'sobre-nos') {
            setMsg(<Sobre/>)
        } else if(id == 'integrantes') {
            setMsg(<Integrantes/>)
        } else {
            setMsg(<NotFound/>)
        }
    }, [id])
    
    return(
        <div>
            {msg}
        </div> 
    )
    
}