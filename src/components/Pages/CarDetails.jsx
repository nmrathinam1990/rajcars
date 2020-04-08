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
            <Modal.Title>{details.brand}</Modal.Title>
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
                  {images.map(val => {
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
                        <span>Make</span>
                        <strong className="text-right">{details.brand}</strong>
                      </li>
                      <li>
                        <span>Model</span>
                        <strong className="text-right">{details.model}</strong>
                      </li>
                      <li>
                        <span>Registration date </span>
                        <strong className="text-right">{details.year}</strong>
                      </li>
                      <li>
                        <span>Mileage</span>
                        <strong className="text-right">{details.km}</strong>
                      </li>
                      <li>
                        <span>Condition</span>
                        <strong className="text-right">
                          {details.condition}
                        </strong>
                      </li>
                      <li>
                        <span>Exterior Color</span>
                        <strong className="text-right">
                          {details.extColor}
                        </strong>
                      </li>
                      <li>
                        <span>Interior Color</span>
                        <strong className="text-right">
                          {details.intColor}
                        </strong>
                      </li>
                      <li>
                        <span>Transmission</span>
                        <strong className="text-right">
                          {details.transmission}
                        </strong>
                      </li>
                      <li>
                        <span>Engine</span>
                        <strong className="text-right">{details.engine}</strong>
                      </li>
                      <li>
                        <span>Drivetrain</span>
                        <strong className="text-right">
                          {details.driveTrain}
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
