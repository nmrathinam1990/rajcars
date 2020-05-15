import React, { Fragment, useState } from "react";
import Banner from "./shared/Banner.jsx";
import Pagination from "react-js-pagination";
import { datas, brand } from "../../constants/data";
import { Link } from "react-router-dom";
import CarDetails from "../Pages/CarDetails.jsx";

function ModelOption(Brand) {
  const { selectedBrand } = Brand;
  const opt = brand.map((val) => {
    if (val.value === selectedBrand) {
      return val.model.map((model) => (
        <option style={{ textTransform: "lowercase" }} value={model.value}>
          {model.option}
        </option>
      ));
    }
    return null;
  });
  return opt;
}

function ProductList(ProductVal) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { Product } = ProductVal;

  return (
    <Fragment>
      <CarDetails
        show={show}
        close={handleClose}
        carDetails={Product}
      ></CarDetails>

      <div className="col-lg-4" key={Product._id}>
        <div className="car-item gray-bg text-center">
          <div className="car-image">
            <img className="img-fluid" src={Product.mainImage} alt="" />
            <div className="car-overlay-banner">
              <ul>
                <li>
                  <Link exact="true" onClick={handleShow}>
                    <i className="fa fa-link"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="car-list">
            <ul className="list-inline">
              <li>YEAR:{Product.year}</li>
              <li>OWNERS: {Product.owners}</li>
              <li>KM: {Product.km}</li>
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
      selectedYear: null,
      selectedFuel: null,
      selectedModel: null,
      products: [],
    };
  }

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

  handleBrand(e) {
    const brand = e.target.value !== "null" ? e.target.value : null;
    this.setState({
      selectedBrand: brand,
    });
  }

  handleModel(e) {
    const model = e.target.value !== "null" ? e.target.value : null;
    this.setState({
      selectedModel: model,
    });
  }

  handleYear(e) {
    const year = e.target.value !== "null" ? e.target.value : null;
    this.setState({
      selectedYear: year,
    });
  }

  handleFuel(e) {
    const fuel = e.target.value !== "null" ? e.target.value : null;
    this.setState({
      selectedFuel: fuel,
    });
  }

  handleProductList(products) {
    // Brand filter
    if (this.state.selectedBrand !== null) {
      products.items = products.items.filter(
        (val) => val.brand === this.state.selectedBrand
      );
    }

    // Model filter
    if (this.state.selectedModel !== null) {
      products.items = products.items.filter(
        (val) => val.model === this.state.selectedModel
      );
    }

    //Year Filter
    if (this.state.selectedYear !== null) {
      products.items = products.items.filter(
        (val) =>
          val.year >= this.state.selectedYear.split("-")[0] &&
          val.year <= this.state.selectedYear.split("-")[1]
      );
    }

    //Fuel Filter
    if (this.state.selectedFuel !== null) {
      products.items = products.items.filter(
        (val) => val.fuel === this.state.selectedFuel
      );
    }

    return products.items;
  }

  componentDidMount() {
    fetch("http://rajcarschennai.in/api/cars.json")
      .then((results) => {
        return results.json();
      })
      .then((result) => {
        this.setState({ products: result.data });
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
      textTransform: "capitalize"
    }

    return (
      <Fragment>
        <Banner title="buy"></Banner>
        <section className="product-listing page-section-ptb">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="sorting-options-main">
                  <div className="row">
                    <div className="col-md-3">
                      <h4>Filter your search</h4>
                      <h6 style={filterClass}>By City</h6>
                      <div className="selected-box">
                        <input type="text" name="city" />
                      </div>

                      <h6 style={filterClass}>By Budget</h6>
                      <div className="selected-box">
                        <select
                          className="selectpicker"
                          onChange={(e) => this.handleModel(e)}
                          multiple="multiple"
                        >
                          <option value="null">Under ₹2 Lakhs</option>
                          <option value="2005-2010">₹2 - 5 Lakhs</option>
                          <option value="2010-2015">₹5 - 10 Lakhs</option>
                          <option value="2015-2020">Above ₹10 Lakhs</option>
                        </select>
                      </div>

                      <h6 style={filterClass}>By Brand or Modal</h6>
                      <div className="selected-box">
                        <select
                          className="selectpicker"
                          onChange={(e) => this.handleYear(e)}
                        >
                          <option value="null">Year</option>
                          <option value="2005-2010">2005-2010</option>
                          <option value="2010-2015">2010-2015</option>
                          <option value="2015-2020">2015-2020</option>
                        </select>
                      </div>

                      <h6 style={filterClass}>By Kilometers Driven</h6>
                      <div className="selected-box">
                        <select
                          className="selectpicker"
                          onChange={(e) => this.handleFuel(e)}
                        >
                          <option value="null">Fuel</option>
                          <option value="diesel">Diesel</option>
                          <option value="petrol">Petrol</option>
                          <option value="lPG">LPG</option>
                        </select>
                      </div>

                      <h6 style={filterClass}>By Model Year</h6>
                      <div className="selected-box">
                        <select
                          className="selectpicker"
                          onChange={(e) => this.handleBrand(e)}
                        >
                          <option value={"null"}>Brand</option>
                          {brand.map((val) => (
                            <option value={val.value} key={`${val.value}_abc`}>
                              {val.option}
                            </option>
                          ))}
                        </select>
                      </div>

                      <h6 style={filterClass}>By Fuel Type</h6>
                      <div className="selected-box">
                        <select
                          className="selectpicker"
                          onChange={(e) => this.handleModel(e)}
                        >
                          <option value={"null"}>Model</option>
                          <ModelOption
                            selectedBrand={this.state.selectedBrand}
                          ></ModelOption>
                        </select>
                      </div>

                      <h6 style={filterClass}>By Transmission Type</h6>
                      <div className="selected-box">
                        <select
                          className="selectpicker"
                          onChange={(e) => this.handleYear(e)}
                        >
                          <option value="null">Year</option>
                          <option value="2005-2010">2005-2010</option>
                          <option value="2010-2015">2010-2015</option>
                          <option value="2015-2020">2015-2020</option>
                        </select>
                      </div>

                      <h6 style={filterClass}>By Body Type</h6>
                      <div className="selected-box">
                        <select
                          className="selectpicker"
                          onChange={(e) => this.handleFuel(e)}
                        >
                          <option value="null">Fuel</option>
                          <option value="diesel">Diesel</option>
                          <option value="petrol">Petrol</option>
                          <option value="lPG">LPG</option>
                        </select>
                      </div>

                      <h6 style={filterClass}>By Number of Owners</h6>
                      <div className="selected-box">
                        <select
                          className="selectpicker"
                          onChange={(e) => this.handleBrand(e)}
                        >
                          <option value={"null"}>Brand</option>
                          {brand.map((val) => (
                            <option value={val.value} key={`${val.value}_abc`}>
                              {val.option}
                            </option>
                          ))}
                        </select>
                      </div>

                      <h6 style={filterClass}>By Registration Location</h6>
                      <div className="selected-box">
                        <select
                          className="selectpicker"
                          onChange={(e) => this.handleModel(e)}
                        >
                          <option value={"null"}>Model</option>
                          <ModelOption
                            selectedBrand={this.state.selectedBrand}
                          ></ModelOption>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-9">
                      {products
                        .slice(this.state.start, this.state.end)
                        .map((val) => {
                          return <ProductList Product={val}></ProductList>;
                        })}
                      <div className="car-item gray-bg text-center">
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
                          totalItemsCount={datas.length}
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
