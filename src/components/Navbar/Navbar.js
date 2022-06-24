import React, { useState } from 'react'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu
} from './NavbarComponents';
import "./navbar.css"
import { FaSearch } from 'react-icons/fa';
import { IoNotifications } from 'react-icons/io5'
import NavbarSearch from './NavbarSearch';

export default function Navbar(props) {

  const [search, setSearch] = useState(false)
  const[navSearch, setNavSearch] = useState('')

  const handleClick = (event) => {
    setNavSearch(event.target.value)
  }

  const closeClick = () => {
    setSearch(!search)
  }

  //all the contents of Navbar, used styled components
  return (
    <>
    <Nav>
      <Bars onClick={props.helper}/>
      <NavMenu onClick={() => setSearch(false)}>
        <NavLink to='/'>
            <div className='nav-header'>
            <img src='../Logonetflix.png' alt='' className='navbar-netflix-logo'/>
            </div>
        </NavLink>
        <NavLink to='/'>
          Home
        </NavLink>
        <NavLink to='/series'>
          Series
        </NavLink>
        <NavLink to='/films'>
          Films
        </NavLink>
        <NavLink to='/new-popular'>
          New & Popular
        </NavLink>
        <NavLink to='/my-list'>
          My list
        </NavLink>
        <NavLink to='/browse-by-languages'>
          Browse by Languages
        </NavLink>
      </NavMenu>
      <NavMenu style={{marginRight: '2rem'}}>
          {search ? <NavbarSearch 
          handleClick={handleClick}
          navSearch={navSearch}
          search={search}
          closeClick={closeClick}/> : <FaSearch onClick={closeClick}/>}
        <NavLink to='/children'>
          Children
        </NavLink>
        <NavLink to='/comments'>
          <IoNotifications />
        </NavLink>
      </NavMenu>
    </Nav>
  </>
  )
}
