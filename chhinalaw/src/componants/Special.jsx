import React from "react";

class SpecialItem extends React.Component {
  render() {
    return (
      <div className="d-flex flex-column align-items-center my-4">
        <img
          height="50"
          width="50"
          className="img-fluid"
          src={this.props.iSrc}
          alt=""
        ></img>
        <div className="text-wrap">{this.props.title}</div>
      </div>
    );
  }
}

export default SpecialItem;
