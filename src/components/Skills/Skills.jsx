import "./skills.css";
import images from "../../constants/images";

const Skills = () => {
  return (
    <div
      className="skills bg__whitesmoke section__padding"
      style={{
        background: `url(${images.skills_bg}) center/cover no-repeat`,
      }}
    >
      <div id="nosotros" className="container">
        <h2 className="section__title text__center">Nosotros</h2>
        <div className="skills__content grid">
          <div className="skills__content--left">
            <h3>Pastores Generales</h3>
            <p>
              Rafael V. Cruz Lora y Johvanna Trinidad de Cruz son los pastores
              generales de la Iglesia Cristiana Templo Central. Fueron llamados
              a servir como pastores en el año 1992, y además de su pasión y
              liderazgo de excelencia, han desarrollado un ministerio apostólico
              de fundar y supervisar iglesia en República Dominicana, Haití,
              Estados Unidos, Venezuela, Perú, Colombia, España y Holanda,
              formando de esta manera la Red Internacional de Iglesia Cristianas
              Shekinah.
            </p>
            <br />
            <h3>Shekinah</h3>
            <p>
              Palabra Hebrea que significa “La morada”, y se refiere al lugar
              donde Dios se manifestaba en medio de su pueblo Israel. La
              Shekinah era la señal manifiesta de la presencia de Dios en
              Israel, y aunque la palabra no aparece como tal en la Biblia, eso
              no significa que las Sagradas Escrituras no hablen sobre la luz
              admirable que se manifestaba entre los querubines del
              propiciatorio del arca, desde donde Jehová se manifestaba a su
              pueblo escogido.
            </p>
            <br />
            <h3>Misión</h3>
            <p>
              En las naciones: Transformar vidas y familias, mediante la
              presencia de Dios y de su Palabra. (Mateo 28: 19-20 y Marcos
              16:15-18).
            </p>
            <br />
            <h3>Visión</h3>
            <p>
              {" "}
              Ser una comunidad sanadora, donde vidas y familias completas sean
              alcanzadas para el reino de Dios, que puedan afirmarse y
              multiplicarse por medio de los grupos GALES, formándolas en los
              principios bíblicos, para que así puedan desarrollar el carácter
              de Cristo ejerciendo sus dones y ministerios para la gloria de
              Dios. (Hechos 2:41-47 y Hechos 5:42). Hay un proceso para poder
              cumplir a cabalidad nuestra visión y misión e implica cuatro
              pasos: “Ganar, consolidar, discipular, y enviar”.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
