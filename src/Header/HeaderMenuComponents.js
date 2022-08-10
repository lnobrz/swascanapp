import React from 'react';
import {Logo} from '../Logo/Logo';
import mobileMenuButtonBg from "../Images/Icons/menuIcon.svg";
import CloseMobileMenuButtonBg from '../Images/Icons/closeMenuIcon.svg';
import homeIcon from "../Images/Icons/homeIcon.svg";
import charactersIcon from "../Images/Icons/charactersIcon.svg";
import moviesIcon from "../Images/Icons/moviesIcon.svg";
import planetsIcon from "../Images/Icons/planetsIcon.svg";
import speciesIcon from "../Images/Icons/speciesIcon.svg";
import { 
  MenuItemsStyle, 
  MenuStyle, 
  MobileMenuButton, 
  MobileMenuNav, 
  CloseMobileMenuButton, 
  MobileMenuContainer, 
  MenuNav
} 
from '../Header/HeaderMenuStyles';
import { Link } from 'react-router-dom';


export const DesktopMenu = () => {
  return(
    <MenuNav>
        < Logo />
        <MenuStyle>
          <Link to="/" className='headerMenuLink'>
            <MenuItemsStyle>
            Home
            </ MenuItemsStyle>
          </Link>
          <Link to='/Characters' className='headerMenuLink'>
          <MenuItemsStyle>
              Characters
          </ MenuItemsStyle>
          </Link>
          <Link to='/Movies' className='headerMenuLink'>
            <MenuItemsStyle>
              Movies
            </ MenuItemsStyle>
          </Link>
          <Link to='/Planets' className='headerMenuLink'>
          <MenuItemsStyle>
            Planets
          </ MenuItemsStyle>
          </Link>
          <Link to='/Species' className='headerMenuLink'>
            <MenuItemsStyle>
              Species
            </ MenuItemsStyle>
          </Link>
        </ MenuStyle>
      </MenuNav>
  )
}

export const MobileOpenedMenu = (props) => {

  return(<>
    <MobileMenuNav>
      <MenuStyle>
        <MobileMenuContainer>
        <CloseMobileMenuButton 
        onClick={props.clickFunction} 
        id="btn"
        >
         <img 
         src={CloseMobileMenuButtonBg} 
         alt="close menu icon"/>
        </CloseMobileMenuButton>
        </MobileMenuContainer>
        <Link 
        to="/" 
        className='mobileHeaderMenuLink'
        >
          <MenuItemsStyle 
          className={'mobileMenuItem'}
          >
            <img 
            src={homeIcon} 
            alt="home menu icon" 
            className='mobileMenuItemIcon'
            />
             Home
          </ MenuItemsStyle>
        </Link>
        <Link 
        to="/Characters" 
        className='mobileHeaderMenuLink'
        >
          <MenuItemsStyle 
          className={'mobileMenuItem'}
          >
            <img 
            src={charactersIcon} 
            alt="characters menu icon" 
            className='mobileMenuItemIcon'
            />
              Characters
          </ MenuItemsStyle>
        </Link>
        <Link 
        to="/Movies" 
        className='mobileHeaderMenuLink'
        >
          <MenuItemsStyle 
          className={'mobileMenuItem'}
          >
            <img 
            src={moviesIcon} 
            alt="movies menu icon" 
            className='mobileMenuItemIcon'
            />
              Movies
          </ MenuItemsStyle>
        </Link>
        <Link 
        to="/Planets" 
        className='mobileHeaderMenuLink'
        >
          <MenuItemsStyle 
          className={'mobileMenuItem'}
          >
            <img 
            src={planetsIcon} 
            alt="planets menu icon" 
            className='mobileMenuItemIcon'
            />
              Planets
          </ MenuItemsStyle>
        </Link>
        <Link 
        to="/Species" 
        className='mobileHeaderMenuLink'
        >
          <MenuItemsStyle 
          className={'mobileMenuItem'}
          >
            <img 
            src={speciesIcon} 
            alt="species menu icon" 
            className='mobileMenuItemIcon'
            />
              Species
          </ MenuItemsStyle>
        </Link>
    </ MenuStyle>
  </MobileMenuNav>
  </>
  )
}

export const MobileClosedMenu = ({clickFunction}) => {
  return(
    <MenuNav>
    < Logo />
    <MobileMenuButton onClick={clickFunction}>
      <img 
      src={mobileMenuButtonBg} 
      alt="menu icon" 
      className='mobileMenuIcon'/>
    </MobileMenuButton>
  </MenuNav> 
  )
}