import React from 'react'
import Header from './Header/Header'
import WholeScroller from '../Scroller/WholeScroller'

const Home = ({data}) => {
  return (
    <div>
        <Header />
        <WholeScroller data={data}/>
    </div>
  )
}

export default Home