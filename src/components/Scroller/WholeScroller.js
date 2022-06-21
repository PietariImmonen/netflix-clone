import React from 'react'
import Scroller from './Scroller'
import { movieList } from './movieList'
import './scroller.scss'

const WholeScroller = () => {
  return (
    <div className='whole-scroller'>
        <Scroller 
        header={"Continue to watch"}
        list={movieList}
        />
        <Scroller 
        header={"Released in the past year"}
        list={movieList}
        />
        <Scroller 
        header={"Trending now"}
        list={movieList}
        />
        <Scroller 
        header={"Family watch-together films"}
        list={movieList}
        />
        <Scroller 
        header={"Hollywood films"}
        list={movieList}
        />
    </div>
  )
}

export default WholeScroller