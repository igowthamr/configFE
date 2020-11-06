import React, { Component } from "react";

class Manipulator extends Component {
  state = {
    ...this.props.manipulator
  };

  onChange = event => {
    const s = { ...this.state, [event.target.id]: event.target.value };
    this.setState({ [event.target.id]: event.target.value });
    this.props.onChange(s, "manipulator");
    event.preventDefault();
  };
  render() {
    const res = this.props.manipulator;
    return (
      (res && (
        <React.Fragment>
          <hr className="hr-primary" />
          <div className="form-group">
            <h5>Manipulator</h5>
            <label>Manipulator Type</label>
            <select
              className="form-control"
              id="type"
              value={this.state.type}
              onChange={this.onChange}
            >
              <option>DO_NOTHING</option>
              <option>REPLACE_AT_PATH</option>
              <option>ADD_AT_PATH</option>
              <option>DELETE_AT_PATH</option>
            </select>
          </div>

          <div className="form-group">
            <label>Path to add</label>
            <input
              type="text"
              className="form-control"
              id="pathToAddAt"
              value={this.state.pathToAddAt}
              onChange={this.onChange}
            />
          </div>
        </React.Fragment>
      )) ||
      null
    );
  }
}

export default Manipulator;
