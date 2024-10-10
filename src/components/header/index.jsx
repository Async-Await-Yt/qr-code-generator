import React from 'react'
import { IoColorPaletteOutline } from 'react-icons/io5'
import './header.scss'
//1st component
const Header = ({setBg, bg}) => {
  return (
      <nav>
          <header>qr generator</header>
          {/*  input for changing color  */}
          <label htmlFor="color">
              <IoColorPaletteOutline
              className='icon' color={bg} />
          </label>
          {/* //set to diplay none  */}
          <input type="color" id="color"
              onChange={(e) => setBg(e.target.value)}
              style={{ display: "none" }} />
    </nav>
  )
}

export default Header