import React, { Component } from "react";
import BigImage from "./BigImage";
import Header from "./Header";
import MiddleBio from "./MiddleBio";
import Special from "./Specialties";

class MainContainer extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <BigImage />
        <MiddleBio />
        <Special />
      </div>
    );
  }
}

export default MainContainer;
