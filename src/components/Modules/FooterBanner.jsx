import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

class FooterBanner extends React.Component {
  render() {
    let whiltColor = {
      color: '#fff'
    }
    return (
      <section className="news-letter-main bg-1 bg-overlay-black-70">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 className="text-red text-center">
                Didn’t Find The Car That You Are Looking For?
              </h4>
              <h5 className="text-white text-center" style={{textTransform:"capitalize"}}>
                Tell Us In Detail, We Shall Get It For You.
              </h5>
              <h6 className="text-white text-center">(+91) 9688157167</h6>
              <ul className="text-white text-center list-inline">
                <li>
                  <a href="/" style={whiltColor}>
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li>
                  <a href="/" style={whiltColor}>
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a href="/" style={whiltColor}>
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a href="/" style={whiltColor}>
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FooterBanner;
