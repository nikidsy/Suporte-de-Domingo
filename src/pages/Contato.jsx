import Breadcrumb from "../components/Breadcrumb"

function Contato(){

return(

<div className="contact">

<Breadcrumb/>

<h1>Contato</h1>

<p>
Entre em contato com a Suporte de Domingo
para solicitar suporte técnico ou conhecer
nossas soluções tecnológicas.
</p>

<div className="contact-info">

<p><strong>Email:</strong> contato@suportededomingo.com</p>

<p><strong>Telefone:</strong> (11) 99999-0000</p>

<p><strong>Localização:</strong> São Paulo - SP</p>

</div>

<form>

<input placeholder="Nome"/>

<input placeholder="Email"/>

<textarea placeholder="Mensagem"></textarea>

<button>Enviar mensagem</button>

</form>

</div>

)

}

export default Contato