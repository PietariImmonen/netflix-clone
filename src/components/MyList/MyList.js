import React from 'react'
import './myList.css'

const MyList = () => {
  return (
    <div className='myList'>
      <h2 className='myList-h2'>My list</h2>
      <div className='myList-text'>
        <p className='myList-text-p'>You haven't added any titles to your list yet.</p>
      </div>
    </div>
  )
}

export default MyList