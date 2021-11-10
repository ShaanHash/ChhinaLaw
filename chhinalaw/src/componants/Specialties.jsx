import React from "react";
import SpecialItem from "./Special";
import people from "./../Images/people.png";
import home from "./../Images/home.png";
import court from "./../Images/courts.png";
import crane from "./../Images/crane.png";
import office from "./../Images/office-building.png";
import scale from "./../Images/balance.png";

class Special extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="row">
            <h5 className="d-flex justify-content-center display-6">
              Specializations
            </h5>
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-4 d-flex align-items-center flex-column">
              <SpecialItem title="Civil Litigation" iSrc={people} />
              <SpecialItem title="Estate Law" iSrc={home} />
            </div>
            <div className="col-4 d-flex align-items-center flex-column">
              <SpecialItem title="Corporate & Business Law" iSrc={court} />
              <SpecialItem title="Construction Law" iSrc={crane} />
            </div>
            <div className="col-4 d-flex align-items-center flex-column">
              <SpecialItem title="Real Estate Law" iSrc={office} />
              <SpecialItem title="Commercial Law" iSrc={scale} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Special;
