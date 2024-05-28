import React from 'react';
import FooterContainer from './Footer.styled'; // Ajusta la ruta y la extensión del archivo
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-content">
        <div className="footer-section left-section">
          <div className="left-content">
            <h2>MovieDetails</h2>
            <p>Tu fuente de información cinematográfica.</p>
          </div>
        </div>

        <div className="footer-section right-section">
          <h2>Contacto</h2>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> movie_details@gmail.com
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> +1 (123) 456-7890
          </p>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Ciudad del Cine, CA
          </p>
        </div>

        <div className="footer-section right-section">
          <h2>Redes Sociales</h2>
          <p>Síguenos en nuestras redes para recibir actualizaciones:</p>
          {/* Agrega enlaces a tus redes sociales */}
          <div className="social-icons">
            {/* Ejemplo con FontAwesome */}
            <FontAwesomeIcon icon={['fab', 'facebook']} />
            <FontAwesomeIcon icon={['fab', 'twitter']} />
            <FontAwesomeIcon icon={['fab', 'instagram']} />
            {/* Ajusta las redes sociales según tus necesidades */}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2023 MovieDetails. Todos los derechos reservados.</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
