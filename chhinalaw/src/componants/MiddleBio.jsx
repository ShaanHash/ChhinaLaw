import React from "react";

class MiddleBio extends React.Component {
  render() {
    return (
      <div className="row d-flex justify-content-center" id={this.props.id}>
        <div className="col-xl-6 d-flex justify-content-center">
          <img
            className="mw-100 m-5 border border-5 shadow"
            height="200"
            width="350"
            src="https://via.placeholder.com/350x200"
            alt=""
          ></img>
        </div>
        <div className="col-xl-6 d-flex align-items-start justify-content-center flex-column px-5">
          <div className="display-5 my-3 sp-text">
            Welcome to Chhina Law P.C
          </div>
          <p className="fs-6 text-wrap pe-5">
            Samir Chhina is the principal at Chhina Law P.C. where she practices
            civil litigation with a focus on construction law, estates related
            matters, bankruptcy law and real estate disputes. Samir's practice
            also includes residential and commercial real estate and related
            matters.
          </p>
        </div>
      </div>
    );
  }
}

export default MiddleBio;
