import React from 'react'
import './films.css'
import FilmsScroller from './FilmsScroller'

const Films = ({data}) => {
  return (
    <div>
      <FilmsScroller data={data}/>
    </div>
  )
}

export default Films