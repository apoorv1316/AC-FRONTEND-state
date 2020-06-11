import React from 'react'
import Accordian from './Components/Accordian'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }
  handleShow = () => {
    this.setState({
      isOpen: true,
    })
  }
  handleHide = () => {
    this.setState({
      isOpen: false,
    })
  }
  render() {
    if (this.state.isOpen) {
      return (
        <div>
          <button onClick={this.handleHide}>Hide</button>
          <Accordian
            title="Javascript"
            text="Javascript is a programming language"
          />
          <button onClick={this.handleHide}>Hide</button>
          <Accordian
            title="React"
            text="React is a Javascript library for creating beautiful UI"
          />
          <button onClick={this.handleHide}>Hide</button>
          <Accordian
            title="Node"
            text="Node is a Javascript runtime environment"
          />
        </div>
      )
    } else {
      return (
        <div>
          <button onClick={this.handleShow}>Show</button>
          <Accordian title="Javascript" />
          <button onClick={this.handleShow}>Show</button>
          <Accordian title="React" />
          <button onClick={this.handleShow}>Show</button>
          <Accordian title="Node" />
        </div>
      )
    }
    // return (
    //   <div>
    //     <Accordian
    //       title="Javascript"
    //       text="Javascript is a programming language"
    //     />
    //     <Accordian
    //       title="React"
    //       text="React is a Javascript library for creating beautiful UI"
    //     />
    //     <Accordian
    //       title="Node"
    //       text="Node is a Javascript runtime environment"
    //     />
    //   </div>
    // )
  }
}
export default App
