import React from 'react'
import Header from '../Header/Header'
import './films.css'
import FilmsScroller from './FilmsScroller'

const Films = ({data}) => {
  return (
    <div>
      <Header />
      <FilmsScroller data={data}/>
    </div>
  )
}

export default Films