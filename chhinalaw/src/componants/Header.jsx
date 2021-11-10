import React, { Component } from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";

class Header extends Component {
  render() {
    return (
      <div className="row">
        <div className="col d-flex justify-content-center">
          <Logo />
        </div>
        <div className="col d-flex align-content-center justify-content-end">
          <NavBar />
        </div>
      </div>
    );
  }
}

export default Header;
