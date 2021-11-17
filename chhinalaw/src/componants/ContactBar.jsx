import React from "react";
import bg from "./../Images/cbar.jpg";

class ContactBar extends React.Component {
  render() {
    return (
      <div
        className="row d-flex flex-column align-items-center py-5"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <a
          type="button"
          className="btn btn-dark col-4 rounded-3"
          href="mailto:SamirChhina@gmail.com"
        >
          Contact us Now
        </a>
      </div>
    );
  }
}

export default ContactBar;
