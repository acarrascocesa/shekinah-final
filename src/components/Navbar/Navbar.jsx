import { useState } from "react";
import "./navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/Shekinah/logo-4.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="container flex">
        <div className="brand__and__toggler flex">
          <a href="#home" alt="" className="navbar__brand">
            <img src={logo} alt="site logo" />
          </a>
          <button
            type="button"
            className="navbar__open--btn text__light"
            onClick={() => setToggleMenu(true)}
          >
            <FaBars size={26} />
          </button>
        </div>

        <div className="navbar__collapse">
          <ul className="navbar__nav">
            <li className="nav__item">
              <a
                href="#home"
                className="nav__link text__upper fw__6 text__light nav__active"
              >
                inicio
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#nosotros"
                className="nav__link text__upper fw_6 text__light"
              >
                nosotros
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                className="nav__link text__upper fw_6 text__light"
              >
                apostol
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#imagenes"
                className="nav__link text__upper fw_6 text__light"
              >
                imagenes
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#online"
                className="nav__link text__upper fw_6 text__light"
              >
                online
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#testimonials"
                className="nav__link text__upper fw_6 text__light"
              >
                frases
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                className="nav__link text__upper fw_6 text__light"
              >
                contacto
              </a>
            </li>
          </ul>
        </div>

        {toggleMenu && (
          <div className="navbar__smallscreen">
            <button
              type="button"
              className="navbar__close--btn text__light"
              onClick={() => setToggleMenu(false)}
            >
              <FaTimes size={32} />
            </button>
            <ul className="navbar__nav--smallscreen text__light">
              <li className="nav__item">
                <a
                  href="#home"
                  className="nav__link text__upper fw__6 nav__active text__light"
                >
                  inicio
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#about"
                  className="nav__link text__upper fw__6 text__light"
                >
                  apostol
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#nosotrost"
                  className="nav__link text__upper fw__6 text__light"
                >
                  nosotros
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#imagenes"
                  className="nav__link text__upper fw__6 text__light"
                >
                  imagenes
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#online"
                  className="nav__link text__upper fw__6 text__light"
                >
                  online
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#about"
                  className="nav__link text__upper fw__6 text__light"
                >
                  frases
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#contact"
                  className="nav__link text__upper fw__6 text__light"
                >
                  contacto
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
