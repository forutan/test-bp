import React, { Component } from "react";
import "./list-item.css";
class ListItem extends Component {
  state = {};
  render() {
    return (
      <li
        onClick={this.props.onClick}
        className="list-item border-bottom list-unstyled text-center  py-1 mt-1"
      >
        <button className="btn btn-link">{this.props.children}</button>
      </li>
    );
  }
}

export default ListItem;
