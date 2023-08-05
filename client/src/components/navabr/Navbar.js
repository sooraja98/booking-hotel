import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbarcontainer">
            <div className="navbarlog">
              <h1>Hotelbooking</h1>  
            </div>
            <div className="navbarbutton">
            <button className='navbutton'>Register</button>
            <button className='navbutton'>login</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
