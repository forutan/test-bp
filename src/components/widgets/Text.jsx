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
        <div className="form-group mt-2" onClick={() => console.log("object")}>
          <label>{this.props.label} :</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder={this.props.placeholder}
          />
        </div>
      </div>
    );
  }
}

export default Text;
