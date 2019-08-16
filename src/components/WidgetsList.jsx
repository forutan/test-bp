import React, { Component } from "react";
import ListItem from "./list/ListItem";

class WidgetsList extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="wrapper">
        <h5>WidgetsList</h5>
        <ul className="px-0 border border-bottom-0">
          {this.props.items.map((item, index) => {
            return (
              <ListItem
                onClick={this.props.onClickHandler(item.type)}
                key={index}
              >
                {item.type}
              </ListItem>
            );
          })}
        </ul>
        <h5>Generated JSON</h5>
        <div className="row mt-3">
          <div className="col-sm-12">
            <code>{JSON.stringify(this.props.formItems)}</code>
          </div>
        </div>
      </div>
    );
  }
}

export default WidgetsList;
