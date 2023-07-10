import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer section__padding bg__dark">
      <div className="container">
        <div className="footer__content grid text__light text__center">
          <div className="footer__content--item">
            <h3 className="footer__title">Direccion</h3>
            <p>
              Av. 27 de feb. #332, Bella Vista Santo Domingo Distrito Nacional
              República Dominicana
            </p>
            <a href="mailto:someone@gmail.com">concilioshekinah@gmail.com</a>
            <br />
            <span>Tel: 809-732-0024.</span>
          </div>

          <div className="footer__content--item">
            <h3 className="footer__title">Info</h3>
            <ul className="footer__links">
              <li>
                <a href="header">Inicio</a>
              </li>
              <li>
                <a href="#about">Nosotros</a>
              </li>
              <li>
                <a href="#contact">Contacto</a>
              </li>
            </ul>
          </div>

        
          <div className="footer__content--item">
            <h3 className="footer__title">Redes Sociales</h3>
            <ul className="footer__links">
              <li>
                <a
                  href="https://web.facebook.com/shekinahtc/?_rdc=1&_rdr"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@concilioshekinah/featured"
                  target="_blank"
                  rel="noreferrer"
                >
                  Youtube
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/shekinahtc/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__content--item">
            <a href="/" className="footer__navlink">
              SHEKINAH TC
            </a>
            <p className="para__text">
              &copy; 2023 Shekinah Templo Central. Todos los derechos
              reservados. Diseñado por AC Dev.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
