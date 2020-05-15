import React, { Fragment } from "react";
import Banner from "./shared/Banner.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const liStyle = {
  lineHeight: '35px'
}

class Loan extends React.Component {
  render() {
    return (
      <Fragment>
        <Banner title="Our Services"></Banner>
        <section className="privacy-policy page-section-ptb">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title">
                  <h2>Our Services</h2>
                  <div className="separator"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p>
                  We help customers to get a car loan and depends upon their
                  profile they can get up to a maximum of 80% loan.
                </p>

                <h5 className="text-red">
                  We arrange loans from the following companies,
                </h5>
                <ul className="list-style-1">
                  <li style={liStyle}>
                    <FontAwesomeIcon icon={faAngleRight} /> HDFC Bank
                  </li>
                  <li style={liStyle}>
                    <FontAwesomeIcon icon={faAngleRight} /> TVS Credits
                  </li>
                  <li style={liStyle}>
                    <FontAwesomeIcon icon={faAngleRight} /> Kotak Mahindra
                  </li>
                  <li style={liStyle}>
                    <FontAwesomeIcon icon={faAngleRight} /> Mahindra &amp;
                    Mahindra
                  </li>
                  <li style={liStyle}>
                    <FontAwesomeIcon icon={faAngleRight} /> Sriram Finance
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

export default Loan;
