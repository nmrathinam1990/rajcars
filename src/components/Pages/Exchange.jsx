import React, { Fragment } from "react";
import Banner from "./shared/Banner";
import exchangeImg from "../Pages/assets/exchange.jpg";

class Exchange extends React.Component {
  render() {
    return (
      <Fragment>
        <Banner title="exchange" class="bg-1"></Banner>
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
              <div className="col-md-5">
                <p>
                  You looking for a car upgrade? wanna sell your car to the
                  right buyer. Come to us, we will exchange your car for the
                  best price.
                </p>
              </div>
              <div className="col-md-7">
                <img
                  className="img-fluid center-block"
                  src={exchangeImg}
                  alt="Exchange"
                />
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Exchange;
