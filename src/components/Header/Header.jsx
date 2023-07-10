import "./header.css";
import Navbar from "../Navbar/Navbar";
import myVideo from "../../assets/Shekinah/bgvideo.mp4";

const Header = () => (
  <div
    className="header"
    style={{
      background: "transparent",
    }}
  >
    <Navbar />

    <div id="header" className="container">
      <video className="video__background" autoPlay muted loop>
        <source src={myVideo} type="video/mp4" />
      </video>
      <div className="header__content text__center text__light flex flex__center">
        <div className="header__content--left"></div>
        <div className="header__content--right">
          <h1 className="header__title fw__6">
            IGLESIA SHEKINNAH TEMPLO CENTRAL
          </h1>
          <p className="para__text">
            Shekinah TC es una iglesia cristiana comprometida en influir en el
            mundo basándose en la Biblia y en Jesucristo. Buscamos cambiar
            mentalidades y capacitar a las personas para liderar e impactar en
            todas las esferas de la vida. Somos Shekinah TC, donde se respira
            una atmosfera de gloria.
          </p>
          <a href="#contact">
            <button href="#contact" className="btn btn__blue">
              contactanos
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
