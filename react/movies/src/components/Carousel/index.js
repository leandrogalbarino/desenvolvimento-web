import Slider from "react-slick";
import "./carousel.css";
function Carousel({ children }) {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    variableWidth: true,
    adaptiveHeight: true,
    slidesToScroll: 3,
    initialSlide: 0,
    slidesToShow: 5,
  };
  return (
    <div>
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  );
}

export default Carousel;