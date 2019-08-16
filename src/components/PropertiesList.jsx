import React, { Component } from "react";

class PropertiesList extends Component {
  getSelectedItem() {
    if (this.props.item.length !== 0) {
      return this.props.item[0];
    } else {
      return { type: "non selected" };
    }
  }

  getPropertiesForm() {
    let item = this.getSelectedItem();
    let selectedProps = [];
    if (!item) return [false];
    for (let i in item) {
      if (i !== "type" && i !== "id" && i !== "selected") {
        selectedProps.push(i);
      }
    }

    let result = (
      <div className="wrapper">
        <h5>Properties</h5>
        <div>
          {selectedProps.map((property, index) => {
            return (
              <div
                className="form-group mt-2"
                onClick={() => console.log("object")}
                key={index}
              >
                <input
                  className="form-control"
                  type="text"
                  placeholder={property}
                  onChange={e => {
                    console.log(e);
                    let tmp = {};
                    tmp[property] = e.currentTarget.value;
                    this.props.onEdit(item.id, tmp);
                  }}
                  value={item[property]}
                />
              </div>
            );
          })}
        </div>
      </div>
    );

    return result;
  }

  render() {
    return <div>{this.getPropertiesForm()}</div>;
  }
}

export default PropertiesList;
