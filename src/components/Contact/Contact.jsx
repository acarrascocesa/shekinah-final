import { useState } from "react";
import "./contact.css";

// import { useState } from "react";

const Contact = () => {
  const formInitialDetails = {
    name: "",
    title: "",
    email: "",
    comment: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Enviar");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Enviando...");
    let response = await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    let result = await response.json();
    setButtonText("Enviar");
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ success: true, message: "Mensaje Enviado Exitosamente" });
    } else {
      setStatus({
        success: false,
        message: "Algo salio mal, trate de nuevo mas tarde",
      });
    }
  };
  return (
    <div id="contact" className="contact section__padding bg__whitesmoke">
      <div className="container">
        <h2 className="section__title text__center">CONTACTANOS</h2>
        <h3 className="text__center">NUESTROS HORARIOS DE CULTOS</h3>
        <p className="para__text text__center">
          <p>DOMINGOS Culto de adoración: 9:30 a.m. / 11:30 a.m.</p>
          <p>MARTES Avivamiento y bendición 7:30 p.m.</p>
          <p>Formación Integral de Discípulos Shekinah (FISD). MIERCOLES</p>
          <p>
            {" "}
            Clases de Liderazgo Y Clases Ministeriales Monte Carmelo 7:30 p.m. –
            9:30 p.m.
          </p>
          <p>JUEVES Grupos Celulares GALES 7:30 p.m.</p>
        </p>

        <div className="contact__content">
          <form onSubmit={handleSubmit}>
            <div className="form__elem form__elem--2">
              <input
                type="text"
                value={formDetails.name}
                className="form__control"
                placeholder="Tu Nombre"
                onChange={(e) => onFormUpdate("name", e.target.value)}
              />
              <input
                type="text"
                value={formDetails.email}
                className="form__control"
                placeholder="Tu email"
                onChange={(e) => onFormUpdate("email", e.target.value)}
              />
            </div>
            <div className="form__elem">
              <input
                type="text"
                value={formDetails.title}
                className="form__control"
                placeholder="El Titulo"
                onChange={(e) => onFormUpdate("title", e.target.value)}
              />
            </div>
            <div className="form__elem">
              <textarea
                className="form__control"
                value={formDetails.comment}
                placeholder="Tu comentario"
                rows="6"
                onChange={(e) => onFormUpdate("comment", e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="form__submit--btn btn btn__blue">
              {buttonText}
            </button>
            {status.message && (
              <div className="row">
                <p className={status.success === false ? "danger" : "success"}>
                  {status.message}
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
