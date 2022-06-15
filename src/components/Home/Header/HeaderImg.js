import React from 'react'

const HeaderImg = ({src}) => {
  return (
    <div className='header-img'>
        <img src={src} alt='' className='header-img-img'/>
    </div>
  )
}

export default HeaderImg