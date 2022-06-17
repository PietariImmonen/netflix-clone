import { useRef, useState } from "react";
import "./scroller.scss";
import ScrollerItem from "./ScrollerItem";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'


  
 function Scroller({header, list}) {
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
  
    const listRef = useRef();
  
    const handleClick = (direction) => {
      setIsMoved(true);
      let distance = listRef.current.getBoundingClientRect().x - 50;
      if (direction === "left" && slideNumber > 0) {
        setSlideNumber(slideNumber - 1);
        listRef.current.style.transform = `translateX(${(230*6) + distance}px)`;
      }
      if (direction === "right" && slideNumber < 2) {
        setSlideNumber(slideNumber + 1);
        listRef.current.style.transform = `translateX(${(-230*6) + distance}px)`;
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
                {list.map(movie => <ScrollerItem image={movie.img} />)}
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