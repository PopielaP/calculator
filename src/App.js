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
    if (operand.length<8) {
      if (operand !== "0") {
        operand = operand + newOperand.toString()
      }
      else operand = newOperand
    }
    display = operand
    console.log(operand)

    this.setState ({
      operand: operand,
      display: display
    })
  }

  clearDisplay() {
    let operand = this.state.operand
    let display = this.state.display
    display = "0"
    operand = ""

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
          <div className="cellButton operator" onClick={() => this.clearDisplay()}>AC</div>
          <div className="cellButton operator">C</div>
          <div className="cellButton operator">%</div>
          <div className="cellButton operator">/</div>
        </div>
        <div className="row">
          <div className="cellButton" onClick={() => this.setOperand(7)}>7</div>
          <div className="cellButton" onClick={() => this.setOperand(8)}>8</div>
          <div className="cellButton" onClick={() => this.setOperand(9)}>9</div>
          <div className="cellButton operator">x</div>
        </div>
        <div className="row">
          <div className="cellButton" onClick={() => this.setOperand(4)}>4</div>
          <div className="cellButton" onClick={() => this.setOperand(5)}>5</div>
          <div className="cellButton" onClick={() => this.setOperand(6)}>6</div>
          <div className="cellButton operator">-</div>
        </div>
        <div className="row">
          <div className="cellButton" onClick={() => this.setOperand(1)}>1</div>
          <div className="cellButton" onClick={() => this.setOperand(2)}>2</div>
          <div className="cellButton" onClick={() => this.setOperand(3)}>3</div>
          <div className="cellButton operator">+</div>
        </div>
        <div className="row">
          <div className="cellButton" onClick={() => this.setOperand(0)}>0</div>
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
