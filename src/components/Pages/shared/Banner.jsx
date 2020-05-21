import React from "react";

class Banner extends React.Component {
  render() {
    const title = this.props.title;
    const display = {
      display: this.props.title.includes("Not Found") ? "none" : "block",
    };
    let bannerClass = `inner-intro bg-overlay-black-70 ${this.props.class}`;
    return (
      <section className={bannerClass}>
        <div className="container">
          <div className="row text-center intro-title">
            <div className="col-md-6 text-md-left d-inline-block">
              <h1 className="text-white">{title}</h1>
            </div>
            <div className="col-md-6 text-md-right float-right" style={display}>
              <ul className="page-breadcrumb"></ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;
