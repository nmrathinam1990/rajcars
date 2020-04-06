import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Team_01, Team_02, Team_03 } from "./assets/team";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const quoteIcon = {
  display: "table-cell",
  color: "#ffffff",
  fontSize: "12px",
  width: "20px !important"
};

class OurTestimonial extends React.Component {
  render() {
    return (
      <section className="testimonial-3 white-bg page-section-ptb">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <span>What Our Happy Clients say about us</span>
                <h2>Our Testimonial </h2>
                <div className="separator"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <OwlCarousel
                className="owl-carousel owl-theme owl-loaded owl-drag"
                loop
                margin={30}
                items={1}
                autoplay={true}
              >
                <div className="item">
                  <div className="testimonial-block">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="testimonial-avtar">
                          <img
                            className="img-fluid center-block"
                            src={Team_02}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-9 col-sm-9">
                        <div className="testimonial-content">
                          <p>
                            <FontAwesomeIcon
                              icon={faQuoteLeft}
                              style={quoteIcon}
                            />
                            <span>
                              It was popularised in the 1960s lorem Ipsum is
                              simply dummy text of the printin a galley of type
                              and bled it to make a type specimen book. It has
                              survived not only five centuries, but also the
                              leap into electronictting, remaining essentially
                              unchanged. with the release of Letraset sheets
                              containing Lorem Ipsum passages.
                            </span>
                            <FontAwesomeIcon
                              icon={faQuoteRight}
                              style={quoteIcon}
                            />
                          </p>
                        </div>
                        <div className="testimonial-info">
                          <h6>Michael Bean</h6>
                          <span>Car Dealer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-block">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="testimonial-avtar">
                          <img
                            className="img-fluid center-block"
                            src={Team_03}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-9 col-sm-9">
                        <div className="testimonial-content">
                          <p>
                            <FontAwesomeIcon
                              icon={faQuoteLeft}
                              style={quoteIcon}
                            />
                            <span>
                              Remaining essentially unchanged lorem Ipsum is
                              simply dummy text of the printin a galley of type
                              and bled it to make a type specimen book. It has
                              survived not only five centuries, but also the
                              leap into electronictting. It was popularised in
                              the 1960s with the release of Letraset sheets
                              containing Lorem Ipsum passages.
                            </span>
                            <FontAwesomeIcon
                              icon={faQuoteRight}
                              style={quoteIcon}
                            />
                          </p>
                        </div>
                        <div className="testimonial-info">
                          <h6>Anne Smith</h6>
                          <span>Customer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-block">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="testimonial-avtar">
                          <img
                            className="img-fluid center-block"
                            src={Team_01}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-9 col-sm-9">
                        <div className="testimonial-content">
                          <p>
                            <FontAwesomeIcon
                              icon={faQuoteLeft}
                              style={quoteIcon}
                            />
                            <span>
                              Type and bled it to make lorem Ipsum is simply
                              dummy text of the printin a galley of a type
                              specimen book. It has survived not only five
                              centuries, but also the leap into electronictting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages.
                            </span>
                            <FontAwesomeIcon
                              icon={faQuoteRight}
                              style={quoteIcon}
                            />
                          </p>
                        </div>
                        <div className="testimonial-info">
                          <h6>Alice Williams</h6>
                          <span>Auto Dealer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default OurTestimonial;
