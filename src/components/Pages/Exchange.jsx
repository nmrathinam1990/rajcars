import React, { Fragment } from "react";
import Banner from "./shared/Banner";

class Exchange extends React.Component {
  render() {
    return (
      <Fragment>
        <Banner title="exchange"></Banner>
        <section className="privacy-policy page-section-ptb">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title">
                  <h2>Exchange</h2>
                  <div className="separator"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p>
                  You looking for a car upgrade? wanna sell your car to the
                  right buyer. Come to us, we will exchange your car for the
                  best price.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Exchange;
