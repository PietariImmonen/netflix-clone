import React from 'react'
import { FaInfoCircle } from 'react-icons/fa'

const HeaderInfoButton = () => {
  return (
    <div className='header-info-button'>
        <div className='Header-FaPlay'>
            <FaInfoCircle style={{color: "white", paddingTop:'0.4rem'}} size={'25px'}/>
        </div>
        <p className='header-info-button-p'>More Info</p>
    </div>
  )
}

export default HeaderInfoButton