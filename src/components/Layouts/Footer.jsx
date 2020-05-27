import React, { Fragment } from "react";
import { FooterBanner } from "./index";

import { changeMenu } from "../../redux/actions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Footer extends React.Component {
  handleActive = (val) => {
    localStorage.setItem("selectedMenu", val);
    this.props.changeMenu(val);
  };
  render() {
    return (
      <Fragment>
        <FooterBanner></FooterBanner>
        <footer className="footer bg-3 bg-overlay-black-90">
          <div className="copyright">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="text-lg-left text-center">
                    <p style={{ paddingTop: "12px", color: "#909090" }}>
                      © Copyright 2020 Raj Cars Chennai
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <ul
                    className="list-inline text-lg-right text-center"
                    style={{ paddingTop: "12px", color: "#909090" }}
                  >
                    <li>
                      <a href="/">privacy policy </a> |
                    </li>
                    <li>
                      <a href="/">terms and conditions </a> |
                    </li>
                    <li>
                      <Link
                        exact="true"
                        to="/contact"
                        onClick={() => this.handleActive("contact")}
                      >
                        contact us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
