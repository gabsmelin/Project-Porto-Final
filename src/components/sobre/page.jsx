import Image from 'next/image';
import './sobre.scss'

export default function Sobre() {
    return(
        <div className="container-sobre">
            <div className="parte-one">
                <Image src="/img/barraDeitada.png" alt="Barra deitada." width={1500} height={2}/>
                <div className='conteudo'>
                    <h1>NOSSO PROPÓSITO É SER UM GUINCHO CONFIÁVEL PARA VOCÊ</h1>
                    <Image src="/img/imgSobre.png" alt="Imagem que nos retrata." width={400} height={600}/>
                </div>
                <Image src="/img/barraDeitada.png" alt="Barra deitada." width={1500} height={1000}/>    
            </div>
            <div className="parte-two">
                <h3>Somos a companhia que está com você em todos os momentos da vida</h3>
                <p>A LIGG é mais do que uma seguradora: é um ecossistema com todas as soluções para transformar sonhos em realidades diárias. Com alguns anos de mercado, possui hoje três verticais de negócios: Porto Seguros, Porto Saúde e Porto Seguro Bank, formando, assim, um conjunto de soluções de proteção para os seus momentos que vão desde o dia a dia até o grande dia.</p>
            </div>
        </div>
    )
}