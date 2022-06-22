import React from 'react'
import Scroller from '../Scroller/Scroller'
import '../Scroller/scroller.scss'

const HomeScroller = ({data}) => {
  return (
    <div className='whole-scroller'>
        <Scroller 
        header={"Continue to watch"}
        list={data}
        />
        <Scroller 
        header={"Released in the past year"}
        list={data}
        />
        <Scroller 
        header={"Trending now"}
        list={data}
        />
        <Scroller 
        header={"Family watch-together films"}
        list={data}
        />
        <Scroller 
        header={"Hollywood films"}
        list={data}
        />
    </div>
  )
}

export default HomeScroller