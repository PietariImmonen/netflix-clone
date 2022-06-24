import React from 'react'
import { AiOutlineClose }from "react-icons/ai"
import './navbar.css'

const NavbarSearch = ({handleClick, navSearch, closeClick}) => {
  return (
    <div>
        <form className='navbar-Search-form'>
            <input type='text' value={navSearch} onChange={handleClick} name='navSearch' className='navbarSearch-input'/>
            <AiOutlineClose onClick={closeClick} size={'25px'} className='navbar-search-icon' />
        </form>
    </div>
  )
}

export default NavbarSearch