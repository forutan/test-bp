import React, { Component } from "react";
import CheckBox from "./widgets/CheckBox";
import Text from "./widgets/Text";
import Button from "./widgets/Button";

class FormContainer extends Component {
  render() {
    return (
      <div className="d-flex flex-column">
        {this.props.items.map(item => {
          switch (item.type) {
            case "text":
              return (
                <Text
                  onDelete={() => {
                    console.log("object");
                    this.props.onDelete(item.id);
                  }}
                  onSelect={() => {
                    this.props.onSelect(item.id);
                  }}
                  key={item.id}
                  label={item.label}
                  placeholder={item.placeholder}
                />
              );
            case "checkbox":
              return (
                <CheckBox
                  onDelete={() => {
                    console.log("object");
                    this.props.onDelete(item.id);
                  }}
                  onSelect={() => {
                    this.props.onSelect(item.id);
                  }}
                  key={item.id}
                  label={item.label}
                />
              );
            case "button":
              return (
                <Button
                  onDelete={() => {
                    console.log("object");
                    this.props.onDelete(item.id);
                  }}
                  onSelect={() => {
                    console.log("button");
                    this.props.onSelect(item.id);
                  }}
                  key={item.id}
                  title={item.title}
                  buttonType="submit"
                />
              );
            default:
              return <div>invalid</div>;
          }
        })}
      </div>
    );
  }
}

export default FormContainer;
