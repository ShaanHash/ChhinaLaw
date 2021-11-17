import React, { Component } from "react";
import BigImage from "./BigImage";
import Header from "./Header";
import MiddleBio from "./MiddleBio";
import Special from "./Specialties";
import MidSpecial from "./MiddleSpecials";
import ContactBar from "./ContactBar";
import Footer from "./Footer";

class MainContainer extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <BigImage />
        <MiddleBio id="#about" />
        <Special />
        <MidSpecial />
        <ContactBar />
        <Footer />
      </div>
    );
  }
}

export default MainContainer;
