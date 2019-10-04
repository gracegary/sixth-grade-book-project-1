import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div
            className="navbar-brand"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Link to="/" className="navbar-item" title="Logo">
              <img
                src={logo}
                alt="The Dead Boyfriend"
                style={{ height: "40px" }}
              />{" "}
            </Link>
            <div style={{ color: "white" }}>by R.L. Stine</div>
            <div
              style={{
                fontWeight: "bold",
                marginLeft: "2rem",
                color: "#5e3d58"
              }}
            >
              A Grace Gary Project
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div
              style={{ marginBottom: "1rem" }}
              className="navbar-start has-text-centered"
            >
              <Link className="navbar-item" to="/">
                Main Page
              </Link>
              <Link className="navbar-item" to="/blog">
                Caitlin's Blog
              </Link>
              <Link className="navbar-item" to="/quiz">
                Take the Dead Boyfriend Quiz!
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
