import React, { Fragment } from "react";
import { Modal } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

class CarDetails extends React.Component {
  render() {
    const details = this.props.carDetails;
    const images = details.images ? details.images.split(",") : [];
    return (
      <Fragment>
        <Modal show={this.props.show} onHide={this.props.close} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{details.carName} (₹ {details.price}) </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-8">
                <OwlCarousel
                  className="owl-carousel"
                  loop
                  items={1}
                  autoplay={true}
                >
                  {images.map((val) => {
                    return (
                      <img
                        className="img-fluid center-block"
                        src={val.trim()}
                        alt=""
                        key={details._id}
                      />
                    );
                  })}
                </OwlCarousel>
              </div>
              <div className="col-md-4">
                <div className="car-details-sidebar">
                  <div className="details-block details-weight">
                    <ul>
                      <li>
                        <span>Year</span>
                        <strong className="text-right">{details.year}</strong>
                      </li>
                      <li>
                        <span>Kms Driven</span>
                        <strong className="text-right">
                          {details.kilometerDriven}
                        </strong>
                      </li>
                      <li>
                        <span>Fuel Type </span>
                        <strong className="text-right">
                          {details.fuelType}
                        </strong>
                      </li>
                      <li>
                        <span>Owner</span>
                        <strong className="text-right">
                          {details.ownerNumber}
                        </strong>
                      </li>
                      <li>
                        <span>Transmission</span>
                        <strong className="text-right">
                          {details.transmission}
                        </strong>
                      </li>
                      <li>
                        <span>RTO</span>
                        <strong className="text-right">
                          {details.registrationNumber}
                        </strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </Fragment>
    );
  }
}

export default CarDetails;
