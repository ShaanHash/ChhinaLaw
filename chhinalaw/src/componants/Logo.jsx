import React from "react";
import logo from "./../Images/logo-cropped.png";

class Logo extends React.Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <img src={logo} className="my-2" height="56" width="100" alt=""></img>
      </div>
    );
  }
}

export default Logo;
