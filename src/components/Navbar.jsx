import { Link, useLocation } from "react-router-dom"
import logo from "../assets/logo.png"

function Navbar() {
  const location = useLocation()

  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <nav>
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>

        <a href="#sobre">Sobre</a>
        <a href="#servicos">Serviços</a>

        <Link to="/contato" className={location.pathname === "/contato" ? "active" : ""}>
          Contato
        </Link>
      </nav>
    </header>
  )
}

export default Navbar