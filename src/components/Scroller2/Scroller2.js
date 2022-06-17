import React, { useRef, useState } from 'react'
import './scroller2.css'

const Scroller2 = () => {
    const [sliderIndex, setSliderIndex] = useState(0)

    const listRef = useRef();

    const handleClick = (content) => {
        setSliderIndex(listRef.current.style.getProperty())
        if(content === 'right') {
            listRef.current.style.setProperty('--slider-index', sliderIndex - 1)
        }
        if(content === 'left') {
            listRef.current.style.setProperty('--slider-index', sliderIndex + 1)
        }
    }

  return (
    <div>
        <div className='scroller2-container'>
            <button className="handle left-handle" onClick={() => handleClick("left")}>
                <div className="text">&#8249;</div>
            </button>
            <div className='scroller2-slider'>
                <img src="https://via.placeholder.com/210/00FF00?text=1" alt=''/>
                <img src="https://via.placeholder.com/220/00FF00?text=2" alt=''/>
                <img src="https://via.placeholder.com/230/00FF00?text=3" alt=''/>
                <img src="https://via.placeholder.com/240/00FF00?text=4" alt=''/>
                <img src="https://via.placeholder.com/250/00FF00?text=5" alt=''/>
                <img src="https://via.placeholder.com/260/00FF00?text=6" alt=''/>
                <img src="https://via.placeholder.com/270/00FF00?text=7" alt=''/>
                <img src="https://via.placeholder.com/280/00FF00?text=8" alt=''/>
                <img src="https://via.placeholder.com/250/00FF00?text=9" alt=''/>
                <img src="https://via.placeholder.com/260/00FF00?text=10" alt=''/>
                <img src="https://via.placeholder.com/270/00FF00?text=11" alt=''/>
                <img src="https://via.placeholder.com/280/00FF00?text=12" alt=''/>
            </div>
            <button className="handle right-handle" onClick={() => handleClick("right")}>
                <div className="text">&#8250;</div>
             </button>
        </div>
    </div>
  )
}

export default Scroller2