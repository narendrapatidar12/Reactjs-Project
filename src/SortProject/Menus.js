import React from 'react'
import { NavLink } from 'react-router-dom'

const Menus= () => {
  return (
    <nav className='mainMenu'>
    <NavLink exact activeClassName='menu_link' to="/" className="menu_style"> Home </NavLink>
    <NavLink exact activeClassName='menu_link' to="/about" className="menu_style" > About</NavLink> 
    <NavLink exact activeClassName='menu_link' to="/contact" className="menu_style">Contact</NavLink>
    </nav>
  )
}

export default Menus;
