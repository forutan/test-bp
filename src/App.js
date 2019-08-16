import React, { Component } from "react";

import WidgetsList from "./components/WidgetsList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PropertiesList from "./components/PropertiesList";
import FormContainer from "./components/FormContainer";
import NavBar from "./components/NavBar";

class App extends Component {
  state = {
    formItems: [
      {
        id: 0,
        type: "text",
        label: "UserName",
        placeholder: "Your userName here",
        selected: true
      },
      { id: 2, type: "button", title: "Submit" }
    ],
    widgetListItems: [
      { type: "text" },
      { type: "checkbox" },
      { type: "button" }
    ]
  };

  onWidgetAddHandler = type => {
    switch (type) {
      case "button":
        return () => {
          let formItems = [...this.state.formItems];
          formItems.push({
            id: formItems.length ? formItems[formItems.length - 1].id + 1 : 0,
            type: "button",
            title: "sample title text"
          });
          this.setState({
            widgetListItems: this.state.widgetListItems,
            formItems
          });
        };

      case "checkbox":
        return () => {
          let formItems = [...this.state.formItems];
          formItems.push({
            type: "checkbox",
            id: formItems.length ? formItems[formItems.length - 1].id + 1 : 0,
            label: "sample label text"
          });
          this.setState({
            widgetListItems: this.state.widgetListItems,
            formItems
          });
        };

      case "text":
        return () => {
          let formItems = [...this.state.formItems];
          formItems.push({
            type: "text",
            id: formItems.length ? formItems[formItems.length - 1].id + 1 : 0,
            label: "label",
            placeholder: "sample placeholder text"
          });
          this.setState({
            widgetListItems: this.state.widgetListItems,
            formItems
          });
        };

      default:
        return () => {};
    }
  };

  deleteHandler = id => {
    let formItems = [...this.state.formItems];
    formItems = formItems.filter(item => item.id !== id);
    this.setState({
      widgetListItems: this.state.widgetListItems,
      formItems
    });
  };

  selectHandler = id => {
    let formItems = [...this.state.formItems];
    formItems = formItems.map(item => {
      if (item.id === id) {
        item.selected = true;
      } else if (item.selected) {
        item.selected = false;
      }
      return item;
    });
    this.setState({
      widgetListItems: this.state.widgetListItems,
      formItems
    });
  };

  getSelectedItem = () => {
    return this.state.formItems.filter(item => item.selected);
  };

  editHandler = (id, formData) => {
    let formItems = [...this.state.formItems];
    formItems = formItems.map(item => {
      if (item.id === id) {
        item = { ...item, ...formData };
      }
      return item;
    });
    this.setState({
      widgetListItems: this.state.widgetListItems,
      formItems
    });
  };

  render() {
    return (
      <div className="wrapper">
        <NavBar title="Test-bp" />
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <WidgetsList
                onClickHandler={this.onWidgetAddHandler}
                items={this.state.widgetListItems}
                formItems={this.state.formItems}
                className="sidebar-left"
              />
            </div>
            <div className="col-sm-6">
              <FormContainer
                onDelete={this.deleteHandler}
                onSelect={this.selectHandler}
                items={this.state.formItems}
              />
            </div>
            <div className="col-sm-3">
              <PropertiesList
                onEdit={this.editHandler}
                item={this.getSelectedItem()}
                className="sidebar-right"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
