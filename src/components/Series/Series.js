import React from 'react'
import Header from '../Header/Header'
import './series.css'
import SeriesScroller from './SeriesScroller'

const Series = ({data}) => {
  return (
    <div>
      <Header />
      <SeriesScroller data={data} />
    </div>
  )
}

export default Series