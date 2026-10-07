import './Skills.css';

const habilidades = [
  'HTML', 'CSS', 'JavaScript', 'React',
  'Excel', 'Power BI', 'SQL', 'Word', 'PowerPoint'
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {habilidades.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;