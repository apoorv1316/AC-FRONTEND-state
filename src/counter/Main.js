import React from 'react'

import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
  }
  handleIncrement = () => {
    if (this.state.count < 12) {
      return this.setState({count: this.state.count + 2})
    } else {
      window.alert(`You can't increase the value above 12`)
    }
  }
  handleDecrement = () => {
    this.setState({count: this.state.count - 1})
  }
  handleReset = () => {
    this.setState({count: 0})
  }
  render() {
    return (
      <div className="container">
        <h1>Counter App</h1>
        <h1>{this.state.count}</h1>
        <div className="wrapper">
          <button onClick={this.handleIncrement}>
            Increment
          </button>
          <button onClick={this.handleDecrement}>
            Decrement
          </button>
          <button onClick={this.handleReset}>Reset</button>
        </div>
      </div>
    )
  }
}

export default App
