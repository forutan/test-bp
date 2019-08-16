import React, { Component } from "react";

class CheckBox extends Component {
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
        <div className="form-check mt-2">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label className="form-check-label">
            <small> {this.props.label}</small>
          </label>
        </div>
      </div>
    );
  }
}

export default CheckBox;
