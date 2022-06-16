
  import { useRef, useState } from "react";

  import "./scroller.scss";
import ScrollerItem from "./ScrollerItem";
  
 function Scroller() {
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
  
    const listRef = useRef();
  
    const handleClick = (direction) => {
      setIsMoved(true);
      let distance = listRef.current.getBoundingClientRect().x - 50;
      if (direction === "left" && slideNumber > 0) {
        setSlideNumber(slideNumber - 1);
        listRef.current.style.transform = `translateX(${230 + distance}px)`;
      }
      if (direction === "right" && slideNumber < 5) {
        setSlideNumber(slideNumber + 1);
        listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      }
    };
    return (
      <div className="list">
        <span className="listTitle">Continue to watch</span>
        <div className="wrapper">
          <button
            className="sliderArrow left"
            onClick={() => handleClick("left")}
            style={{ display: !isMoved && "none" }}
          >Moi</button>
            <button 
                className="sliderArrow left"
                onClick={() => handleClick("left")}
                style={{ display: !isMoved && "none" }}
            >
                <div className="text">&#8249;</div>
            </button>
          <div className="container" ref={listRef}>
                <ScrollerItem text='1'/>
                <ScrollerItem text='2'/>
                <ScrollerItem text='3'/>
                <ScrollerItem text='4'/>
                <ScrollerItem text='5'/>
                <ScrollerItem text='6'/>
                <ScrollerItem text='7'/>
                <ScrollerItem text='8'/>
                <ScrollerItem text='9'/>
                </div>
            <button
                className="sliderArrow right"
                onClick={() => handleClick("right")}
            >
            </button>
            <button 
                className="sliderArrow right"
                onClick={() => handleClick("right")}
            >
                <div className="text">&#8250;</div>
            </button>
            </div>
        </div>
);
}

export default Scroller