import React from "react";
import "./adminLogin.css";
import Logo from "../../Layouts/logo-dark.png";

class AdminLogin extends React.Component {
  render() {
    const imgStyle = {
      width: "100px",
      height: "100px"
    };
    return (
      <div className="login-box">
        <div className="login-logo">
          <a href="https://www.rajcarschennai.in">
            <img src={Logo} style={imgStyle} alt="Raj Cars Chennai" />
          </a>
        </div>
        <div className="login-box-body">
          <p className="login-box-msg">Sign in to start your session</p>
          <form
            action="http://myadcubes.com/index.php/user/auth/login"
            method="post"
            accept-charset="utf-8"
          >
            <div className="form-group has-feedback">
              <input
                type="text"
                name="login"
                value=""
                placeholder="Username"
                className="form-control"
                id="login"
                maxlength="80"
                size="30"
              />{" "}
              <span className="glyphicon glyphicon-user form-control-feedback"></span>
              <span>
                <font color="red"></font>
              </span>
            </div>
            <div className="form-group has-feedback">
              <input
                type="password"
                name="password"
                value=""
                placeholder="Password"
                className="form-control"
                id="password"
                size="30"
              />{" "}
              <span className="glyphicon glyphicon-lock form-control-feedback"></span>
              <span>
                <font color="red"></font>
              </span>
            </div>
            <div className="row">
              <div className="col-12 text-center">
                <input
                  type="submit"
                  name="submit"
                  value="Sign In"
                  id="submit"
                  className="btn btn-primary btn-block btn-flat"
                />
              </div>
            </div>
          </form>

          <a href="http://myadcubes.com/user/auth/forgot_password">
            I forgot my password
          </a>
          <br />
          <a
            href="http://myadcubes.com/user/auth/register/"
            className="text-center"
          >
            Register a new membership
          </a>
        </div>
      </div>
    );
  }
}

export default AdminLogin;
