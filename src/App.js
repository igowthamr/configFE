import React, { Component } from "react";
//import logo from './logo.svg';
//import NavBar from "./components/navbar";
import "./App.css";
//import Counters from "./components/counters";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import config from "./components/resolutionConfig.json";
import data from "./components/resolutionExample.json";
import ConfigBody from "./components/configBody";
import NavConfigMenu from "./components/navMenu";
import ReactJson from "react-json-view";

class App extends Component {
  state = {
    config: config,
    data: data,
    index: 0,
    activeResolution: config.resolutions[0]
  };

  onNavMenuClick = res => {
    console.log("Menu APp clicked" + res.name);
    const index = this.state.config.resolutions.indexOf(res);
    const activeResolution = this.state.config.resolutions[index];
    this.setState({ index, activeResolution });
  };

  onChangeEntity = (res, type) => {
    console.log("Changed App " + type);
    console.log(res);
    if (type.indexOf("#") > -1) {
      //console.log("Inside object " + type);
      //let config = this.state.config;
      const activeResolution = res;
      //config.resolutions[this.state.index] = res;
      this.setState({ activeResolution });
    }
    //console.log("Changed" + event.target.id);
    return;
  };

  onChange = res => {
    console.log("App on change of config");
  };

  onSubmit = event => {
    console.log("App onSubmit");
  };

  render() {
    //console.log(this.state.data);
    return (
      <Container fluid={true}>
        <Row
          className="justify-content-md-center p-3 bg-secondary my-2 rounded"
          xl={10}
        >
          <Col xl={10}>
            <div>
              <h3>Resolution</h3>
            </div>
          </Col>
        </Row>
        <Row className="bg-primary">
          <Col xl={2}>
            <span>Configured</span>
          </Col>
          <Col xl={8}>
            <b>Config</b>
          </Col>
          <Col xl={2}>
            <p>Recently used</p>
          </Col>
        </Row>
        <Row>
          <Col xl={2} className="parentDiv">
            <NavConfigMenu
              onNavMenuClick={this.onNavMenuClick}
              resolutions={this.state.config.resolutions}
              index={this.state.index}
            />
          </Col>
          <Col xl={5} className="bg-light parentDiv">
            <b></b>
            <ConfigBody
              config={this.state.activeResolution}
              onChange={this.onChangeEntity}
              onSubmit={this.onSubmit}
            />
          </Col>
          <Col xl={4} className="bg-light parentDiv">
            <b></b>
            <ReactJson src={this.state.data} theme="monokai" />
          </Col>
          <Col xl={1} className="bg-warning">
            <p>RU config 1</p>
            <p>RU config 2</p>
            <p>RU config 3</p>
            <p>RU config 4</p>
            <p>RU config 5</p>
            <p>RU config 6</p>
            <p>RU config 3</p>
            <p>RU config 4</p>
            <p>RU config 5</p>
            <p>RU config 6</p>
          </Col>
        </Row>
      </Container>
    );
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  reset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  /*
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 1 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onReset={(this, this.reset)}
          />
        </main>{" "}
      </React.Fragment>
    );
  }*/
}

export default App;
