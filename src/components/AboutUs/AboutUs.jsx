import "./about.css";
import firma from "../../assets/Shekinah/firma.png";
import apostol from "../../assets/Shekinah/apostol.png";


const AboutUs = () => (
  <div id="about" className="about section__padding">
    <div className="container">
      <div className="about__content text__center">
        <h2 className="section__title text__cap title">mensaje de nuestro apostol</h2>
        <div className="image__container">
          <img className="image__left" src={apostol} alt="apostol" />
        </div>
        <p className="para__text text__grey">
          Llegar e influir en el mundo mediante la construcción de una gran
          iglesia basada en la Biblia, centrada en Cristo, cambiando la
          mentalidad y capacitando a las personas para que lideren e impacten en
          todas las esferas de la vida. Estamos hambrientos por más de Su
          Espíritu, porque somos testigos de Su poder y Su amor. Te invitamos a
          conocer más sobre nuestra visión y cómo ser parte de lo que Dios esta
          haciendo en esta generacion de fe.
        </p>
        <img src={firma} alt="" />
      </div>
    </div>
  </div>
);

export default AboutUs;
