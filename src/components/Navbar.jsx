import { Link } from "react-router-dom"

function Navbar(){

return(

<header>

<h2>Suporte de Domingo</h2>

<nav>

<Link to="/">Home</Link>
<Link to="/sobre">Sobre</Link>
<Link to="/servicos">Serviços</Link>
<Link to="/contato">Contato</Link>

</nav>

</header>

)

}

export default Navbar