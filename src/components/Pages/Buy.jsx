import React, { Fragment } from "react";
import Banner from "./shared/Banner.jsx";
import Pagination from "react-js-pagination";
import { datas, brand } from "../../constants/data";

function ModelOption(Brand) {
  const { selectedBrand } = Brand;
  const opt = brand.map(val => {
    if (val.value === selectedBrand) {
      return val.model.map(model => (
        <option value={model.value}>{model.option}</option>
      ));
    }
  });
  return opt;
}

function ProductList(ProductVal) {
  const { Product } = ProductVal;
  return (
    <div className="col-lg-4">
      <div className="car-item gray-bg text-center">
        <div className="car-image">
          <img className="img-fluid" src="images/car/01.jpg" alt="" />
          <div className="car-overlay-banner">
            <ul>
              <li>
                <a href="cardetail.html">
                  <i className="fa fa-link"></i>
                </a>
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
      selectedModel: null
    };
  }

  handlePageChange(pageNumber) {
    if (pageNumber < this.state.activePage) {
      this.setState({
        start: this.state.start - 9,
        end: this.state.end - 9,
        activePage: pageNumber
      });
    } else {
      this.setState({
        start: this.state.start + 9,
        end: this.state.end + 9,
        activePage: pageNumber
      });
    }
  }

  handleBrand(e) {
    const brand = e.target.value !== "null" ? e.target.value : null;
    this.setState({
      selectedBrand: brand
    });
  }

  handleModel(e) {
    const model = e.target.value !== "null" ? e.target.value : null;
    this.setState({
      selectedModel: model
    });
  }

  handleYear(e) {
    const year = e.target.value !== "null" ? e.target.value : null;
    this.setState({
      selectedYear: year
    });
  }

  handleFuel(e) {
    const fuel = e.target.value !== "null" ? e.target.value : null;
    this.setState({
      selectedFuel: fuel
    });
  }

  handleProductList(products) {
    // Brand filter
    if (this.state.selectedBrand !== null) {
      products.items = products.items.filter(
        val => val.brand === this.state.selectedBrand
      );
    }

    // Model filter
    if (this.state.selectedModel !== null) {
      products.items = products.items.filter(
        val => val.model === this.state.selectedModel
      );
    }

    //Year Filter
    if (this.state.selectedYear !== null) {
      products.items = products.items.filter(
        val =>
          val.year >= this.state.selectedYear.split("-")[0] &&
          val.year <= this.state.selectedYear.split("-")[1]
      );
    }

    //Fuel Filter
    if (this.state.selectedFuel !== null) {
      products.items = products.items.filter(
        val => val.fuel === this.state.selectedFuel
      );
    }

    return products.items;
  }

  render() {
    const products = this.handleProductList({ items: datas });
    const displayProduct = products.length === 0 ? "block" : "none";

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
                      <span>Select make</span>
                      <div className="selected-box">
                        <select
                          className="selectpicker"
                          onChange={e => this.handleBrand(e)}
                        >
                          <option value={"null"}>Brand</option>
                          {brand.map(val => (
                            <option value={val.value} key={`${val.value}_abc`}>
                              {val.option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <span>Select model</span>
                      <div className="selected-box">
                        <select
                          className="selectpicker"
                          onChange={e => this.handleModel(e)}
                        >
                          <option value={"null"}>Model</option>
                          <ModelOption
                            selectedBrand={this.state.selectedBrand}
                          ></ModelOption>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <span>Select year</span>
                      <div className="selected-box">
                        <select
                          className="selectpicker"
                          onChange={e => this.handleYear(e)}
                        >
                          <option value="null">Year</option>
                          <option value="2005-2010">2005-2010</option>
                          <option value="2010-2015">2010-2015</option>
                          <option value="2015-2020">2015-2020</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <span>Select Fuel Type</span>
                      <div className="selected-box">
                        <select
                          className="selectpicker"
                          onChange={e => this.handleFuel(e)}
                        >
                          <option value="null">Fuel</option>
                          <option value="diesel">Diesel</option>
                          <option value="petrol">Petrol</option>
                          <option value="lPG">LPG</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    {products
                      .slice(this.state.start, this.state.end)
                      .map(val => {
                        return <ProductList Product={val}></ProductList>;
                      })}
                    <div className="car-item gray-bg text-center">
                      <h1
                        style={{
                          display: displayProduct,
                          fontSize: "16px",
                          textAlign: "center"
                        }}
                        className="text-center"
                      >
                        No Records Found!..
                      </h1>
                    </div>
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
        </section>
      </Fragment>
    );
  }
}

export default Buy;
