import Image from 'next/image'
import Link from 'next/link'
import './cabecalho.scss'

export default function Cabecalho() {
    return(
        <div className='container-cab'>
            <Link href='/'><Image src='/img/logoHome.png' alt='' width={100} height={100}/></Link>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href='/solutech/ajuda'>Ajuda</Link></li>
                <li><Link href='/solutech/sobre-nos'>Sobre Nós</Link></li>
                <li><Link href='/api-solutech/cadastro'>Cadastre seu veículo</Link></li>
                <li><Link href='/api-solutech/listagem'>Listagem</Link></li>
                <li><Link href='/solutech/integrantes'>Integrantes</Link></li>
            </ul>
        </div>
    )
}
