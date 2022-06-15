import { FaTimes } from 'react-icons/fa';
import { Link as Links } from 'react-router-dom';
import styled from 'styled-components';

//styled components of the Sidebar

export const SidebarContainer = styled.aside`
    position: fixed;
    width: 100%;
    height: 100;
    background: #000;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.5s ease-in-out;
    z-index: 500;
    opacity: ${({isOpened}) => (isOpened ? "100%" : "0%")};
    top: ${({isOpened}) => (isOpened ? "0%" : "-100%")};
`; //container of the Sidebar

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`; //holder closing icon in Sidebar

export const CloseIcon = styled(FaTimes)`
    color: #FFF;
`; //closing icon in Sidebar

export const SidebarWrapper = styled.div`
    color: #FFF
` //wrapper of the sidebar link

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-colums: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
` //container of the Sidebar menu

export const SidebarLink = styled(Links)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.3s ease-in-out;
    color: #fff;
    cursor: pointer;
    font-size: 25px;
    font-family: 'Roboto', sans-serif;
    font-style: italic;

    &:hover {
        color: #1a5f64;
    }
    &.active {
        color: #000000;
    }

    &:hover {
        color: #01bf71;
        transition: 0.3s ease-in-out;
    }
` //Sidebar link

