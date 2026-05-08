import { useState } from "react"
import Breadcrumb from "../components/Breadcrumb"
import "../styles/main.scss"

function Contato(){

  const [form, setForm] = useState({
    nome: "",
    email: "",
    mensagem: ""
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!form.nome || !form.email || !form.mensagem){
      alert("Preencha todos os campos!")
      return
    }

    alert("Mensagem enviada com sucesso!")
    setForm({ nome: "", email: "", mensagem: "" })
  }

  return(
    <section className="contato">

      <Breadcrumb />

      <form className="form-box" onSubmit={handleSubmit}>
        <h3>Contato</h3>

        <input name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <textarea name="mensagem" placeholder="Mensagem" value={form.mensagem} onChange={handleChange} />

        <button type="submit">Enviar</button>
      </form>

    </section>
  )
}

export default Contato