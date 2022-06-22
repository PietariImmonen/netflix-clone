import React from 'react'
import './browseByLanguages.css'
import BrowseItems from './BrowseItems'

const BrowseByLanguages = ({data}) => {
  return (
    <div>
      <BrowseItems data={data}/>
    </div>
  )
}

export default BrowseByLanguages