import React, { Component } from "react";
import Operation from "./operation";

class Operations extends Component {
  state = {
    ...this.props.res
  };

  sampleData() {
    return {};
  }

  addOperation = op => {
    const s = this.state;
  };

  removeOperation = (index, type) => {
    //console.log(index + " dependsOn remove type " + type);
    let arr = this.props.res;
    arr.splice(index, 1);
    this.props.onChange(arr, type);
  };

  render() {
    //console.log(this.state);
    const res = this.props.res;
    return (
      res != null && (
        <React.Fragment>
          <h6>
            {this.props.type}
            <span className="floatRight">
              <input type="button" label="Add" value="Add" />
            </span>
          </h6>

          {this.props.res.map((op, index) => (
            <Operation
              key={index}
              index={index}
              res={op}
              type={this.props.type}
              onRemove={this.removeOperation}
            />
          ))}
        </React.Fragment>
      )
    );
  }
}

export default Operations;
