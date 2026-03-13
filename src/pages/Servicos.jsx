import { useEffect, useState } from "react"
import Breadcrumb from "../components/Breadcrumb"

function Servicos(){

const [dados,setDados] = useState([])
const [loading,setLoading] = useState(true)

useEffect(()=>{

fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")

.then(res=>res.json())

.then(data=>{
setDados(data)
setLoading(false)
})

},[])

return(

<div className="page">

<Breadcrumb/>

<h1>Serviços</h1>

<p className="subtitle">

Conheça algumas das soluções oferecidas
pela Suporte de Domingo.

</p>

<div className="cards">

<div className="card">
<h3>Suporte Técnico</h3>
<p>
Diagnóstico e solução de problemas em
computadores e redes corporativas.
</p>
</div>

<div className="card">
<h3>Gerenciamento de Redes</h3>
<p>
Monitoramento e manutenção da
infraestrutura de rede empresarial.
</p>
</div>

<div className="card">
<h3>Desenvolvimento de Sistemas</h3>
<p>
Criação de sistemas personalizados
para empresas.
</p>
</div>

</div>

<h2>Atualizações de Tecnologia</h2>

{loading && <p>Carregando...</p>}

{dados.map(item => (

<div key={item.id} className="api-card">

<h3>{item.title}</h3>

<p>{item.body}</p>

</div>

))}

</div>

)

}

export default Servicos