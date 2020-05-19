import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Slide_1 from "./assets/slider/slide_1.jpg";
import Slide_2 from "./assets/slider/slide_2.jpg";
import Slide_3 from "./assets/slider/slide_3.jpg";

class HomeSlider extends React.Component {
  render() {
    return (
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        showArrows={false}
        infiniteLoop={true}
        autoPlay={true}
        dynamicHeight={true}
      >
        <div>
          <img src={Slide_1} alt="slide_1" />
        </div>
        <div>
          <img src={Slide_2} alt="slide_2" />
        </div>
        <div>
          <img src={Slide_3} alt="slide_3" />
        </div>
      </Carousel>
    );
  }
}

export default HomeSlider;
