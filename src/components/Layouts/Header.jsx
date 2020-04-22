import React, { Component } from "react";
import { TopBar, Navigation } from "./index";

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

export default Header;
