import React, { Component } from "react";
import Result from "./components/Result";
import Keypad from "./components/Keypadcomponent";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: ""
    };
  }

  onClick = button => {
    if (button === "=") {
      this.calculate();
    } else if (button === "CE") {
      this.reset();
    } else if (button === "C") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button
      });
    }
  };
  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "") + ""
      });
    } catch (e) {
      this.setState({
        result: "err"
      });
    }
  };
  reset = () => {
    this.setState({
      result: ""
    });
  };
  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  };

  render() {
    return (
      <div className="main">
        <div className="header-wrapper">
        <h1 className="header" >Miniräknare</h1>
        </div>
        <div className="miniraknare">
        <Result result={this.state.result} />
        <Keypad onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default App;
