import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faClock
} from "@fortawesome/free-solid-svg-icons";

class TopBar extends React.Component {
  render() {
    return (
      <div className="topbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="topbar-left text-lg-left text-center">
                <ul className="list-inline">
                  <li>
                    <FontAwesomeIcon icon={faEnvelope} />
                    rajcarschennai@gmail.com
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faClock} /> Mon - Sun 8.00am -
                    8.00pm.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="topbar-right text-lg-right text-center">
                <ul className="list-inline">
                  <li>
                    <FontAwesomeIcon icon={faPhone} /> (+91) 9688157167
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopBar;
