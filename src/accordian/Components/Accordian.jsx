import React from 'react'

class Accordian extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div className="accordion-section">
          {/* <button className="accordion-button">
            Show/Hide
          </button> */}
          <h2 className={this.props.title}>
            {this.props.title}
          </h2>
          <p className={this.props.text}>
            {this.props.text}
          </p>
        </div>
      </div>
    )
  }
}

export default Accordian
