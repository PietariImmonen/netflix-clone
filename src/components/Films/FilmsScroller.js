import React from 'react'
import Scroller from '../Scroller/Scroller'
import '../Scroller/scroller.scss'

const FilmsScroller = ({data}) => {

    const filmsData = data.filter(item => item.type === 'film')
    return (
    
        <div className='whole-scroller'>
            <Scroller 
            header={"Continue to watch"}
            list={filmsData}
            />
            <Scroller 
            header={"Released in the past year"}
            list={filmsData}
            />
            <Scroller 
            header={"Trending now"}
            list={filmsData}
            />
            <Scroller 
            header={"Family watch-together films"}
            list={filmsData}
            />
            <Scroller 
            header={"Hollywood films"}
            list={filmsData}
            />
        </div>
      )
}

export default FilmsScroller