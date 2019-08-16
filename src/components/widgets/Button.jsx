import React, { Component } from "react";

class Text extends Component {
  state = {};
  render() {
    return (
      <div className="wrapper border p-2 mt-2">
        <button
          onClick={this.props.onDelete}
          href="#"
          className="btn btn-link text-danger"
          style={{ textDecoration: "none" }}
        >
          X
        </button>
        <button
          onClick={this.props.onSelect}
          href="#"
          className="btn btn-link text-primary"
          style={{ textDecoration: "none" }}
        >
          select
        </button>

        <button
          type={this.props.buttonType || "submit"}
          className="btn btn-primary mt-2 col"
        >
          {this.props.title}
        </button>
      </div>
    );
  }
}

export default Text;
