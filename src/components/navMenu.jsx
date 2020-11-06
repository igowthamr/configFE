import React, { Component } from "react";
import NavMenuItem from "./navMenuItem";

class NavConfigMenu extends Component {
  state = {
    active: this.props.resolutions[0].name
  };

  onNavMenuClick = res => {
    //console.log("Nav menu clciked");
    this.props.onNavMenuClick(res);
    const active = res.name;
    this.setState({ active });
  };

  render() {
    return (
      <ul className="list-group">
        {this.props.resolutions.map((res, index) => (
          <NavMenuItem
            key={index}
            name={index}
            onNavMenuClick={this.onNavMenuClick}
            res={res}
            active={this.activeMenuItem(index, this.props.index)}
          />
        ))}
      </ul>
    );
  }

  activeMenuItem(index, activeIndex) {
    return index === activeIndex;
  }
}

export default NavConfigMenu;
