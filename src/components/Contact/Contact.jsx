import "./contact.css";
// import { useState } from "react";

const Contact = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   title: "",
  //   comment: ""
  // });
  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Enviado"); // Simulación del envío del correo electrónico
    // Aquí puedes agregar la lógica para enviar el formulario a un servidor de correo electrónico
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
                className="form__control"
                placeholder="Tu Nombre"
              />
              <input
                type="text"
                className="form__control"
                placeholder="Tu email"
              />
            </div>
            <div className="form__elem">
              <input
                type="text"
                className="form__control"
                placeholder="El Titulo"
              />
            </div>
            <div className="form__elem">
              <textarea
                className="form__control"
                placeholder="Tu comentario"
                rows="6"
              ></textarea>
            </div>
            <button type="submit" className="form__submit--btn btn btn__blue">
              enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
