import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Slide_1 from "./assets/slider/slide_1.jpg";
import Slide_2 from "./assets/slider/slide_2.jpg";

const labelStyle = {
  color: "#FFF",
  fontSize: "59px",
  lineHeight: "80px",
  fontWeight: "900",
  textTransform: "uppercase",
  opacity: "unset",
  background: "none",
  bottom: "0",
  top: "150px",
  textAlign: "left"
};
class HomeSlider extends React.Component {
  render() {
    return (
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        showArrows={false}
        infiniteLoop={true}
        autoPlay={true}
        dynamicHeight={true}
      >
        <div>
          <img src={Slide_1} alt="slide_1" />
          <p className="legend" style={labelStyle}>
            Your dreamer car is <br /> waiting you
          </p>
        </div>
        <div>
          <img src={Slide_2} alt="slide_2" />
          <p className="legend" style={labelStyle}>
            Certified used vehicles with affordable price
          </p>
        </div>
      </Carousel>
    );
  }
}

export default HomeSlider;
