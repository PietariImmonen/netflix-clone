import React from 'react'
import Header from '../Header/Header'
import './newPopular.css'
import NewPopularScroller from './NewPopularScroller'

const NewPopular = ({data}) => {
  return (
    <div>
      <Header />
      <NewPopularScroller data={data}/>
    </div>
  )
}

export default NewPopular