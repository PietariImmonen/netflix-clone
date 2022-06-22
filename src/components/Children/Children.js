import React from 'react'
import Header from '../Header/Header'
import './children.css'
import ChildrenScroller from './ChildrenScroller'

const Childrens = ({data}) => {
  return (
    <div>
      <Header />
      <ChildrenScroller data={data}/>
    </div>
  )
}

export default Childrens