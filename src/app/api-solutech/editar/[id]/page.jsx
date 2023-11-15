'use client'
import { useEffect, useState } from "react"
import './editar.scss'

export default function FormUser({params}) {
    const id = params.id;
    const [usuarios, setUsuarios] = useState([])
    console.log(id);

    const [novo, setNovo] = useState({
        id: "",
        modelo: "",
        peso: "",
        altura: "",
        comprimento: "",
        largura: "",
        eixos: "",
        tipoCarroceria: "",
        pesoCarga: "",
        alteracoes: ""
    })

    const handleChange = e => {
        setNovo({...novo, [e.target.name]:e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(id);

        fetch(`http://localhost:8080/Solutech/api/veiculo/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify(novo)
        }).then(() => {
            window.location = "/api-solutech/listagem"
        })
    }


    useEffect(() => {
        console.log(id);
        if(id) {
            fetch(`http://localhost:8080/Solutech/api/veiculo/${id}`)
            .then((resp) => {
                return(resp.json())
            }).then(data => {
                setNovo(data)
            })
        }
    },[id])
    

    return(
        <div className="editar-geral">
                <div className="editar">
                    <h1>EDITAR</h1> 
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="modelo" value={novo.modelo} placeholder="Modelo" onChange={handleChange}/> <br/>
                        <input type="number" name="peso" value={novo.peso} placeholder="Peso" onChange={handleChange}/> <br/>
                        <input type="number" name="altura" value={novo.altura} placeholder="Altura" onChange={handleChange}/> <br/>                           
                        <input type="number" name="comprimento" value={novo.comprimento} placeholder="Comprimento" onChange={handleChange}/> <br/>
                        <input type="number" name="largura" value={novo.largura} placeholder="Largura" onChange={handleChange} step="0.01"/> <br/>
                        <input type="number" name="eixos" value={novo.eixos} placeholder="Eixos" onChange={handleChange}/> <br/>                        
                        <input type="text" name="tipoCarroceria" value={novo.tipoCarroceria} placeholder="Tipo Carroceria" onChange={handleChange}/> <br/>
                        <input type="number" name="pesoCarga" value={novo.pesoCarga} placeholder="Peso Carga" onChange={handleChange} step="0.01"/> <br/>
                        <input type="text" name="alteracoes" value={novo.alteracoes} placeholder="Alterações" onChange={handleChange}/> <br/>
                        <button>Salvar alterações</button>
                    </form>
                </div>
        </div>
    )
}