import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

//styled components of the Navbar
export const Nav = styled.nav`
    background: #141414;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding-left: 3rem; 
    z-index: 10;
`; //Container of the Navbar

export const NavLink = styled(Link)`
    color: #E5E5E5;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        color: #F5F1F1;
    }
    &.active {
        color: #FFFFFF;
    }
`;//Link of the Navbar

export const Bars = styled(FaBars)`
    display: none;
    color: #2C98A0;

    @media screen and (max-width: 900px) {
        display: block;
        position: absolute;
        top: 10px;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.7rem;
        cursor: pointer;
    }
`;//Opening icon of the Sidebar in the Navbar

export const NavMenu = styled.div`
    display: flex;
    align-items: center;


    Third Nav 
    width: 100vw;
    white-space: nowrap; 

    @media screen and (max-width: 900px) {
        display: none;
    }
`; //Container of the Links in Navbar

