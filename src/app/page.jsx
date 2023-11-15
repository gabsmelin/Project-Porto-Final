import Image from 'next/image'

export default function Home() {
  
  return (
    <div className='container-home'>
      <h1>CHAMOU CHAMOU O GUINCHO CHEGOU</h1>
      <Image src="/img/img-home.png" alt="Calça cargo verde." width={350} height={400}/>
    </div>
  )
}