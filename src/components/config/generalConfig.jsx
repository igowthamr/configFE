import React, { Component } from "react";
//import AosRestConfig from "./AosRestConfig";
//import BasicConfig from "./BasicConfig";
//import SqlConfig from "./SqlConfig";
//import Form from "react-bootstrap/Form";
import Collapse from "react-bootstrap/Collapse";
import Manipulator from "./manipulator";
import DependsOn from "./dependsOn";
import FieldParentArray from "./fieldParentArray";

class GeneralConfig extends Component {
  state = {
    collapse: [false, false, false, false],
  };

  onChange = (event) => {
    let value = event.target.value;
    if (event.target.type === "checkbox") {
      console.log(event.target.id + " idfg " + event.target.checked);
      value = event.target.checked;
    }
    const s = { ...this.props.res, [event.target.id]: value };
    //this.setState({ [event.target.id]: event.target.value });
    //console.log(s);
    //this.setState(s);
    this.props.onChange(s, "resolution#");
    //event.preventDefault();
  };

  onChangeEntity = (res, type) => {
    //console.log("Changed" + res);
    console.log(res);
    const s = { ...this.props.res, [type]: res };
    this.props.onChange(s, "resolution#");
    //console.log(s);
    //console.log("Changed" + event.target.id);
    return;
  };

  onSubmit = (event) => {
    event.preventDefault();
    //console.log("General onSubmit");
    //const data = new FormData(event.target);

    this.props.onSubmit(this.state);
    //console.log(data.get("name"));
    //this.props.onSubmit();
    event.preventDefault();
  };

  checkboxValue(val) {
    return val === true ? "checked" : null;
  }

  setOpen(f, index) {
    const collapse = { ...this.state.collapse };
    collapse[index] = f;
    this.setState({ collapse });
  }

  render() {
    const config = this.props.res;

    //const res = this.props.res;
    /*let orig = <p></p>;
    switch (res.type) {
      case "aosUrl":
        orig = <AosRestConfig />;
      case "sql":
        orig = <SqlConfig />;
      case "basicTransform":
        orig = <BasicConfig />;
    }*/
    return (
      <form onSubmit={this.onSubmit}>
        <div
          class="card-header"
          onClick={() => this.setOpen(!this.state.collapse[0], 0)}
          aria-controls="example-collapse-text"
          aria-expanded={this.state.collapse[0]}
          value="click"
        >
          <span className="displayInline collapse-title">
            <h5 className="displayInline">Featured</h5>
          </span>
        </div>

        <Collapse in={this.state.collapse[0]}>
          <div id="example-collapse-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Collapse>
        <hr className="hr-primary" />
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={config.name}
            onChange={this.onChange}
          />
          <label>Resolution Type</label>
          <select
            className="form-control"
            value={config.type}
            id="type"
            onChange={this.onChange}
          >
            <option>aosUrl</option>
            <option>sql</option>
            <option>basicTransform</option>
          </select>
          <input
            type="checkbox"
            id="active"
            checked={config.active ? true : false}
            onChange={this.onChange}
          />
          <label>Active</label>

          <br />
          <input
            type="checkbox"
            id="failfast"
            checked={config.failfast ? true : false}
            onChange={this.onChange}
          />
          <label>Failfast</label>
        </div>
        <hr className="hr-primary" />
        <FieldParentArray
          res={config.fieldParentArray}
          onChange={this.onChangeEntity}
        />
        <DependsOn
          dependsOn={config.dependsOn}
          onChange={this.onChangeEntity}
        />
        <Manipulator
          manipulator={config.manipulator}
          onChange={this.onChangeEntity}
        />
        <hr className="hr-primary" />
        <div className="form-group">
          <input type="submit" value="Save" />
        </div>
      </form>
    );
  }
}

export default GeneralConfig;
