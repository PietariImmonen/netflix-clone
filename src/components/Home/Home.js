import React from 'react'
import Header from '../Header/Header'
import HomeScroller from './HomeScroller'

const Home = ({data}) => {
  return (
    <div>
        <Header />
        <HomeScroller data={data}/>
    </div>
  )
}

export default Home