import { Link, useLocation } from "react-router-dom"

function Navbar() {
  const location = useLocation()

  return (
    <header className="navbar">
      <div className="logo">SD</div>

      <nav>
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>
      </nav>
    </header>
  )
}

export default Navbar