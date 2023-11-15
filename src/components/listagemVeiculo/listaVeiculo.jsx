import { useEffect, useState } from "react"
import Link from "next/link"

export default function ListaVeiculo() {
    const [veiculo, setVeiculo] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/Solutech/api/veiculo", {
        method: "GET", 
        headers: { 
            'Content-Type': 'application/json',
        },
        }).then((resp) => {
            return resp.json();
        }).then((resp) => {
            setVeiculo(resp);
            console.log(resp);
        }).catch((error) => {
            console.error("Erro na solicitação fetch:", error);
        });
    }, [])

    const handleDelete = (id) => {
        fetch(`http://localhost:8080/Solutech/api/veiculo/${id}`,{
            method: "delete",
            headers: {
                'Content-Type': 'application/json',
                // Adicione outros cabeçalhos necessários, como autenticação, se aplicável
            },
        }).then(() => {
            window.location = "/api-solutech/listagem";
        }).catch((error)=> {
            console.log(error);
      })
    }

    
    return(
        <div className="listagem"> 
            <h1>Lista de usuários</h1>
            <p><Link href="/teste-api/cadastro">Inserir Produto</Link></p>
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
                        <th>Placa</th>
                        <th>E</th>
                        <th>D</th>
                        <th>X</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        veiculo.map((veiculos) => (
                            <tr key={veiculos.id}>
                                <td>{veiculos.id}</td>
                                <td>{veiculos.modelo}</td>
                                <td>{veiculos.peso}</td>
                                <td>{veiculos.altura}</td>
                                <td>{veiculos.comprimento}</td>
                                <td>{veiculos.largura}</td>
                                <td>{veiculos.eixos}</td>
                                <td>{veiculos.tipoCarroceria}</td>
                                <td>{veiculos.pesoCarga}</td>
                                <td>{veiculos.alteracoes}</td>
                                <td>{veiculos.placa}</td>
                                <td><Link href={`/teste-api/editar/${veiculos.id}`}>Editar</Link></td>
                                <td><Link href={`/teste-api/detalhes/${veiculos.id}`}>Ver detalhes</Link></td>
                                <td><button onClick={handleDelete.bind(this, veiculos.id)}>Excluir</button></td>
                            </tr>
                        ))
                    }
                </tbody>
                <tfoot> 
                    <tr>
                        <td colSpan='14'>Veículos</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}