import React, { Fragment, useState } from "react";
import Banner from "./shared/Banner.jsx";
import Pagination from "react-js-pagination";
import { datas } from "../../constants/data";
import { Link } from "react-router-dom";
import CarDetails from "../Pages/CarDetails.jsx";
import ToggleBox from "./ToggleBox";
import Slider from "react-rangeslider";

import "../Pages/assets/css/rangeslider.min.css";

function ProductList(ProductVal) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { Product } = ProductVal;
  const baseURL = "https://img.cars24.tech/unsafe/260x188/";

  return (
    <Fragment>
      <CarDetails
        show={show}
        close={handleClose}
        carDetails={Product}
      ></CarDetails>

      <div className="col-lg-4" key={Product.carId}>
        <div className="car-item gray-bg text-center">
          <div className="car-image">
            <img
              className="img-fluid"
              src={baseURL + Product.mainImage.url}
              alt=""
            />
            <div className="car-overlay-banner">
              <ul>
                <li>
                  <Link exact="true" onClick={handleShow} to="#">
                    <i className="fa fa-link"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="car-list">
            <ul className="list-inline">
              <li>YR:{Product.year}</li>
              <li>OWNERS: {Product.ownerNumber}</li>
              <li>KM: {Product.kilometerDriven}</li>
            </ul>
          </div>
          <div className="car-content">
            <a href="/">{Product.model}</a>
            <div className="separator"></div>
            <div className="price">
              <span className="new-price">₹{Product.price}</span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

class Buy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      end: 9,
      activePage: 1,
      selectedBrand: null,
      selectedYear: "all",
      selectedFuel: [],
      selectedTransmission: [],
      selectedOwners: [],
      selectedBodyType: [],
      selectedModel: null,
      selectedBudget: "all",
      selectedKM: 0,
      products: [],
    };
  }

  // Pagination page change
  handlePageChange(pageNumber) {
    if (pageNumber < this.state.activePage) {
      this.setState({
        start: this.state.start - 9,
        end: this.state.end - 9,
        activePage: pageNumber,
      });
    } else {
      this.setState({
        start: this.state.start + 9,
        end: this.state.end + 9,
        activePage: pageNumber,
      });
    }
  }

  //Year filter value
  handleYear(e) {
    const year = e.target.value !== "null" ? e.target.value : null;
    this.setState({
      selectedYear: year,
      activePage: 1,
      start: 0,
      end: 9,
    });
  }

  //Fuel filter value
  handleFuel = (e) => {
    let Fuel = [...this.state.selectedFuel];
    if (Fuel.indexOf(e.target.value) === -1) {
      Fuel.push(e.target.value);
    } else {
      Fuel.splice(this.state.selectedFuel.indexOf(e.target.value), 1);
    }
    this.setState({
      selectedFuel: Fuel,
      activePage: 1,
      start: 0,
      end: 9,
    });
  };

  //Body Type filter value
  handleBodyType = (e) => {
    let bodyType = [...this.state.selectedBodyType];
    if (bodyType.indexOf(e.target.value) === -1) {
      bodyType.push(e.target.value);
    } else {
      bodyType.splice(this.state.selectedBodyType.indexOf(e.target.value), 1);
    }
    this.setState({
      selectedBodyType: bodyType,
      activePage: 1,
      start: 0,
      end: 9,
    });
  };

  handleBrand(e) {}

  //Budget filter value
  handleBudget(e) {
    const budget = e.target.value !== "all" ? e.target.value : "all";
    this.setState({
      activePage: 1,
      selectedBudget: budget,
      start: 0,
      end: 9,
    });
  }

  handleCity(e) {}

  // KM driven filter value
  handleKM = (value) => {
    this.setState({
      selectedKM: value,
      start: 0,
      end: 9,
      activePage: 1,
    });
  };

  // Owners filter value
  handleOwners = (e) => {
    let Owners = [...this.state.selectedOwners];
    let selectedOwerValue = parseInt(e.target.value);
    if (Owners.indexOf(selectedOwerValue) === -1) {
      Owners.push(selectedOwerValue);
    } else {
      Owners.splice(this.state.selectedOwners.indexOf(selectedOwerValue), 1);
    }
    this.setState({
      selectedOwners: Owners,
      activePage: 1,
      start: 0,
      end: 9,
    });
  };

  // Transmission filter value
  handleTransmission = (e) => {
    let Transmission = [...this.state.selectedTransmission];
    if (Transmission.indexOf(e.target.value) === -1) {
      Transmission.push(e.target.value);
    } else {
      Transmission.splice(
        this.state.selectedTransmission.indexOf(e.target.value),
        1
      );
    }
    this.setState({
      selectedTransmission: Transmission,
      activePage: 1,
      start: 0,
      end: 9,
    });
  };

  handleProductList(products) {
    // Budget filter
    if (this.state.selectedBudget !== "all") {
      products.items = products.items.filter((val) => {
        if (this.state.selectedBudget === "200000") {
          return val.price <= this.state.selectedBudget;
        } else if (this.state.selectedBudget === "200000-500000") {
          return val.price >= "200000" && val.price <= "500000";
        } else if (this.state.selectedBudget === "500000 - 1000000") {
          return val.price >= "500000" && val.price <= "1000000";
        } else if (this.state.selectedBudget === "1000000") {
          return val.price >= "1000000";
        }
        return val;
      });
    }

    //Year Filter
    if (this.state.selectedYear !== "all") {
      products.items = products.items.filter(
        (val) =>
          val.year >= this.state.selectedYear.split("-")[0] &&
          val.year <= this.state.selectedYear.split("-")[1]
      );
    }

    //Fuel Filter
    if (this.state.selectedFuel.length !== 0) {
      products.items = products.items.filter((val) =>
        this.state.selectedFuel.includes(val.fuelType)
      );
    }

    //Transmission Filter
    if (this.state.selectedTransmission.length !== 0) {
      products.items = products.items.filter((val) =>
        this.state.selectedTransmission.includes(val.transmission.toLowerCase())
      );
    }

    //Body Type Filter
    if (this.state.selectedBodyType.length !== 0) {
      products.items = products.items.filter((val) =>
        this.state.selectedBodyType.includes(val.bodyType.toLowerCase())
      );
    }

    //Owners Filter
    if (this.state.selectedOwners.length !== 0) {
      products.items = products.items.filter((val) =>
        this.state.selectedOwners.includes(val.ownerNumber)
      );
    }

    return products.items;
  }

  componentDidMount() {
    fetch("https://api-sell24.cars24.team/cars")
      .then((results) => {
        return results.json();
      })
      .then((result) => {
        this.setState({ products: result.data.content });
      })
      .catch((error) => {
        console.error("Error with fetch operation:", error);
      });
  }

  render() {
    const products = this.handleProductList({ items: this.state.products });
    const displayProduct = products.length === 0 ? "block" : "none";
    const filterClass = {
      marginTop: "20px",
      textTransform: "capitalize",
      cursor: "pointer",
    };

    return (
      <Fragment>
        <Banner title="buy"></Banner>
        <section className="product-listing page-section-ptb">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="sorting-options-main">
                  <div className="row">
                    <div
                      className="col-md-3"
                      style={{ borderRight: "1px solid #ccc" }}
                    >
                      <h5>Filter your search</h5>
                      {/* <h6 style={filterClass}>By City</h6>
                      <div className="selected-box">
                        <select onChange={(e) => this.handleCity(e)}></select>
                      </div> */}

                      <ToggleBox
                        title="By Budget"
                        design={filterClass}
                        opened={true}
                      >
                        <div className="selected-box">
                          <select onChange={(e) => this.handleBudget(e)}>
                            <option value="all">All</option>
                            <option value="200000">Under ₹2 Lakhs</option>
                            <option value="200000-500000">₹2 - 5 Lakhs</option>
                            <option value="500000-1000000">
                              ₹5 - 10 Lakhs
                            </option>
                            <option value="1000000">Above ₹10 Lakhs</option>
                          </select>
                        </div>
                      </ToggleBox>

                      <ToggleBox
                        title="By Brand or Modal"
                        design={filterClass}
                        opened={true}
                      >
                        {datas[0].content.map((val) => {
                          var inputId = `make${val.key}`;
                          return (
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                id={inputId}
                                name="make"
                                value={val.key}
                                className="custom-control-input"
                                onChange={this.handleBrand}
                              />
                              <label
                                htmlFor={inputId}
                                className="custom-control-label"
                              >
                                {val.value}
                              </label>
                            </div>
                          );
                        })}
                      </ToggleBox>

                      <ToggleBox
                        title="By Kilometers Driven"
                        design={filterClass}
                        opened={true}
                      >
                        <Slider
                          min={0}
                          max={150000}
                          value={this.state.selectedKM}
                          orientation="horizontal"
                          onChange={this.handleKM}
                          tooltip={true}
                        />
                      </ToggleBox>

                      <ToggleBox
                        title="By Model Year"
                        design={filterClass}
                        opened={true}
                      >
                        <div className="selected-box">
                          <select
                            className="selectpicker"
                            onChange={(e) => this.handleYear(e)}
                          >
                            <option value="all">All</option>
                            <option value="2005-2010">2005-2010</option>
                            <option value="2010-2015">2010-2015</option>
                            <option value="2015-2020">2015-2020</option>
                          </select>
                        </div>
                      </ToggleBox>

                      <ToggleBox title="By Fuel Type" design={filterClass}>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            id="fuel_petrol"
                            name="fuel"
                            value="Petrol"
                            className="custom-control-input"
                            onChange={this.handleFuel}
                          />
                          <label
                            htmlFor="fuel_petrol"
                            className="custom-control-label"
                          >
                            Petrol
                          </label>
                        </div>

                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            id="fuel_disel"
                            name="fuel"
                            value="Diesel"
                            className="custom-control-input"
                            onChange={this.handleFuel}
                          />
                          <label
                            htmlFor="fuel_disel"
                            className="custom-control-label"
                          >
                            Diesel
                          </label>
                        </div>

                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            id="fuel_cng"
                            name="fuel"
                            value="CNG"
                            className="custom-control-input"
                            onChange={this.handleFuel}
                          />
                          <label
                            htmlFor="fuel_cng"
                            className="custom-control-label"
                          >
                            CNG
                          </label>
                        </div>

                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            id="fuel_lpg"
                            name="fuel"
                            value="LPG"
                            className="custom-control-input"
                            onChange={this.handleFuel}
                          />
                          <label
                            htmlFor="fuel_lpg"
                            className="custom-control-label"
                          >
                            LPG
                          </label>
                        </div>
                      </ToggleBox>

                      <ToggleBox
                        title="By Transmission Type"
                        design={filterClass}
                      >
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            id="transmission_manual"
                            name="transmission"
                            value="manual"
                            className="custom-control-input"
                            onChange={this.handleTransmission}
                          />
                          <label
                            htmlFor="transmission_manual"
                            className="custom-control-label"
                          >
                            Manual
                          </label>
                        </div>

                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            id="transmission_auto"
                            name="transmission"
                            value="automatic"
                            className="custom-control-input"
                            onChange={this.handleTransmission}
                          />
                          <label
                            htmlFor="transmission_auto"
                            className="custom-control-label"
                          >
                            Automatic
                          </label>
                        </div>
                      </ToggleBox>

                      <ToggleBox title="By Body Type" design={filterClass}>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            id="body_type_hatchback"
                            name="body_type"
                            value="hatchback"
                            className="custom-control-input"
                            onChange={this.handleBodyType}
                          />
                          <label
                            htmlFor="body_type_hatchback"
                            className="custom-control-label"
                          >
                            Hatchback
                          </label>
                        </div>

                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            id="body_type_sedan"
                            name="body_type"
                            value="sedan"
                            className="custom-control-input"
                            onChange={this.handleBodyType}
                          />
                          <label
                            htmlFor="body_type_sedan"
                            className="custom-control-label"
                          >
                            Sedan
                          </label>
                        </div>

                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            id="body_type_suv"
                            name="body_type"
                            value="suv"
                            className="custom-control-input"
                            onChange={this.handleBodyType}
                          />
                          <label
                            htmlFor="body_type_suv"
                            className="custom-control-label"
                          >
                            SUV
                          </label>
                        </div>

                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            id="body_type_luxuary_sedan"
                            name="body_type"
                            value="luxury sedan"
                            className="custom-control-input"
                            onChange={this.handleBodyType}
                          />
                          <label
                            htmlFor="body_type_luxuary_sedan"
                            className="custom-control-label"
                          >
                            Luxury Sedan
                          </label>
                        </div>

                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            id="body_type_luxury_suv"
                            name="body_type"
                            value="luxury suv"
                            className="custom-control-input"
                            onChange={this.handleBodyType}
                          />
                          <label
                            htmlFor="body_type_luxury_suv"
                            className="custom-control-label"
                          >
                            Luxury SUV
                          </label>
                        </div>
                      </ToggleBox>

                      <ToggleBox
                        title="By Number of Owners"
                        design={filterClass}
                      >
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            id="1"
                            name="owner"
                            value="1"
                            className="custom-control-input"
                            onChange={this.handleOwners}
                          />
                          <label htmlFor="1" className="custom-control-label">
                            1st Owner
                          </label>
                        </div>

                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            id="2"
                            name="owner"
                            value="2"
                            className="custom-control-input"
                            onChange={this.handleOwners}
                          />
                          <label htmlFor="2" className="custom-control-label">
                            2nd Owner
                          </label>
                        </div>

                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            id="3"
                            name="owner"
                            value="3"
                            className="custom-control-input"
                            onChange={this.handleOwners}
                          />
                          <label htmlFor="3" className="custom-control-label">
                            3rd Owner
                          </label>
                        </div>

                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            id="4"
                            name="owner"
                            value="4"
                            className="custom-control-input"
                            onChange={this.handleOwners}
                          />
                          <label htmlFor="4" className="custom-control-label">
                            4th Owner & above
                          </label>
                        </div>
                      </ToggleBox>

                      {/* <ToggleBox
                        title="By Registration Location"
                        design={filterClass}
                      >
                        <div className="selected-box">
                          <select
                            className="selectpicker"
                            onChange={(e) => this.handleRegisterLocation(e)}
                          >
                            <option value={"null"}>Model</option>
                          </select>
                        </div>
                      </ToggleBox> */}
                    </div>

                    <div className="col-md-9">
                      <div className="row">
                        <h6
                          style={{
                            padding: "15px",
                            textTransform: "capitalize",
                          }}
                        >
                          {products.length} Used Cars in
                        </h6>
                      </div>
                      <div className="row">
                        {products
                          .slice(this.state.start, this.state.end)
                          .map((val) => {
                            return <ProductList Product={val}></ProductList>;
                          })}
                      </div>
                      <div className="car-item text-center">
                        <h1
                          style={{
                            display: displayProduct,
                            fontSize: "16px",
                            textAlign: "center",
                          }}
                          className="text-center"
                        >
                          No Records Found!..
                        </h1>
                      </div>

                      <div className="pagination-nav d-flex justify-content-center">
                        <Pagination
                          activePage={this.state.activePage}
                          itemsCountPerPage={9}
                          totalItemsCount={products.length}
                          onChange={this.handlePageChange.bind(this)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Buy;
