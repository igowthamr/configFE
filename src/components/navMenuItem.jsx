import React, { Component } from "react";

class NavMenuItem extends Component {
  state = {
    active: this.props.active
  };

  onClickOfthis = () => {
    // console.log("Nav menu item clciked");
    this.props.onNavMenuClick(this.props.res);
    const active = !this.state.active;
    this.setState({ active });
  };

  render() {
    return (
      <li
        key={this.props.res.name}
        onClick={this.onClickOfthis}
        className={
          this.props.active ? "list-group-item active" : "list-group-item"
        }
      >
        {this.props.res.name}
      </li>
    );
  }

  getClassNameForActive(name) {
    console.log(name);
    return name === this.state.active
      ? "list-group-item active"
      : "list-group-item";
  }
}

export default NavMenuItem;
