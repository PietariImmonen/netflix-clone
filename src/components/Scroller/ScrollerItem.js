import React from 'react'
import './scroller.scss'

const ScrollerItem = ({text}) => {
  return (
    <div className='scroller-item'>{text}</div>
  )
}

export default ScrollerItem