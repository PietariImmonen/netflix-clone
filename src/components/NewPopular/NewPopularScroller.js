import React from 'react'
import Scroller from '../Scroller/Scroller'
import '../Scroller/scroller.scss'

const NewPopularScroller = ({data}) => {
    const newPopularData = data.filter(item => item.releasedPast)

    return (
      
          <div className='whole-scroller'>
              <Scroller 
              header={"Continue to watch"}
              list={newPopularData}
              />
              <Scroller 
              header={"Released in the past year"}
              list={newPopularData}
              />
              <Scroller 
              header={"Trending now"}
              list={newPopularData}
              />
              <Scroller 
              header={"Family watch-together films"}
              list={newPopularData}
              />
              <Scroller 
              header={"Hollywood films"}
              list={newPopularData}
              />
          </div>
        )
}

export default NewPopularScroller