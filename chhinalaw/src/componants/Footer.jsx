import React from "react";
import logo from "./../Images/logo.jpg";

class Footer extends React.Component {
  render() {
    return (
      <div className="row dark-bg py-5">
        <div className="col-xl-3 d-flex flex-column align-items-center justify-content-center my-2">
          <img height="100" width="100" src={logo} alt=""></img>
        </div>
        <div className="col-xl-3 d-flex flex-column align-items-start border-start my-2">
          <div className="text-white sp-text mb-2">About Chhina Law</div>
          <a className="footerLink smallfont" href="#root">
            Home
          </a>
          <a className="footerLink smallfont" href="#about">
            About
          </a>
          <a className="footerLink smallfont" href="index.html">
            Services
          </a>
          <a className="footerLink smallfont" href="index.html">
            Contact
          </a>
        </div>
        <div className="col-xl-3 d-flex flex-column align-items-start border-start my-2">
          <div className="text-white sp-text mb-2">Contact</div>
          <div className="footerLink smallfont" href="index.html">
            Phone: 647 - 646 - 4000
          </div>
          <div className="footerLink smallfont" href="index.html">
            Fax: 416 - 749 - 7600
          </div>
          <div className="footerLink smallfont" href="index.html">
            Email: SamirChhina@gmail.com
          </div>
          <div className="footerLink smallfont text-wrap" href="index.html">
            Address: 307-23 Westmore Drive, Toronto ON M9V 3Y7
          </div>
        </div>
        <div className="col-xl-3 d-flex flex-column align-items-start border-start my-2">
          <div className="text-white sp-text mb-2">Hours</div>
          <div className="footerLink smallfont" href="index.html">
            Monday - Friday: 9am - 9pm EST
          </div>
          <div className="footerLink smallfont" href="index.html">
            Saturday - Sunday: Closed
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
