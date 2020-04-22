import React, { Fragment } from "react";
import AdminNavigation from "./Navigation";

class AdminDashboard extends React.Component {
  render() {
    return (
      <Fragment>
        <AdminNavigation></AdminNavigation>
        <h1>Form Goes Here!...</h1>
      </Fragment>
    );
  }
}

export default AdminDashboard;
