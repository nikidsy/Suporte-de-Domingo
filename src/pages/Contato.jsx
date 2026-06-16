import { useState } from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
import Breadcrumb from "../components/Breadcrumb";
import "../styles/main.scss";

function Contato() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nome || !form.email || !form.mensagem) {
      alert("Preencha todos os campos!");
      return;
    }

    alert("Mensagem enviada com sucesso!");

    setForm({
      nome: "",
      email: "",
      mensagem: "",
    });
  };

  return (
    <section className="contato">
      <Breadcrumb />

      <div className="contato-container">
        <div className="contato-info">
          <span>FALE CONOSCO</span>

          <h2>Precisa de ajuda com seu domínio?</h2>

          <p>
            Nossa equipe está pronta para ajudar você com suporte,
            configuração, renovação e gerenciamento de domínios.
          </p>

          <div className="info-item">
            <FaPhoneAlt />
            <span>(11) 96761-1652 </span>
          </div>

          <div className="info-item">
            <FaLinkedin />
            <a
              href="https://www.linkedin.com/company/suporte-de-domingo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <div className="info-item">
            <FaInstagram />
            <a
              href="https://www.instagram.com/suportededomingo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @seu_perfil
            </a>
          </div>
        </div>

        <form className="form-box" onSubmit={handleSubmit}>
          <h3>Envie sua mensagem</h3>

          <input
            type="text"
            name="nome"
            placeholder="Seu nome"
            value={form.nome}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            value={form.email}
            onChange={handleChange}
          />

          <textarea
            name="mensagem"
            placeholder="Digite sua mensagem..."
            value={form.mensagem}
            onChange={handleChange}
          />

          <button type="submit">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contato;