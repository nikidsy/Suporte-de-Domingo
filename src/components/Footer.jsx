import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        <div className="footer-brand">
          <img src={logo} alt="logo" />

          <p>
            Transformando ideias em experiências digitais modernas,
            funcionais e escaláveis.
          </p>
        </div>

        <div className="footer-links">
          <h3>Navegação</h3>

          <Link to="/">Home</Link>
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <Link to="/contato">Contato</Link>
        </div>

        <div className="footer-social">
          <h3>Contato</h3>

          <a href="https://api.whatsapp.com/send/?phone=5511967611652&text=Ol%C3%A1%21+Tenho+interesse+em+solicitar+um+or%C3%A7amento.&type=phone_number&app_absent=0"
             target="_blank"
             rel="noreferrer">WhatsApp</a>

          <a href="https://www.linkedin.com/company/suporte-de-domingo/"
             target="_blank"
             rel="noreferrer">LinkedIn</a>

          <a href="https://www.instagram.com/suportededomingo/"
             target="_blank"
             rel="noreferrer">Instagram</a>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Suporte de Domingo — Todos os direitos reservados.
      </div>
    </footer>
  )
}

export default Footer