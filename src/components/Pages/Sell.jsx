import React, { Fragment } from "react";
import Banner from "./shared/Banner.jsx";

class Sell extends React.Component {
  render() {
    return (
      <Fragment>
        <Banner title="Sell"></Banner>
        <section className="privacy-policy page-section-ptb">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title">
                  <h2>Sell</h2>
                  <div className="separator"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p>
                  You looking for the right buyer to sell your car, Getting a
                  low price? Leave it to us, Raj Cars will buy your car for the
                  best price and we make sure your car gets into right buyer. We
                  assure you will get your name transfer copy within 90 days
                  from the date of sale.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Sell;
