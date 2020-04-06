import React from "react";

class CarSearch extends React.Component {
  render() {
    return (
      <section className="search white-bg">
        <div className="container">
          <div className="search-block">
            <div className="row">
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-4">
                    <span>Select make</span>
                    <div className="selected-box">
                      <div className="select">
                        <select className="selectpicker select-hidden">
                          <option>Brand</option>
                          <option>Maruti Suzuki </option>
                          <option>Hyundai</option>
                          <option>Honda </option>
                          <option>Chevrolet </option>
                          <option>Ford </option>
                          <option>Tata </option>
                          <option>Toyota </option>
                          <option>Renault </option>
                          <option>Nissan </option>
                          <option>Mahindra </option>
                        </select>
                        <div className="select-styled">Brand</div>
                        <ul className="select-options">
                          <li rel="Brand">Brand</li>
                          <li rel="Maruti Suzuki">Maruti Suzuki </li>
                          <li rel="Hyundai">Hyundai</li>
                          <li rel="Honda">Honda </li>
                          <li rel="Chevrolet">Chevrolet </li>
                          <li rel="Ford">Ford </li>
                          <li rel="Tata">Tata </li>
                          <li rel="Toyota">Toyota </li>
                          <li rel="Renault">Renault </li>
                          <li rel="Nissan">Nissan </li>
                          <li rel="Mahindra">Mahindra </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <span>Select model</span>
                    <div className="selected-box">
                      <div className="select">
                        <select className="selectpicker select-hidden">
                          <option>Model</option>
                          <option>Maruti 800</option>
                          <option>Alto</option>
                          <option>Alto 800</option>
                          <option>Alto K10</option>
                          <option>A Star</option>
                          <option>Eeco</option>
                          <option>Celerio</option>
                          <option>Ignis</option>
                          <option>Zen Estilo</option>
                          <option>Wagonr</option>
                          <option>Swift</option>
                          <option>Swift Dzire</option>
                          <option>Sx4</option>
                          <option>Ciaz</option>
                          <option>Baleno</option>
                          <option>S Cross</option>
                          <option>Vitara Breeza</option>
                          <option>Eon</option>
                          <option>Santro Xing</option>
                          <option>I10</option>
                          <option>Grand I10</option>
                          <option>I20</option>
                          <option>Elite I20</option>
                          <option>I20 Active</option>
                          <option>Accent</option>
                          <option>Xcent</option>
                          <option>Verna</option>
                          <option>Fluidic</option>
                          <option>Getz</option>
                          <option>Elantra</option>
                          <option>Creta</option>
                          <option>Tucson</option>
                          <option>Celerio</option>
                          <option>City</option>
                          <option>New City</option>
                          <option>Civic</option>
                          <option>Jazz</option>
                          <option>Brio</option>
                          <option>Mobilio</option>
                          <option>Brv</option>
                          <option>Wrv</option>
                          <option>Crv</option>
                          <option>Spark</option>
                          <option>Beat</option>
                          <option>Enjoy</option>
                          <option>Sail</option>
                          <option>Uva</option>
                        </select>
                        <div className="select-styled">Model</div>
                        <ul className="select-options">
                          <li rel="Model">Model</li>
                          <li rel="Maruti 800">Maruti 800</li>
                          <li rel="Alto">Alto</li>
                          <li rel="Alto 800">Alto 800</li>
                          <li rel="Alto K10">Alto K10</li>
                          <li rel="A Star">A Star</li>
                          <li rel="Eeco">Eeco</li>
                          <li rel="Celerio">Celerio</li>
                          <li rel="Ignis">Ignis</li>
                          <li rel="Zen Estilo">Zen Estilo</li>
                          <li rel="Wagonr">Wagonr</li>
                          <li rel="Swift">Swift</li>
                          <li rel="Swift Dzire">Swift Dzire</li>
                          <li rel="Sx4">Sx4</li>
                          <li rel="Ciaz">Ciaz</li>
                          <li rel="Baleno">Baleno</li>
                          <li rel="S Cross">S Cross</li>
                          <li rel="Vitara Breeza">Vitara Breeza</li>
                          <li rel="Eon">Eon</li>
                          <li rel="Santro Xing">Santro Xing</li>
                          <li rel="I10">I10</li>
                          <li rel="Grand I10">Grand I10</li>
                          <li rel="I20">I20</li>
                          <li rel="Elite I20">Elite I20</li>
                          <li rel="I20 Active">I20 Active</li>
                          <li rel="Accent">Accent</li>
                          <li rel="Xcent">Xcent</li>
                          <li rel="Verna">Verna</li>
                          <li rel="Fluidic">Fluidic</li>
                          <li rel="Getz">Getz</li>
                          <li rel="Elantra">Elantra</li>
                          <li rel="Creta">Creta</li>
                          <li rel="Tucson">Tucson</li>
                          <li rel="Celerio">Celerio</li>
                          <li rel="City">City</li>
                          <li rel="New City">New City</li>
                          <li rel="Civic">Civic</li>
                          <li rel="Jazz">Jazz</li>
                          <li rel="Brio">Brio</li>
                          <li rel="Mobilio">Mobilio</li>
                          <li rel="Brv">Brv</li>
                          <li rel="Wrv">Wrv</li>
                          <li rel="Crv">Crv</li>
                          <li rel="Spark">Spark</li>
                          <li rel="Beat">Beat</li>
                          <li rel="Enjoy">Enjoy</li>
                          <li rel="Sail">Sail</li>
                          <li rel="Uva">Uva</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <span>Select year</span>
                    <div className="selected-box">
                      <div className="select">
                        <select className="selectpicker select-hidden">
                          <option>Year</option>
                          <option>2005-2010</option>
                          <option>2010-2015</option>
                          <option>2015-2020</option>
                        </select>
                        <div className="select-styled">Year</div>
                        <ul className="select-options">
                          <li rel="Year">Year</li>
                          <li rel="2005-2010">2005-2010</li>
                          <li rel="2010-2015">2010-2015</li>
                          <li rel="2015-2020">2015-2020</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <span>Select Fuel Type</span>
                    <div className="selected-box">
                      <div className="select">
                        <select className="selectpicker select-hidden">
                          <option>Fuel</option>
                          <option>Diesel</option>
                          <option>Petrol</option>
                          <option>LPG</option>
                        </select>
                        <div className="select-styled">Fuel</div>
                        <ul className="select-options">
                          <li rel="Fuel">Fuel</li>
                          <li rel="Diesel">Diesel</li>
                          <li rel="Petrol">Petrol</li>
                          <li rel="LPG">LPG</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4"></div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="price-slide">
                  <div className="price">
                    <label>Price Range</label>
                    <input
                      type="text"
                      id="amount"
                      className="amount"
                      value="₹50000 - ₹500000"
                    />
                    <div
                      id="slider-range"
                      className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                    >
                      <div
                        className="ui-slider-range ui-widget-header ui-corner-all"
                        style={{left: '10%', width: '50%'}}
                      ></div>
                      <span
                        className="ui-slider-handle ui-state-default ui-corner-all"
                        tabIndex="0"
                        style={{left: '10%'}}
                      ></span>
                      <span
                        className="ui-slider-handle ui-state-default ui-corner-all"
                        tabIndex="0"
                        style={{left: '10%'}}
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CarSearch;
