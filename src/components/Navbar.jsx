import { Link, useLocation } from "react-router-dom"
import logo from "../assets/logo.png"

function Navbar(){

const location = useLocation()

return(

<header className="navbar">

<div className="logo-container">
  <img src={logo} alt="logo" className="logo" />
</div>

<nav>

<Link 
to="/" 
className={location.pathname === "/" ? "active" : ""}
>
Home
</Link>

<Link 
to="/sobre"
className={location.pathname === "/sobre" ? "active" : ""}
>
Sobre
</Link>

<Link 
to="/servicos"
className={location.pathname === "/servicos" ? "active" : ""}
>
Serviços
</Link>

<Link 
to="/contato"
className={location.pathname === "/contato" ? "active" : ""}
>
Contato
</Link>

</nav>
</header>

)

}

export default Navbar