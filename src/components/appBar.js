import React, { Component } from "react";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";
import AppBar from "material-ui/AppBar";
import ButtonExportArticles from "./button/ButtonExportArticles";
import ButtonExportGraphiques from "./button/ButtonExportGraphiques";
export default class AppBarre extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <div>
        <AppBar
          title="Web"
          onLeftIconButtonClick={this.handleToggle}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <MenuItem>Download CSV</MenuItem>
          <ButtonExportArticles />
          <ButtonExportGraphiques />

          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}
