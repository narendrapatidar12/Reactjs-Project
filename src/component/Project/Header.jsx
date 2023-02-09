import React from 'react'
import logo from './Nklogo.avif'
import './keeps.css'

const Header = () => {
  return (
    <>
    <div className='header' >
        <img src={logo} alt='logo' height='40'  />
        <h1> Narendra Keep</h1>
    </div>
    </>
  )
}

export default Header
