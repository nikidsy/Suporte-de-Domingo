import { useState } from "react"

const projects = [
  {
    title: "Code Trouble",
    image: "/Projects/code-trouble.png",
    sobre:
      "Plataforma colaborativa inspirada em fóruns de dúvidas e artigos técnicos. O projeto envolveu design responsivo com a metodologia Atomic Design, identidade visual própria e foco na experiência do usuário.",
    ano: "2024",
    cliente: "Code Trouble",
    categorias: "Aplicação Web e Mobile, Identidade Visual"
  },

  {
    title: "Elevare",
    image: "/Projects/elevare.png",
    sobre:
      "Branding com foco na estética e funcionalidade, especializado em design de embalagens para produtos de Medicina Tradicional Chinesa.",
    ano: "2025",
    cliente: "Elevare",
    categorias: "Identidade Visual, Mockups"
  },

  {
    title: "Prof Correa",
    image: "/Projects/prof.png",
    sobre:
      "Landing page criada para apresentar a identidade visual e marca pessoal do Professor Corrêa.",
    ano: "2024-2025",
    cliente: "Professor Corrêa",
    categorias: "Landing Page, Portfólio, Identidade Visual"
  },

  {
    title: "Toque ai",
    image: "/Projects/toque.png",
    sobre:
      "Projeto de landing page e identidade visual para o produto digital Toque AI.",
    ano: "2025",
    cliente: "Toque AI",
    categorias:
      "Produto Digital, Landing Page, Identidade Visual"
  },

  {
    title: "Santé",
    image: "/Projects/clinica.png",
    sobre:
      "Projeto de landing page para clínica odontológica com foco em credibilidade.",
    ano: "2025",
    cliente: "Clínica Santé",
    categorias: "Landing Page, Identidade Visual"
  },

  {
    title: "Joys Gourmet",
    image: "/Projects/joys.png",
    sobre:
      "Projeto de identidade visual premium para catering corporativo.",
    ano: "2025",
    cliente: "Joys Gourmet",
    categorias: "Identidade Visual, Branding"
  },

  {
    title: "Teacher Marcelli",
    image: "/Projects/teacher.png",
    sobre:
      "Projeto focado na estruturação visual e estratégica da professora de inglês.",
    ano: "2025",
    cliente: "Teacher Marcelli",
    categorias: "Identidade Visual, Landing Page"
  },

  {
    title: "CRJ Soluções",
    image: "/Projects/crj.png",
    sobre:
      "Site institucional multipage para empresa de manutenção predial.",
    ano: "2025",
    cliente: "CRJ Soluções",
    categorias: "Web Design, UI/UX, Site Institucional"
  }
]

function ProjectsCarousel() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <>
      <section className="projects">
        <h2>PROJETOS</h2>

        <p className="projects-subtitle">
          Nossos trabalhos: interfaces, códigos & experiências digitais
        </p>

        <div className="projects-carousel">
          {projects.map((project, index) => (
            <div
              className="project-item"
              key={index}
              onClick={() => setSelectedProject(project)}
            >
              <img src={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </section>

      {selectedProject && (
        <div
          className="popup-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="popup"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
            />

            <div className="popup-content">
              <h3>{selectedProject.title}</h3>

              <p className="popup-description">
                {selectedProject.sobre}
              </p>

              <div className="popup-info">
                <div>
                  <strong>Ano:</strong>
                  <span>{selectedProject.ano}</span>
                </div>

                <div>
                  <strong>Cliente:</strong>
                  <span>{selectedProject.cliente}</span>
                </div>

                <div>
                  <strong>Categorias:</strong>
                  <span>{selectedProject.categorias}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectsCarousel