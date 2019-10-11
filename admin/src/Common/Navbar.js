import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
          <nav className="navbar">
            <div className="container-fluid">
              <div className="navbar-holder d-flex align-items-center justify-content-between">
                <div className="navbar-header">
                  <a id="toggle-btn" href="" className="menu-btn">
                  <Link to={{ pathname: "/" }}> 
                    <i className="icon-bars"> </i>
                    </Link>
                  </a>
                  <Link to={{ pathname: "/" }}> 
                    <div className="brand-text d-none d-md-inline-block">
                      <span>
                        MINISHOP
                      </span>
                      <strong className="text-primary">Dashboard</strong>
                    </div>
                    </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
