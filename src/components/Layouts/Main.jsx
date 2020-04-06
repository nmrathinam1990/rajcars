import React, { Fragment } from "react";
import { HomeSlider } from "./index";
import OurServices from "../Modules/OurServices.jsx";
import AboutUs from "../Modules/AboutUs.jsx";
import OurTestimonial from "../Modules/OurTestimonial.jsx";

class Main extends React.Component {
  render() {
    return (
      <Fragment>
        <HomeSlider></HomeSlider>
        <AboutUs></AboutUs>
        <OurServices></OurServices>
        <OurTestimonial></OurTestimonial>
      </Fragment>
    );
  }
}

export default Main;
