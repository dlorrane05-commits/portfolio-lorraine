import { useState, useEffect } from 'react';
import './Hero.css';
import fotoPerfil from '../assets/minha_foto.jpeg';

const textoCompleto = 'Estudante de ADS | Front-End em desenvolvimento';

function Hero() {
  const [textoDigitado, setTextoDigitado] = useState('');
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    if (indice < textoCompleto.length) {
      const timeout = setTimeout(() => {
        setTextoDigitado((prev) => prev + textoCompleto[indice]);
        setIndice((prev) => prev + 1);
      }, 60); // velocidade da digitação (ms por letra)

      return () => clearTimeout(timeout);
    }
  }, [indice]);

  return (
    <section className="hero">
      <div className="hero-texto">
        <h2>
          {textoDigitado}
          <span className="cursor-piscando">|</span>
        </h2>
        <p>
          Unindo organização, análise de dados e desenvolvimento web
          para otimizar processos e resultados.
        </p>
        <a href="/curriculo-lorraine.pdf" download className="btn-download">
          Baixar Currículo
        </a>
      </div>
      <div className="hero-foto">
        <img src={fotoPerfil} alt="Lorraine Duarte" />
      </div>
    </section>
  );
}

export default Hero;