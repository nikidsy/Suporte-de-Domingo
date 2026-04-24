import Breadcrumb from "../components/Breadcrumb"
import "../styles/main.scss"

function Contato(){
  return(
    <section className="contato">

      <Breadcrumb />

      <div className="form-box">
        <h3>Contato</h3>

        <input placeholder="Nome" />
        <input placeholder="Email" />
        <textarea placeholder="Mensagem"></textarea>

        <button>Enviar</button>
      </div>

    </section>
  )
}

export default Contato