import React from "react";
import aboutImg from "./assets/11.png";

class AboutUs extends React.Component {
  render() {
    return (
      <section className="feature-car gray-bg page-section-ptb">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row about custom-block-2">
                <div className="col-md-6">
                  <h2>About us </h2>
                  <span>
                    Your Destination to Get the Cars you Love at Prices you
                    Like.
                  </span>
                  <p>
                    We are one-stop solution for a wide range of hand-picked
                    preowned ca₹ Sell your used car securely, quickly and
                    conveniently. Choose from best finance options and
                    attractive interest rates.
                  </p>
                </div>
                <div className="col-md-6">
                  <img
                    className="img-fluid center-block"
                    src={aboutImg}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutUs;
