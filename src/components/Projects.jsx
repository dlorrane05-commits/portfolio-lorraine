import './Projects.css';

const projetos = [
  {
    titulo: 'Portfólio Digital para Artista Plástico',
    descricao:
      'Site completo para divulgação do trabalho de um pintor, com galeria de obras, apresentação do artista e canais de contato.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    tipoTela: 'galeria',
  },
  {
    titulo: 'API de Consulta de Dados Climáticos',
    descricao:
      'API para consulta de dados de clima em tempo real, permitindo obter informações meteorológicas de forma estruturada.',
    tecnologias: ['JavaScript', 'Node.js', 'API REST'],
    tipoTela: 'clima',
  },
  {
    titulo: 'Lista de Tarefas (To-Do List)',
    descricao:
      'Aplicação web para gerenciamento de tarefas, permitindo adicionar, concluir e remover tarefas de forma simples e intuitiva.',
    tecnologias: ['React', 'JavaScript', 'CSS'],
    tipoTela: 'tarefas',
  },
  {
    titulo: 'Mini SDUI',
    descricao:
      'Portal que consome e exibe dados vindos do meu Viewer, renderizando as informações de forma dinâmica em uma interface construída com React.',
    tecnologias: ['React', 'JSX', 'JavaScript', 'CSS'],
    tipoTela: 'sdui',
  },
];

// Cada função desenha uma "telinha" fake diferente
function TelaGaleria() {
  return (
    <div className="tela-galeria">
      <div className="galeria-header"></div>
      <div className="galeria-grid">
        <span></span><span></span><span></span>
        <span></span><span></span><span></span>
      </div>
    </div>
  );
}

function TelaClima() {
  return (
    <div className="tela-clima">
      <div className="clima-card">
        <div className="clima-icone">☀️</div>
        <div className="clima-temp">24°C</div>
        <div className="clima-linha"></div>
        <div className="clima-linha curta"></div>
      </div>
    </div>
  );
}

function TelaTarefas() {
  return (
    <div className="tela-tarefas">
      <div className="tarefa-item">
        <span className="tarefa-check feito"></span>
        <div className="tarefa-linha riscada"></div>
      </div>
      <div className="tarefa-item">
        <span className="tarefa-check"></span>
        <div className="tarefa-linha"></div>
      </div>
      <div className="tarefa-item">
        <span className="tarefa-check"></span>
        <div className="tarefa-linha curta"></div>
      </div>
    </div>
  );
}

function TelaSdui() {
  return (
    <div className="tela-sdui">
      <div className="sdui-topo">
        <span className="sdui-badge"></span>
        <div className="sdui-linha-topo"></div>
      </div>
      <div className="sdui-conteudo">
        <div className="sdui-bloco grande"></div>
        <div className="sdui-coluna">
          <div className="sdui-bloco pequeno"></div>
          <div className="sdui-bloco pequeno"></div>
        </div>
      </div>
    </div>
  );
}

function renderTela(tipo) {
  if (tipo === 'galeria') return <TelaGaleria />;
  if (tipo === 'clima') return <TelaClima />;
  if (tipo === 'tarefas') return <TelaTarefas />;
  if (tipo === 'sdui') return <TelaSdui />;
  return null;
}

function Projects() {
  return (
    <section className="projects" id="projetos">
      <h2>Meus projetos de destaque</h2>
      <div className="projects-grid">
        {projetos.map((projeto) => (
          <div className="project-card" key={projeto.titulo}>
            <div className="laptop-mockup">
              <div className="laptop-tela">
                <div className="laptop-topo">
                  <span></span><span></span><span></span>
                </div>
                <div className="laptop-conteudo">
                  {renderTela(projeto.tipoTela)}
                </div>
              </div>
              <div className="laptop-base"></div>
            </div>

            <h3>{projeto.titulo}</h3>
            <p>{projeto.descricao}</p>

            <div className="tech-tags">
              {projeto.tecnologias.map((tech) => (
                <span className="tech-tag" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;