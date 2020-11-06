import React, { Component } from "react";

class FieldParentArray extends Component {
  state = {};
  onChange = event => {
    const s = { ...this.state, [event.target.id]: event.target.value };
    this.setState({ [event.target.id]: event.target.value });
    this.props.onChange(s, "manipulator");
    event.preventDefault();
  };
  render() {
    const res = this.props.res;
    return (
      (this.props.res && (
        <div className="form-group">
          <hr className="hr-primary" />
          <label>Field is inside object inside an array</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={res}
            onChange={this.onChange}
          />
        </div>
      )) ||
      null
    );
  }
}

export default FieldParentArray;
