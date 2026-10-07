import './Robot.css';

function Robot() {
  return (
    <div className="robot-container">
      <div className="robot">
        <div className="robot-antena">
          <div className="robot-antena-bola"></div>
        </div>
        <div className="robot-cabeca">
          <div className="robot-olho esquerdo"></div>
          <div className="robot-olho direito"></div>
        </div>
        <div className="robot-corpo">
          <div className="robot-tela"></div>
        </div>
        <div className="robot-braco esquerdo"></div>
        <div className="robot-braco direito"></div>
      </div>
    </div>
  );
}

export default Robot;