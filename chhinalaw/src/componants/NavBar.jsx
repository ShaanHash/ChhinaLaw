import React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid d-flex justify-content-end px-3">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="index.html">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="index.html">
                  Services
                </a>
              </li>
              <li className="nav-item pe-2">
                <a className="nav-link active" href="index.html">
                  Contact
                </a>
              </li>
              <li className="nav-item d-flex align-items-center">
                <div className="border-start border-secondary ps-3">
                  647-646-400
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
