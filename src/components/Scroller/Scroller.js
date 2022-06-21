import { useRef, useState, useEffect } from "react";
import "./scroller.scss";
import ScrollerItem from "./ScrollerItem";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'


  
 function Scroller({header, list}) {
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
    const [windowDimenion, detectHW] = useState({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight,
      })
    const [clicked, setClicked] = useState(0)
    
      const detectSize = () => {
        detectHW({
          winWidth: window.innerWidth,
          winHeight: window.innerHeight,
        })
      }
    
      useEffect(() => {
        window.addEventListener('resize', detectSize)
        return () => {
          window.removeEventListener('resize', detectSize)
        }
      }, [windowDimenion])
  
    const listRef = useRef();
  
    const handleClick = (direction) => {
      setIsMoved(true)
      setClicked(clicked + 1)
      const distance = listRef.current.getBoundingClientRect().x - 50
      console.log(distance)
      if (direction === "left" && slideNumber > 0) {
        setSlideNumber(slideNumber - 1)
        listRef.current.style.transform = `translateX(${(windowDimenion.winWidth) + distance}px)`
      }
      if (direction === "right" && slideNumber < 2) {
        setSlideNumber(slideNumber + 1)
        listRef.current.style.transform = `translateX(${(-windowDimenion.winWidth) + distance}px)`
      }
    };

    return (
      <div className="list">
        <span className="listTitle">{header}</span>
        <div className="wrapper">
            <button 
                className="sliderArrow left"
                onClick={() => handleClick("left")}
                style={{ display: !isMoved && "none" }}
            >
                <FaAngleLeft size={"30px"}/>
            </button>
          <div className="container" ref={listRef}>
                {list.map(movie => {
                    return(
                        <ScrollerItem image={movie.img} className='scroller-item1' key={movie.id}/>)}
                    )
                }
                </div>
            <button 
                className="sliderArrow right"
                onClick={() => handleClick("right")}
            >
                <FaAngleRight size={"30px"}/>
            </button>
            </div>
        </div>
);
}

export default Scroller