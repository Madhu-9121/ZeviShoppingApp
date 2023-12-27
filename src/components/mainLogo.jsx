import React from 'react'
import logo from  '../assets/zevi.svg'
const MainLogo = () => {
    const arrange ={
        position:'fixed',
        top:40,
        right:40,
    }
  return (
    <div style={arrange}>
        <img src={logo} alt="logo" />
    </div>
  )
}

export default MainLogo