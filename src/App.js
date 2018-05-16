import React, { Component } from 'react';
import './App.css';


class Calculator extends Component {
  constructor() {
    super()
    this.state = {
      operand: 0,
      operator: null,
      display: 0
    }
  }

  setOperand(newOperand) {
    let operand = this.state.operand
    let display = this.state.display
    operand = operand.toString()
    if (operand !== "0") {
      operand = operand + newOperand.toString()
    }
    else operand = newOperand
    display = operand
    console.log(operand)

    this.setState ({
      operand: operand,
      display: display
    })
  }

  render() {
    const display = this.state.display
    return(
      <div className="calculator">
        <div className="displayWindow">{display}</div>
        <div className="row">
          <div className="cellButton operator">AC</div>
          <div className="cellButton operator">C</div>
          <div className="cellButton operator">%</div>
          <div className="cellButton operator">/</div>
        </div>
        <div className="row">
          <div className="cellButton" onClick={() => this.setOperand(7)}>7</div>
          <div className="cellButton">8</div>
          <div className="cellButton">9</div>
          <div className="cellButton operator">x</div>
        </div>
        <div className="row">
          <div className="cellButton">4</div>
          <div className="cellButton">5</div>
          <div className="cellButton">6</div>
          <div className="cellButton operator">-</div>
        </div>
        <div className="row">
          <div className="cellButton">1</div>
          <div className="cellButton">2</div>
          <div className="cellButton">3</div>
          <div className="cellButton operator">+</div>
        </div>
        <div className="row">
          <div className="cellButton">0</div>
          <div className="cellButton">.</div>
          <div className="cellButton equal">=</div>
        </div>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calculator/>
      </div>
    );
  }
}

export default App;
