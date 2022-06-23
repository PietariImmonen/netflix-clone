import React from 'react'
import BrowseItem from './BrowseItem'
import './browseItems.css'

const BrowseItems = ({data}) => {
  return (
    <div className='browse-items'>
        {data.map(item => {
            return(
                <BrowseItem key={item.id} image={item.img} className='browse-items-item'/>
            )
        })}
    </div>
  )
}

export default BrowseItems