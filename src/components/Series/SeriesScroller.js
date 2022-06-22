import React from 'react'
import Scroller from '../Scroller/Scroller'
import '../Scroller/scroller.scss'

const SeriesScroller = ({data}) => {

    const seriesData = data.filter(item => item.type === 'series')

  return (
    
        <div className='whole-scroller'>
            <Scroller 
            header={"Continue to watch"}
            list={seriesData}
            />
            <Scroller 
            header={"Released in the past year"}
            list={seriesData}
            />
            <Scroller 
            header={"Trending now"}
            list={seriesData}
            />
            <Scroller 
            header={"Family watch-together films"}
            list={seriesData}
            />
            <Scroller 
            header={"Hollywood films"}
            list={seriesData}
            />
        </div>
      )
}

export default SeriesScroller