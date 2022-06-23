import React, { useState } from 'react'
import './BrowseItem.css'
import { FaPlayCircle } from 'react-icons/fa'
import { BsFillPlusCircleFill, BsFillHandThumbsUpFill } from 'react-icons/bs'

const BrowseItem = ({image}) => {
    const [hovered, setHovered] = useState(false)

  const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"

  return (
    <div className='browse-item'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
        {hovered ? <div className='browse-item-hovered'>
        <img src={image} alt='' className='browse-item-img1' />
        <video src={trailer} autoPlay={true} loop />
        <div className='browse-item-container'>
          <div className='browse-react-icons'>
            <FaPlayCircle size={'30px'}/>
            <BsFillPlusCircleFill size={'30px'}/>
            <BsFillHandThumbsUpFill size={'30px'}/>
          </div>
          <div className='browse-item-texts'>
            <p>99% match</p>
            <p>16+</p>
            <p>4 seasons</p>
          </div>
        </div>
        </div> : <img src={image} alt='' className='browse-item-img' /> }
    </div>
  )
}

export default BrowseItem