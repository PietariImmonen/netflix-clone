import React from 'react'
import Scroller from '../Scroller/Scroller'
import '../Scroller/scroller.scss'

const ChildrenScroller = ({data}) => {
    const childrensData = data.filter(item => item.kids)

    return (
      
          <div className='whole-scroller'>
              <Scroller 
              header={"Continue to watch"}
              list={childrensData}
              />
              <Scroller 
              header={"Released in the past year"}
              list={childrensData}
              />
              <Scroller 
              header={"Trending now"}
              list={childrensData}
              />
              <Scroller 
              header={"Family watch-together films"}
              list={childrensData}
              />
              <Scroller 
              header={"Hollywood films"}
              list={childrensData}
              />
          </div>
        )
}

export default ChildrenScroller