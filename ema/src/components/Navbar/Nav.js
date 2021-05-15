import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <React.Fragment>
      <nav>
        <div className="container">
          <span className="logo">
            <strong>EVENT MANAGER</strong>{" "}
          </span>
          <ul>
            <li className="nav">
              <a href="http://mydy.dypatil.edu/">Contact us</a>
            </li>
            <li className="nav">
              <Link to="/about">About</Link>
            </li>
            <li className="nav">
              <a href="https://github.com/HekarKET/EVM">Source code</a>
            </li>
            <li className="nav">
              <a href="http://localhost:4000/aac112cb-441c-44a0-97f1-e2b067a4f355">
                Stream
              </a>
            </li>
          </ul>
          <i className="fa fa-bars" aria-hidden="true" id="nav-bars"></i>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
