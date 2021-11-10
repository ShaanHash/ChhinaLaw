import React from "react";

class Logo extends React.Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <img
          src="https://via.placeholder.com/50"
          className="my-2"
          height="50"
          width="50"
          alt=""
        ></img>
        <div className="m-2 display-5 fs-3 text-wrap d-flex align-items-top">
          Chhina Law
        </div>
      </div>
    );
  }
}

export default Logo;
