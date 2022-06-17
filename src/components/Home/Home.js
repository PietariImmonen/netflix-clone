import React from 'react'
import Scroller from '../Scroller/Scroller'
import Scroller2 from '../Scroller2/Scroller2'
import Header from './Header/Header'
import { movieList } from '../Scroller/movieList'

const Home = () => {
  return (
    <div>
        <Scroller 
        header={"Continue to watch"}
        list={movieList}
        />
    </div>
  )
}

export default Home