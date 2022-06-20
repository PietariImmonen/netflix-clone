import React from 'react'
import './scroller.scss'

const ScrollerItem = ({image}) => {
  return (
      <img src={image} alt='' className='scroller-item-img' />
  )
}

export default ScrollerItem