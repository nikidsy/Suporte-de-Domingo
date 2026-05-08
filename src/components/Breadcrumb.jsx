import { Link, useLocation } from "react-router-dom"

function Breadcrumb(){
  const location = useLocation()
  const path = location.pathname.split("/").filter(x => x)

  // ❌ não mostra breadcrumb na home ou em rotas simples (tipo /contato)
  if (path.length <= 1) return null

  return(
    <div className="breadcrumb">
      <Link to="/">Home</Link>

      {path.map((item,index)=>{
        const route = "/" + path.slice(0,index+1).join("/")

        return(
          <span key={route}>
            {" / "}
            <Link to={route}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </span>
        )
      })}
    </div>
  )
}

export default Breadcrumb