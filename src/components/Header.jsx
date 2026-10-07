import { useState } from 'react';
import './Header.css';

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  function fecharMenu() {
    setMenuAberto(false);
  }

  return (
    <header className="header">
      <h1>Lorraine Duarte</h1>

      <button
        className={`hamburguer ${menuAberto ? 'aberto' : ''}`}
        onClick={() => setMenuAberto(!menuAberto)}
        aria-label="Abrir menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={menuAberto ? 'nav-aberto' : ''}>
        <a href="#sobre" onClick={fecharMenu}>Sobre</a>
        <a href="#experiencia" onClick={fecharMenu}>Experiência</a>
        <a href="#skills" onClick={fecharMenu}>Skills</a>
        <a href="#projetos" onClick={fecharMenu}>Projetos</a>
        <a href="#contato" onClick={fecharMenu}>Contato</a>
      </nav>
    </header>
  );
}

export default Header;