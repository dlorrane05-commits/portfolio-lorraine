import './Contact.css';
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <section className="contact" id="contato">
      <h2>Vamos conversar?</h2>
      <p>
        Se você chegou até aqui, já sabe um pouco sobre mim. Que tal batermos um papo?
      </p>
      <div className="contact-icons">
        <a href="mailto:dlorrane05@gmail.com" className="icon-btn" title="E-mail">
          <FaEnvelope />
        </a>
        <a href="https://linkedin.com/in/lorrrained" target="_blank" rel="noopener noreferrer" className="icon-btn" title="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/dlorrane05-commits" target="_blank" rel="noopener noreferrer" className="icon-btn" title="GitHub">
          <FaGithub />
        </a>
        <a href="https://wa.me/5511915337388" target="_blank" rel="noopener noreferrer" className="icon-btn" title="WhatsApp">
          <FaWhatsapp />
        </a>
      </div>
    </section>
  );
}

export default Contact;