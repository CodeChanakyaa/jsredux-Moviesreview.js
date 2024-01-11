import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
  return (
    <div className="header">
      <Link to="/"><div className="logo">UI</div></Link>
      <div className="user-image">
        <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="user" />
      </div>
    </div>
  )
}

export default Header