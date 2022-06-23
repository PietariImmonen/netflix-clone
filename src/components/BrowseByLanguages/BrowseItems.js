import React from 'react'
import ScrollerItem from '../Scroller/ScrollerItem'
import './browseItems.css'

const BrowseItems = ({data}) => {
  return (
    <div className='browse-items'>
        {data.map(item => {
            return(
                <ScrollerItem key={item.id} image={item.img} className='browse-items-item'/>
            )
        })}
    </div>
  )
}

export default BrowseItems