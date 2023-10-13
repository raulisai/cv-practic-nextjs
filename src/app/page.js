import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">



      <section id="inicio"  className="justify-center">
          <h2 className="flex justify-center">
            <p className="mt-[7rem] tracking-wide text-white "> 
                <span className="text-4xl">J</span><span className="text-3xl">ocelyn </span>
                <span className="text-4xl">M</span><span className="text-3xl">oreno</span>
            </p>        
        </h2>
        <div className="flex justify-center">
            <p className="mt-[1rem] tracking-wide text-sky-400/100"> 
                <span className="text-3xl">W</span><span className="text-2xl">eb </span>
                <span className="text-3xl">D</span><span className="text-2xl">eveloper</span>
            </p>        
        </div>
        <div className="columns-2 mt-5">
            <img
                src="/github.svg"
                alt="search"
                className="w-[30px] h-[30px] ms-12 object-contain bg-white"
            />
             <img
                src="/linkedin.svg"
                alt="search"
                className="w-[30px] h-[30px] object-contain bg-white"
            />
        </div>
       
    <div className="absolute inset-0 bg-cover bg-center mt-80" style={{ backgroundImage: "url('/cuadricula.png')" }}>
  </div>
      </section>
<section id="about" className="absolute inset-0 bg-cover bg-center " style={{ backgroundImage: "url('/cuadricula.png')" }}>

</section>





    </main>
  )
}
