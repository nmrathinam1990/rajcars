import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

class Banner extends React.Component {
  render() {
    const title = this.props.title;
    return (
      <section className="inner-intro bg-1 bg-overlay-black-70">
        <div className="container">
          <div className="row text-center intro-title">
            <div className="col-md-6 text-md-left d-inline-block">
              <h1 className="text-white">{title}</h1>
            </div>
            <div className="col-md-6 text-md-right float-right">
              <ul className="page-breadcrumb">
                <li>
                  <a href="/">
                    <FontAwesomeIcon icon={faHome} /> Home
                  </a>
                  <FontAwesomeIcon icon={faAngleDoubleRight} />
                </li>
                <li>
                  <a href="/">pages</a>
                  <FontAwesomeIcon icon={faAngleDoubleRight} />
                </li>
                <li>
                  <span>{title}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;
