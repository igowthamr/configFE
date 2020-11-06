import React, { Component } from "react";

class Operation extends Component {
  state = {
    index: this.props.index
  };
  onChange = () => {};

  onRemove = () => {
    this.props.onRemove(this.props.index, this.props.type);
  };

  render() {
    const res = this.props.res;
    return (
      res && (
        <React.Fragment>
          <label>Field</label>
          <span className="floatRight">
            <input
              type="button"
              label="Remove"
              value="Remove"
              onClick={this.onRemove}
            />
          </span>
          <input
            type="text"
            className="form-control"
            id="name"
            value={res.field}
            onChange={this.onChange}
          />

          <label>Operation Type</label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>PRESENCE_CHECK</option>
            <option>NULL_CHECK</option>
            <option>VALUE_CHECK</option>
            <option>POSSIBILTY_CHECK</option>
          </select>
        </React.Fragment>
      )
    );
  }
}

export default Operation;
