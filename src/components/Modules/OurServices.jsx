import React from "react";
import OurServiceImg from "./assets/12.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWallet,
  faGasPump,
  faCogs,
  faWrench
} from "@fortawesome/free-solid-svg-icons";

const iconColor = {
  fontSize: "30px",
  color: "#db2d2e",
  marginBottom: "20px"
};

class OurServices extends React.Component {
  render() {
    return (
      <section className="our-service white-bg page-section-ptb">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h2>our services</h2>
              <span>
                We provide best services processus dynamicus, qui sequitur
                mutationem co
              </span>
              <div className="row">
                <div className="col-md-6">
                  <div className="feature-box-2">
                    <div className="icon" style={iconColor}>
                      <FontAwesomeIcon icon={faWallet} />
                    </div>
                    <div className="content">
                      <h5>Insurance</h5>
                      <p>
                        Having car insurance is essential. It provides financial
                        protection against physical damage or bodily injury,
                        floods, fire, theftand natural calamities.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="feature-box-2">
                    <div className="icon" style={iconColor}>
                      <FontAwesomeIcon icon={faGasPump} />
                    </div>
                    <div className="content">
                      <h5>Name Transfer</h5>
                      <p>
                        We provide hassle free name transfer work (RTO) with in
                        2 weeks from the date of purchasing the car. We also
                        provide support for Insurance name transfer and
                        insurance renewals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="feature-box-2">
                    <div className="icon" style={iconColor}>
                      <FontAwesomeIcon icon={faWrench} />
                    </div>
                    <div className="content">
                      <h5>Mechanical works</h5>
                      <p>
                        Natus perspiciatis sed ut unde omnis iste error sit
                        voluptatem acantium doloremque laudantium.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="feature-box-2">
                    <div className="icon" style={iconColor}>
                      <FontAwesomeIcon icon={faCogs} />
                    </div>
                    <div className="content">
                      <h5>RF Works</h5>
                      <p>
                        Omnis perspiciatis sed ut unde iste natus error sit
                        voluptatem acantium doloremque laudantium.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <img className="img-fluid" src={OurServiceImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default OurServices;
