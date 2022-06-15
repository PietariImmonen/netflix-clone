import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'


export default function WholeNav() {

  //Navbar components gathered

    const [isOpened, setIsOpened] = useState(false) //checks if the Sidebar is opened

    const helper = () => {
        setIsOpened(!isOpened)
    } //Sets the state

  return (
    <div>
        <Sidebar isOpened={isOpened} helper={helper}/>
        <Navbar helper={helper}/>
    </div>
  )
}
