import React, { Component } from "react";
import { TopBar, Navigation } from "./index";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    const headerClass = this.props.headerClass;
    return (
      <header id="header" className={headerClass}>
        <TopBar></TopBar>
        <Navigation></Navigation>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    headerClass: state.headerClass.class
  };
}

export default connect(
  mapStateToProps,
  null
)(Header);
