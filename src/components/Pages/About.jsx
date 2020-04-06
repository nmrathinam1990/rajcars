import React, { Fragment } from "react";
import Banner from "./shared/Banner.jsx";

class About extends React.Component {
  render() {
    return (
      <Fragment>
        <Banner title="about"></Banner>
        <section className="welcome-4 page-section-ptb white-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="section-title">
                  <h2>rajcarschennai.in</h2>
                  <div className="separator"></div>
                  <p style={{ textAlign: "left" }}>
                    Welcome to Raj Cars, Valasaravakkam, Chennai. We deal all
                    brands of cars buying and selling. We assure you that you
                    will get best price in the market. We have 10+ years
                    experience in this trade.
                    <br />
                    Here in Raj Cars, we sell only cars that are accidental -
                    free, non flood affected and genuine mileage. We have
                    variety of cars ranging from the lowest 1 lakh to the
                    maximum of 10 lakhs.
                    <br />
                    Here in Raj Cars we provide other services to our customer
                    to have hassle free experience. We provide insurance renewal
                    services, Name Transfer RTO services and Loan services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="gray"></hr>
        <section className="our-history white-bg page-section-ptb">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title">
                  <h2>Our Values</h2>
                  <div className="separator"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <ul className="timeline list-style-none">
                  <li>
                    <div className="timeline-badge">
                      <h4>01</h4>
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h5>Customer Service</h5>
                      </div>
                      <div className="timeline-body">
                        <p>
                          We believe that our job is to offer exceptional
                          service to our customers leading to a large family of
                          happy and delighted custome₹ We understand that the
                          only way to grow sustainably is to ensure that our
                          customers are happy and find our service to be very
                          valuable.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-badge">
                      <h4>02</h4>
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h5>Quick Easy Process</h5>
                      </div>
                      <div className="timeline-body">
                        <p>
                          We understand that buying or selling a car is quite
                          complicated and stressful! Our process is convenient,
                          hassle free and quick!
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-badge">
                      <h4>03</h4>
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h5>Safety</h5>
                      </div>
                      <div className="timeline-body">
                        <p>
                          At precarmart, we ensure we source and sell cars to
                          only genuine parties. We take care of all
                          documentation to ensure our customers are always on
                          the safer side.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li className="timeline-inverted">
                    <div className="timeline-badge">
                      <h4>04</h4>
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h5>Fair Pricing</h5>
                      </div>
                      <div className="timeline-body">
                        <p>
                          When it comes to pricing, we are very clear we want to
                          be fair to both our sellers as well as buye₹ We pay a
                          close attention to the condition of the car and offer
                          the right price
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default About;
