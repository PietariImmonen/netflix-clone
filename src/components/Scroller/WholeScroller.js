import React from 'react'
import Scroller from './Scroller'
import { movieList } from './movieList'
import './scroller.scss'

const WholeScroller = ({data}) => {
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

export default WholeScroller