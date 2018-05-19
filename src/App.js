import React, { Component } from 'react';
import './App.css';


class Calculator extends Component {
  constructor() {
    super()
    this.state = {
      operand: 0,
      previousOperand: null,
      operator: null,
      display: 0,
      waiting: false,
      result: false,
      dot: false
    }
  }

  setOperand(newOperand) {
    let operand = this.state.operand
    let display = this.state.display
    let result = this.state.result
    let dot = this.state.dot
    //let operator = this.state.operator
    operand = operand.toString()
    if (operand.length<8) {
      if (newOperand === '.' && dot === false) {
        if (operand === '') {
          operand = '0' + newOperand.toString()
          dot = true
          console.log('dot ' + dot)
        }
        else {
          operand = operand + newOperand.toString()
          dot = true
          console.log('dot ' + dot)
        }
      }
      else {
        if (operand !== "0" && result === false && newOperand !== '.') {
          operand = operand + newOperand.toString()
        }
        else if (newOperand !== '.') {
            operand = newOperand
            result = false
        }
      }
    }
    display = operand
    console.log(operand)

    this.setState ({
      operand: operand,
      display: display,
      result: result,
      dot: dot
    })
  }

  deleteOperand() {
    let operand = this.state.operand
    let display = this.state.display
    let operator = this.state.operator
    let previousOperand = this.state.previousOperand
    let waiting = this.state.waiting
    if (operand.length > 1) {
      operand = operand.substring(0, operand.length - 1)
    }
    else {
      operand = '0'
    }
    //console.log('!!!' + operand)

    if (operator !== null) {
      operand = previousOperand
      previousOperand = null
      operator = null
      waiting = false
    }
    display = operand
    //console.log('delete! ' + operand)

    this.setState ({
      operand: operand,
      display: display,
      operator: operator,
      waiting: waiting
    })
  }

  setOperator(newOperator) {

    let display = this.state.display
    let operator = this.state.operator
    let operand = this.state.operand
    let previousOperand = this.state.previousOperand
    let waiting = this.state.waiting
    let dot = this.state.dot

    dot = false
    //let result = this.state.result
    //console.log(operator)
    if ((operator === null && waiting === false)) {
      console.log("Main")
      display = newOperator
      previousOperand = operand
      operand = ""
      operator = newOperator
      waiting = true
      console.log(newOperator)
    }
    else {
      if (operator === 'x') {
        console.log("inside x " + previousOperand + operator + operand)
        operator = newOperator
        operand = parseFloat(previousOperand) * parseFloat(operand)
        display = operand
        previousOperand = operand
        operand = ""
        console.log(previousOperand + operator + operand)
      }
      else if (operator === '/') {
        console.log("inside / " + previousOperand + operator + operand)
        operator = newOperator
        operand = parseFloat(previousOperand) / parseFloat(operand)
        display = operand
        previousOperand = operand
        operand = ""
        console.log(previousOperand + operator + operand)
      }
      else if (operator === '+') {
        console.log("inside + " + previousOperand + operator + operand)
        operator = newOperator
        operand = parseFloat(previousOperand) + parseFloat(operand)
        display = operand
        previousOperand = operand
        operand = ""
        console.log(previousOperand + operator + operand)
      }
      else if (operator === '-') {
        console.log("inside - " + previousOperand + operator + operand)
        operator = newOperator
        operand = parseFloat(previousOperand) - parseFloat(operand)
        display = operand
        previousOperand = operand
        operand = ""
        console.log(previousOperand + operator + operand)
      }
    }

    this.setState ({
      display: display,
      operand: operand,
      operator: operator,
      previousOperand: previousOperand,
      waiting: waiting,
      dot: dot
      //result: result
    })
  }

  setPercentages() {
    let display = this.state.display
    let operand = this.state.operand
    if (operand === "" || operand === "0") {
      display = "0"
      operand = "0"
    }
    else {
      operand = operand / 100
      display = operand
    }
    this.setState ({
      display: display,
      operand: operand
    })
  }

  setResult() {
    let display = this.state.display
    let operator = this.state.operator
    let operand = this.state.operand
    let previousOperand = this.state.previousOperand
    let waiting = this.state.waiting
    let result = this.state.result
    let dot = this.state.dot

    dot = false
    if (previousOperand !== null && result === false) {
      if (operator === 'x') {
        if (operand !== null && operand !== "") {
          operand = parseFloat(previousOperand) * parseFloat(operand)
          display = operand
        }
        else {
          display = previousOperand
        }
      }
      else if (operator === '/') {
        if (operand !== null && operand !== "") {
          console.log(previousOperand + operator + operand)
          operand = parseFloat(previousOperand) / parseFloat(operand)
          display = operand
        }
        else {
          display = previousOperand
        }
      }
      else if (operator === '+') {
        if (operand !== null && operand !== "") {
          console.log(previousOperand + operator + operand)
          operand = parseFloat(previousOperand) + parseFloat(operand)
          display = operand
        }
        else {
          display = previousOperand
        }
      }
      else if (operator === '-') {
        if (operand !== null && operand !== "") {
          console.log(previousOperand + operator + operand)
          operand = parseFloat(previousOperand) - parseFloat(operand)
          display = operand
        }
        else {
          display = previousOperand
        }
      }
      operator = null
      //previousOperand = null
      waiting = false
      result = true
    }
    this.setState ({
      display: display,
      operand: operand,
      previousOperand: previousOperand,
      operator: operator,
      waiting: waiting,
      result: result,
      dot: dot
    })
  }

  clearDisplay() {
    let operand = this.state.operand
    let previousOperand = this.state.previousOperand
    let operator = this.state.operator
    let display = this.state.display
    let waiting = this.state.waiting
    let result = this.state.result
    let dot = this.state.dot

    dot = false
    display = 0
    operand = 0
    previousOperand = null
    operator = null
    waiting = false
    result = false

    this.setState ({
      operand: operand,
      display: display,
      previousOperand: previousOperand,
      operator: operator,
      waiting: waiting,
      result: result,
      dot: dot
    })
  }

  render() {
    const display = this.state.display
    return(
      <div className="calculator">
        <div className="displayWindow">{display}</div>
        <div className="row">
          <div className="cellButton operator" onClick={() => this.clearDisplay()}>AC</div>
          <div className="cellButton operator" onClick={() => this.deleteOperand()}>C</div>
          <div className="cellButton operator" onClick={() => this.setPercentages('%')}>%</div>
          <div className="cellButton operator" onClick={() => this.setOperator('/')}>/</div>
        </div>
        <div className="row">
          <div className="cellButton" onClick={() => this.setOperand(7)}>7</div>
          <div className="cellButton" onClick={() => this.setOperand(8)}>8</div>
          <div className="cellButton" onClick={() => this.setOperand(9)}>9</div>
          <div className="cellButton operator"  onClick={() => this.setOperator('x')}>x</div>
        </div>
        <div className="row">
          <div className="cellButton" onClick={() => this.setOperand(4)}>4</div>
          <div className="cellButton" onClick={() => this.setOperand(5)}>5</div>
          <div className="cellButton" onClick={() => this.setOperand(6)}>6</div>
          <div className="cellButton operator" onClick={() => this.setOperator('-')}>-</div>
        </div>
        <div className="row">
          <div className="cellButton" onClick={() => this.setOperand(1)}>1</div>
          <div className="cellButton" onClick={() => this.setOperand(2)}>2</div>
          <div className="cellButton" onClick={() => this.setOperand(3)}>3</div>
          <div className="cellButton operator" onClick={() => this.setOperator('+')}>+</div>
        </div>
        <div className="row">
          <div className="cellButton" onClick={() => this.setOperand(0)}>0</div>
          <div className="cellButton"onClick={() => this.setOperand('.')}>.</div>
          <div className="cellButton equal" onClick={() => this.setResult()}>=</div>
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
