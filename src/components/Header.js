import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </header>
  )
}

export default Header
