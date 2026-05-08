import "../styles/main.scss"
import ApiServices from "../components/ApiServices"

function HomePage(){
  return(
    <>
      <section className="hero">
        <h1>SUPORTE DE DOMINGO</h1>

        <div className="subtitle">
        <p>Seu sistema nunca para. A gente também não.</p> 
        <p>Descubra como podemos impulsionar sua transformação digital e levar seu negócio ao próximo nível.</p>
        </div>
        
      </section>

      <div className="wave">
        <svg viewBox="0 0 1440 150" preserveAspectRatio="none">
          <path d="M0,80 C300,140 900,0 1440,80 L1440,150 L0,150 Z" />
        </svg>
      </div>

      <section className="sobre" id="sobre">
  <h2>SOBRE NÓS</h2>

  <div className="sobre-box">
    <p className="sobre-texto">
      A Suporte de Domingo é uma empresa de tecnologia especializada no desenvolvimento de soluções digitais modernas, eficientes e escaláveis. Atuamos com foco em entregar não apenas sistemas funcionais, mas experiências completas que agregam valor real ao negócio de nossos clientes. 

      Nosso trabalho integra tecnologia, design e estratégia, permitindo a criação de plataformas intuitivas, seguras e preparadas para o crescimento. Cada projeto é pensado de forma personalizada, respeitando as necessidades específicas de cada cliente. 

      Buscamos otimizar processos, reduzir custos e aumentar a performance, sempre com atenção à usabilidade e à experiência do usuário. Acreditamos que um bom sistema não é apenas aquele que funciona, mas aquele que facilita, conecta e impulsiona resultados. 

      Na Suporte de Domingo, inovação, confiabilidade e compromisso caminham juntos para transformar desafios em soluções digitais inteligentes.
    </p>
  </div>
</section>

      <section className="servicos" id="servicos">
        <h2>NOSSOS SERVIÇOS</h2>

        <ApiServices />

        <div className="cta">
          Quer solicitar um orçamento? <a href="/contato">Entre em contato</a>
        </div>
      </section>
    </>
  )
}

export default HomePage