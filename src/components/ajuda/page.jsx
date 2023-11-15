import Image from 'next/image'
import Link from 'next/link';
import './ajuda.scss'

export default function Ajuda() {
    return(
        <div className="container-aju">
            <h1>Como podemos te ajudar?</h1>
            <div className="parte-um">
                    <Link href='/api-solutech/listagem'>
                        <Image src="/img/sireneAjuda.png" alt="Sirene." width={80} height={150}/>
                        <p>Cadastre seu carro</p>
                    </Link>
                    <Link href='/solutech/sobre-nos'>
                        <Image src="/img/em-formacao.png" alt="Mão dando joia com icone de informação." width={80} height={100}/>
                        <p>Sobre nós</p>
                    </Link>
                    <Link href='/'>
                        <Image src="/img/homeAjuda.png" alt="Imagem de uma casa." width={80} height={100}/>
                        <p>Home</p>
                    </Link>
            </div>
            <p>Caso não tenha encontrado sua dúvida entre em contato conosco através de um de nossos meios de comunicaçõa.</p>
            <ul>
                <li>Email: centraldeajuda@guinchou.com.br</li>
                <li>Telefone Fixo: 8475-8743</li>
                <li>Whatsapp: (11) 93493-3445</li>
            </ul>
        </div>
    )
}