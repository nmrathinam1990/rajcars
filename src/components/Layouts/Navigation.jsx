import React from "react";
import Logo from "./logo-dark.png";

import { changeMenu } from "../../redux/actions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Navigation extends React.Component {
  handleActive = (val) => {
    localStorage.setItem("selectedMenu", val);
    this.props.changeMenu(val);
  };
  render() {
    const activeMenu = this.props.activeMenu;
    return (
      <div className="menu">
        <nav id="menu" className="mega-menu">
          <section className="menu-list-items">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <ul className="menu-logo">
                    <li>
                      <a href="/">
                        <img id="logo_dark_img" src={Logo} alt="logo" />
                      </a>
                    </li>
                  </ul>
                  <ul className="menu-links">
                    <li className={activeMenu === "home" ? "active" : ""}>
                      <Link
                        exact="true"
                        to="/"
                        onClick={() => this.handleActive("home")}
                      >
                        Home
                      </Link>
                    </li>
                    <li className={activeMenu === "buy" ? "active" : ""}>
                      <Link
                        exact="true"
                        to="/buy"
                        onClick={() => this.handleActive("buy")}
                      >
                        Buy
                      </Link>
                    </li>
                    <li className={activeMenu === "sell" ? "active" : ""}>
                      <Link
                        exact="true"
                        to="/sell"
                        onClick={() => this.handleActive("sell")}
                      >
                        Sell
                      </Link>
                    </li>
                    <li className={activeMenu === "exchange" ? "active" : ""}>
                      <Link
                        exact="true"
                        to="/exchange"
                        onClick={() => this.handleActive("exchange")}
                      >
                        Exchange
                      </Link>
                    </li>
                    <li className={activeMenu === "about" ? "active" : ""}>
                      <Link
                        exact="true"
                        to="/about"
                        onClick={() => this.handleActive("about")}
                      >
                        About Us
                      </Link>
                    </li>
                    <li className={activeMenu === "services" ? "active" : ""}>
                      <Link
                        exact="true"
                        to="/services"
                        onClick={() => this.handleActive("services")}
                      >
                        Our Services
                      </Link>
                    </li>
                    <li className={activeMenu === "contact" ? "active" : ""}>
                      <Link
                        exact="true"
                        to="/contact"
                        onClick={() => this.handleActive("contact")}
                      >
                        Contact
                      </Link>
                    </li>
                    {/* <li>
                      <Link exact="true" to="/admin-login">
                        Admin Login
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeMenu: state.activeMenu.menu,
  };
}

const mapDispatchToProps = {
  changeMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
