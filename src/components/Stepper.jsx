import React, { Component } from "react";
import "./Stepper.css";

export default class Stepper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: 3,
    };
  }

  minusClick = () => {
    let minusOne = this.state.inputValue - 1;
    this.setState({ inputValue: minusOne });
  };

  plusClick = () => {
    let plusOne = this.state.inputValue + 1;
    this.setState({ inputValue: plusOne });
  };

  changeValue = (e) => {
    let newValue = parseInt(e.target.value);
    this.setState({ inputValue: newValue });
  };

  render() {
    return (
      <div className="container">
        <button className="minus-btn" onClick={this.minusClick}>
          -
        </button>
        <input
          class="integer-center"
          value={this.state.inputValue}
          onChange={this.changeValue}
        ></input>
        <button className="plus-btn" onClick={this.plusClick}>
          +
        </button>
      </div>
    );
  }
}
