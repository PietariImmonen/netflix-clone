import React from 'react'
import './scroller.scss'

const ScrollerItem = ({image}) => {
  return (
    <div className='scroller-item'>
      <img src={image} alt='' className='scroller-item-img' />
    </div>
  )
}

export default ScrollerItem