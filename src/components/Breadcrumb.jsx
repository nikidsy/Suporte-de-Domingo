import { Link, useLocation } from "react-router-dom"

function Breadcrumb(){

const location = useLocation()
const path = location.pathname.split("/").filter(x => x)

return(

<div className="breadcrumb">

<Link to="/">Home</Link>

{path.map((item,index)=>{

const route = "/" + path.slice(0,index+1).join("/")

return(
<span key={route}>
 / <Link to={route}>{item}</Link>
</span>
)

})}

</div>

)

}

export default Breadcrumb