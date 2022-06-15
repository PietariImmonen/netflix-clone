import React from 'react'
import './header.css'
import HeaderImg from './HeaderImg'
import Headertext from './Headertext'

const Header = () => {
  return (
    <div>
        <HeaderImg 
        src='../example1.png'
        />
        <Headertext 
        title='Example'
        title2='Another example'
        info='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        />
    </div>
  )
}

export default Header