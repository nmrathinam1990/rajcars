import React, { Fragment } from "react";
import Banner from "./shared/Banner.jsx";

class GenericNotFound extends React.Component {
  render() {
    return (
      <Fragment>
        <Banner title="Page Not Found !..."></Banner>
      </Fragment>
    );
  }
}

export default GenericNotFound;
