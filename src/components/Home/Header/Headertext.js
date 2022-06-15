import React from 'react'
import './header.css'
import HeaderInfoButton from './HeaderInfoButton'
import HeaderPlayButton from './HeaderPlayButton'

const Headertext = ({title, title2, info}) => {
  return (
    <div className='header-text'>
        <h1 className='header-text-h1'>{title}</h1>
        <h4 className='header-text-h4'>{title2}</h4>
        <p className='header-text-p'>{info}</p>
        <div className='header-buttons'>
            <HeaderPlayButton />
            <HeaderInfoButton />
        </div>
    </div>
  )
}

export default Headertext