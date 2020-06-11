import React from 'react'

class Menu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className="sidebar">
          <nav className="menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </nav>
        </div>
      </div>
    )
  }
}

export default Menu
