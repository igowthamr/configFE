import React, { Component } from "react";

import Operations from "./operations";

class DependsOn extends Component {
  state = {
    ...this.props.dependsOn
  };
  onChange = event => {
    let value = event.target.value;
    if (event.target.type === "checkbox") {
      //console.log(event.target.id + " idfg " + event.target.checked);
      value = event.target.checked;
    }
    const s = { ...this.state, [event.target.id]: value };
    this.props.onChange(s, "dependsOn");
    //event.preventDefault();
  };

  onChangeEntity = (res, type) => {
    //console.log("Changed" + res);
    //console.log(this.props.dependsOn);
    const s = { ...this.props.dependsOn, [type]: res };
    this.props.onChange(s, "dependsOn");
    //console.log(s);
    //console.log("Changed" + event.target.id);
    return;
  };
  render() {
    if (!this.props.dependsOn) return "";
    return (
      <React.Fragment>
        <hr className="hr-primary" />
        <div className="form-group">
          <h5>Depends On</h5>
          <input
            type="checkbox"
            id="failfast"
            checked={this.props.dependsOn.failfast ? true : false}
            onChange={this.onChange}
          />
          <label>Failfast</label>
          <br />
          <Operations
            res={(this.props.dependsOn && this.props.dependsOn.and) || null}
            type={"and"}
            onChange={this.onChangeEntity}
          />
          <Operations
            res={(this.props.dependsOn && this.props.dependsOn.or) || null}
            type={"or"}
            onChange={this.onChangeEntity}
          />
          <Operations
            res={(this.props.dependsOn && this.props.dependsOn.not) || null}
            type={"not"}
            onChange={this.onChangeEntity}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default DependsOn;
