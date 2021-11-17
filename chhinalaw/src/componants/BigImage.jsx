import React from "react";
import toronto from "./../Images/city1-cropped.jpg";

class BigImage extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col px-0">
          <img
            height="1080"
            width="1920"
            className="img-fluid"
            src={toronto}
            alt=""
          ></img>
        </div>
      </div>
    );
  }
}

export default BigImage;
