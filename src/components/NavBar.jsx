import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="shadow navbar navbar-light bg-light text-center d-flex justify-content-center mb-3">
        <a className="navbar-brand" href="/">
          {this.props.title}
        </a>
      </nav>
    );
  }
}

export default NavBar;
