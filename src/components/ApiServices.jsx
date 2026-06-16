function ApiServices() {
  const services = [
    {
      title: "Suporte Emergencial",
      description:
        "Atendimento rápido para resolver problemas críticos no seu sistema, evitando prejuízos e tempo de inatividade.",
      color: "yellow"
    },
    {
      title: "Suporte Técnico 24/7",
      description:
        "Monitoramento contínuo e suporte especializado para manter seus sistemas funcionando perfeitamente.",
      color: "red"
    },
    {
      title: "Correções e Atualizações",
      description:
        "Realizamos melhorias constantes, correções de bugs e atualizações de segurança.",
      color: "orange"
    },
    {
      title: "Monitoramento",
      description:
        "Acompanhamento completo da infraestrutura para prevenir falhas e aumentar performance.",
      color: "green"
    }
  ]

  return (
    <div className="services-grid">
      {services.map((service, index) => (
        <div key={index} className={`service-card ${service.color}`}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  )
}

export default ApiServices