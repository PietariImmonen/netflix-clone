import React from 'react'
import { FaPlay } from 'react-icons/fa'
import './header.css'

const HeaderPlayButton = () => {


  return (
    <div className='header-play-button'>
        <div className='Header-FaPlay'>
            <FaPlay style={{color: "black", paddingTop:'0.4rem'}}/>
        </div>
        <p className='header-play-button-p'>Play</p>
    </div>
  )
}

export default HeaderPlayButton