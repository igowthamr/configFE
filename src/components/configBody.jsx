import React, { Component } from "react";
import GeneralConfig from "./config/generalConfig";

class ConfigBody extends Component {
  state = {};
  onSubmit = event => {
    //console.log("ConfigBOdy onSubmit");
    //console.log(event);
    this.props.onSubmit(event);
  };
  render() {
    //console.log(this.props.config);
    //console.log("In configBody render");
    //console.log(this.props.config);
    return (
      <GeneralConfig
        res={this.props.config}
        onChange={this.props.onChange}
        onSubmit={this.onSubmit}
      />
    );
  }
}

export default ConfigBody;
