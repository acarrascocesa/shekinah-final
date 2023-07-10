import data from "../../constants/data";
import "./testimonials.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
// slick slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  let settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div id="testimonials" className="testimonials bg__blue section__padding">
      <div className="container testimonials-container">
        <div className="testimonials__content text__center">
          <h2 className="title">Pasajes Bíblicos</h2>
          <Slider {...settings}>
            {data.testimonials.map((testimonial, index) => {
              return (
                <div className="testimonials__item text__light" key={index}>
                  <p className="para__text">
                    <span>
                      <FaQuoteLeft />
                    </span>
                    &nbsp;
                    {testimonial.quote}{" "}
                    <span>
                      &nbsp; <FaQuoteRight />
                    </span>
                  </p>
                  <p className="text__upper text fw__5 ls__2">
                    {testimonial.author}
                  </p>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
