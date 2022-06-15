import React from 'react'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu
} from './NavbarComponents';
import "./navbar.css"
import { FaSearch } from 'react-icons/fa';
import { IoNotifications } from 'react-icons/io5'

export default function Navbar(props) {

  //all the contents of Navbar, used styled components
  return (
    <>
    <Nav>
      <Bars onClick={props.helper}/>
      <NavMenu>
        <NavLink to='/'>
            <div className='nav-header'>
            <img src='../Logonetflix.png' alt='' className='navbar-netflix-logo'/>
            </div>
        </NavLink>
        <NavLink to='/'>
          Home
        </NavLink>
        <NavLink to='/stories'>
          Series
        </NavLink>
        <NavLink to='/facts'>
          Films
        </NavLink>
        <NavLink to='/comments'>
          New & Popular
        </NavLink>
        <NavLink to='/comments'>
          My list
        </NavLink>
        <NavLink to='/comments'>
          Browse by Languages
        </NavLink>
      </NavMenu>
      <NavMenu style={{marginRight: '2rem'}}>
      <NavLink to='/comments'>
          <FaSearch />
        </NavLink>
        <NavLink to='/comments'>
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
