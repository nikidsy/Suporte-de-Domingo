import { useEffect, useState } from "react"

function ApiServices() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    fetch("/api/services.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro ao buscar dados")
        }
        return res.json()
      })
      .then((res) => {
        setData(res)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setError("Erro ao carregar serviços")
        setLoading(false)
      })
  }, [])

  const next = () => {
    setIndex((prev) => (prev + 1) % data.length)
  }

  const prev = () => {
    setIndex((prev) => (prev - 1 + data.length) % data.length)
  }

  if (loading) {
    return <p style={{ color: "white" }}>Carregando serviços...</p>
  }

  if (error) {
    return <p style={{ color: "white" }}>{error}</p>
  }

  if (data.length === 0) {
    return null
  }

  const service = data[index]

  return (
    <div className="carousel-servicos">
      <button onClick={prev}>◀</button>

      <div className="card">
        <h3>{service.title}</h3>
        <p>{service.description}</p>

        <ul>
          {service.benefits.map((item, i) => (
            <li key={i}>✔ {item}</li>
          ))}
        </ul>
      </div>

      <button onClick={next}>▶</button>
    </div>
  )
}

export default ApiServices