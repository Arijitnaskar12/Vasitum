import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
    <div className="navELements">
        <div className="search">
            <input type="text" placeholder='Search' />
            <img src="../src/assets/search.png" alt="search"/>
            </div>
        <div className="others">
          <img className='searching' src="../src/assets/ring-icon.png" alt="ring" />
          <img className='searching' src="../src/assets/chat.png" alt="message" />
          <div className="profile">
            <img src="../src/assets/profile.png" alt="profile" />
            <p>Arijit Naskar</p>
            <img src="../src/assets/vector1.png" alt="" />
          </div>
          </div>
        </div>
          <hr className='line'/>
        </div>
  )
}

export default Navbar