'use client'




export default function FormUser() {
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
        alteracoes: "",
        placa: ""
    })

    const handleChange = (e) => {
        setNovo((prevNovo) => ({
            ...prevNovo,
            [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = e => {
        e.preventDefault();

        fetch('http://localhost:8080/Solutech/api/veiculo/', {
            
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            
            },
            body: JSON.stringify(novo)
        }).then(() => {
            window.location = '/teste-api/listagem'
        })
    }

    return(
        <div className="cadastro">
    
            <div className="inputs">
                <div className="texto">
                    <h1>CADASTRE SEU VEÍCULO</h1>
                    <p>Se cadastre no maior seguro de guincho do Brasil</p>
                </div>
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
                    <input type="text" name="placa" value={novo.placa} placeholder="Placa" onChange={handleChange}/> <br/>
                    <button>Cadastrar</button>
                </form>
            </div>
        </div>
    )
}