import "./workprocess.css";
import "video-react/dist/video-react.css";

const WorkProcess = () => {
  return (
    <div id="online" className="workprocess section__padding">
      <div className="container">
        <div className="workprocess__content text__center">
          <h2 className="section__title text__cap">SHEKINAH EN VIVO</h2>
          <p className="para__text">
            ¡Bienvenidos al culto en vivo! Únete a nosotros para experimentar un
            tiempo de adoración, enseñanza y comunidad en línea. Estamos
            emocionados de tener la oportunidad de conectarnos contigo, sin
            importar dónde te encuentres.
          </p>

          <div className="vid__container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/JYqywuHD8LY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
