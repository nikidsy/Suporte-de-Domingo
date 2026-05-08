import { useState, useEffect } from "react"

const data = [
  { title: "Suporte Emergencial", text: "Atendimento rápido." },
  { title: "Resposta Imediata", text: "Equipe pronta." },
  { title: "Correções", text: "Melhorias contínuas." },
  { title: "Monitoramento", text: "Acompanhamento constante." }
]

function Carousel(){
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % data.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="carousel">
      <button onClick={() => setIndex((index - 1 + data.length) % data.length)}>◀</button>

      <div className="card">
        <h3>{data[index].title}</h3>
        <p>{data[index].text}</p>
      </div>

      <button onClick={() => setIndex((index + 1) % data.length)}>▶</button>
    </div>
  )
}

export default Carousel