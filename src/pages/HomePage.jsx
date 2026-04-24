import "../styles/main.scss"

function HomePage(){
  return(
    <>
      <section className="hero">
        <h1>SUPORTE DE DOMINGO</h1>
        <p className="subtitle">Transformação digital</p>

        <div className="highlight-box">
          Descubra tudo o que podemos oferecer
        </div>z
      </section>

      <div className="wave">
        <svg viewBox="0 0 1440 150" preserveAspectRatio="none">
          <path d="M0,80 C300,140 900,0 1440,80 L1440,150 L0,150 Z" />
        </svg>
      </div>

      <section className="sobre">
        <h2>SOBRE NÓS</h2>
        <p>
          Somos uma equipe dedicada a oferecer suporte técnico confiável e rápido,
          garantindo que seu sistema funcione sem interrupções.
        </p>
      </section>

      <section className="servicos">
        <h2>NOSSOS SERVIÇOS</h2>

        <div className="cards">
          <div className="card red">
            <h3>Suporte Emergencial</h3>
            <p>Atendimento crítico para resolver problemas urgentes.</p>
          </div>

          <div className="card orange">
            <h3>Resposta Imediata</h3>
            <p>Equipe pronta para agir rapidamente.</p>
          </div>

          <div className="card green">
            <h3>Mudanças e Correções</h3>
            <p>Correções e melhorias contínuas.</p>
          </div>

          <div className="card yellow">
            <h3>Monitoramento e Segurança</h3>
            <p>Acompanhamento constante dos sistemas.</p>
          </div>
        </div>

        <div className="cta">
          Quer solicitar um orçamento? <a href="#">Entre em contato</a>
        </div>

      </section>
    </>
  )
}

export default HomePage