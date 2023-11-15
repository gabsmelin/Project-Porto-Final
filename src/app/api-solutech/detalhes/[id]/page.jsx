'use client'
import { useEffect, useState } from "react"
import Link from "next/link"
import './detalhes.scss'



export default function ListaUsuario({params}) {
    const id = params.id;
    console.log(id);
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8080/Solutech/api/veiculo/${id}`, {
        method: "GET", 
        headers: { 
            'Content-Type': 'application/json',
        },
        }).then((resp) => {
            return resp.json();
        }).then((resp) => {
            setUsuarios([resp]);
            console.log(resp);
        }).catch((error) => {
            console.error("Erro na solicitação fetch:", error);
        });
    }, [])

    

    
    return(
        <div className="detalhes"> 
            <h1>Detalhes veículo</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Modelo</th>
                        <th>Peso</th>
                        <th>Altura</th>
                        <th>Comprimento</th>
                        <th>Largura</th>
                        <th>Eixos</th>
                        <th>Tipo Carroceria</th>
                        <th>Peso Carga</th>
                        <th>Alteracoes</th>
                    </tr>
                </thead>
                <tbody>
                {usuarios.map((usuario) => (
                    <tr key={usuario.id}>
                        <td>{usuario.id}</td>
                        <td>{usuario.modelo}</td>
                        <td>{usuario.peso}</td>
                        <td>{usuario.altura}</td>
                        <td>{usuario.comprimento}</td>
                        <td>{usuario.largura}</td>
                        <td>{usuario.eixos}</td>
                        <td>{usuario.tipoCarroceria}</td>
                        <td>{usuario.pesoCarga}</td>
                        <td>{usuario.alteracoes}</td>   
                    </tr>
                ))}
                </tbody>
                <tfoot> 
                    <tr>
                        <td colSpan='13'>Veículos</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}