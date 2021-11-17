import React from "react";

class MidSpecialItem extends React.Component {
  render() {
    return (
      <div className="d-flex flex-column align-items-center">
        <img
          className="img-fluid border border-secondary border-1"
          height="300"
          width="200"
          src={this.props.iSrc}
          alt=""
        ></img>
        <div className="my-4 sp-text">{this.props.content}</div>
      </div>
    );
  }
}

export default MidSpecialItem;
