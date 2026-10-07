import './Experience.css';

function Experience() {
  return (
    <section className="experience" id="experiencia">
      <h2>Dei um npm install na minha trajetória</h2>

      <div className="jornada-grid">
        <div className="jornada-card atual">
          <span className="jornada-tag">hoje</span>
          <h3>Desenvolvimento Web</h3>
          <p>
            Atuo no time de Desenvolvimento Web da ALELO Brasil, apoiando a
            manutenção de páginas e componentes (HTML, CSS e JavaScript),
            testes funcionais e documentação técnica — enquanto sigo estudando
            Análise e Desenvolvimento de Sistemas.
          </p>
        </div>

        <div className="jornada-card">
          <span className="jornada-tag">antes</span>
          <h3>Produtos Digitais & Dados</h3>
          <p>
            Antes de migrar pro front-end, passei por áreas de produtos B2C e
            análise de dados, trabalhando com indicadores, Excel e Power BI —
            uma base que hoje me ajuda a enxergar código com um olhar mais
            analítico e orientado a resultado.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;