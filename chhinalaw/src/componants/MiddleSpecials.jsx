import React from "react";
import MidSpecialItem from "./MidSpecialItem";
import realestate from "./../Images/realestate.jpg";
import civil from "./../Images/civil.jpg";
import construct from "./../Images/construct.jpg";
import commerce from "./../Images/commerce.jpg";

class MidSpecial extends React.Component {
  render() {
    return (
      <div className="row py-5">
        <div className="col-lg-3">
          <MidSpecialItem iSrc={realestate} content="Real Estate Law" />
        </div>
        <div className="col-lg-3">
          <MidSpecialItem iSrc={civil} content="Civil Litigation" />
        </div>
        <div className="col-lg-3">
          <MidSpecialItem iSrc={construct} content="Construction Litigation" />
        </div>
        <div className="col-lg-3">
          <MidSpecialItem iSrc={commerce} content="Commercial Law" />
        </div>
      </div>
    );
  }
}

export default MidSpecial;
