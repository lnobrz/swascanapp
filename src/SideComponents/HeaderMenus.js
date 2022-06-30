import React from 'react';
import {Logo} from './Logo';
import mobileMenuButtonBg from "../Images/menuIcon.svg"
import CloseMobileMenuButtonBg from '../Images/closeMenuIcon.svg';
import homeIcon from "../Images/homeIcon.svg";
import charactersIcon from "../Images/charactersIcon.svg";
import moviesIcon from "../Images/moviesIcon.svg";
import planetsIcon from "../Images/planetsIcon.svg";
import speciesIcon from "../Images/speciesIcon.svg";
import aboutIcon from "../Images/aboutIcon.svg";

/* Header menu styled components import */
import { MenuItemsStyle, MenuStyle, MobileMenuButton, MobileMenuNav, CloseMobileMenuButton, MobileMenuTitle, MobileMenuContainer} from '../Styles/MenuStyle';
import {MenuNav} from "../Styles/MenuStyle";
import { Link } from 'react-router-dom';


export const DesktopMenu = () => {
  return(
    <MenuNav>
        < Logo />
        <MenuStyle>
          <Link to="/" className='headerMenuLink'><MenuItemsStyle>Home</ MenuItemsStyle></Link>
          <MenuItemsStyle>Characters</ MenuItemsStyle>
          <MenuItemsStyle>Movies</ MenuItemsStyle>
          <MenuItemsStyle>Planets</ MenuItemsStyle>
          <MenuItemsStyle>Species</ MenuItemsStyle>
        </ MenuStyle>
      </MenuNav>
  )
}

export const MobileOpenedMenu = (props) => {

  return(<>
    <MobileMenuNav>
      <MenuStyle>
        <MobileMenuContainer>
        <MobileMenuTitle>Menu</MobileMenuTitle>
        <CloseMobileMenuButton onClick={props.clickFunction} id="btn">
         <img src={CloseMobileMenuButtonBg} alt="close menu icon"/>
        </CloseMobileMenuButton>
        </MobileMenuContainer>
        <Link to="/" className='headerMenuLink'>
          <MenuItemsStyle className={'mobileMenuItem'}>
            <img src={homeIcon} alt="home menu icon" className='mobileMenuItemIcon'/>
             Home
          </ MenuItemsStyle>
        </Link>
          <MenuItemsStyle className={'mobileMenuItem'}>
            <img src={charactersIcon} alt="characters menu icon" className='mobileMenuItemIcon'/>
              Characters
          </ MenuItemsStyle>
          <MenuItemsStyle className={'mobileMenuItem'}>
            <img src={moviesIcon} alt="movies menu icon" className='mobileMenuItemIcon'/>
              Movies
          </ MenuItemsStyle>
          <MenuItemsStyle className={'mobileMenuItem'}>
            <img src={planetsIcon} alt="planets menu icon" className='mobileMenuItemIcon'/>
              Planets
          </ MenuItemsStyle>
          <MenuItemsStyle className={'mobileMenuItem'}>
            <img src={speciesIcon} alt="species menu icon" className='mobileMenuItemIcon'/>
              Species
          </ MenuItemsStyle>
          <MenuItemsStyle className={'mobileMenuItem'}>
            <img src={aboutIcon} alt="about menu icon" className='mobileMenuItemIcon'/>
              About
          </ MenuItemsStyle>
    </ MenuStyle>
  </MobileMenuNav>
  </>
  )
}

export const MobileClosedMenu = (props) => {
  return(
    <MenuNav>
    < Logo />
    <MobileMenuButton onClick={props.clickFunction}>
      <img src={mobileMenuButtonBg} alt="menu icon" className='mobileMenuIcon'/>
    </MobileMenuButton>
  </MenuNav> 
  )
}