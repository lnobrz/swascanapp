import React from 'react';
import { Link } from 'react-router-dom';

/* Main menu styled components imports */

import { 
  MainMenuTitle, 
  MainMenuItemTitle, 
  MainMenuContainer, 
  MainMenuUl, 
  MainMenuItemContainer, 
  MainMenuItemImage, 
  MainMenuNav
} 
from './MainMenuStyles';

const MainMenu = () => {

  const tinyScreen = window.matchMedia('(max-width: 606px)').matches;
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
 
  React.useLayoutEffect(() => {
    const catchWindowWidth = () => {
      setWindowWidth(window.innerWidth);
      (windowWidth >= 606 ? setIsSmallScreen(false) : setIsSmallScreen(true));
    }
    window.addEventListener('resize', catchWindowWidth);

    return window.removeEventListener('resize', catchWindowWidth);
    
  }, [windowWidth, isSmallScreen]);

  return (
    <MainMenuContainer 
    className='rowMainMenu'
    >
    
    {tinyScreen || isSmallScreen ?

    <MainMenuTitle>Pick a<br />Category</MainMenuTitle>
    : 
    <MainMenuTitle>Pick<br />a<br />Cate<br />gory</MainMenuTitle>
    }
    <MainMenuNav>
      <MainMenuUl>
          <Link 
          to='/Characters'
          >
            <MainMenuItemContainer 
            className='charactersContainer'
            >
              <MainMenuItemImage 
              className='charactersBg'
              >
              <MainMenuItemTitle 
              className='charactersItemTitle'
              >
                Characters
              </ MainMenuItemTitle>
              </MainMenuItemImage>
            </ MainMenuItemContainer>
          </Link>
        <Link 
        to='/Movies'
        >
          <MainMenuItemContainer 
          className='moviesContainer'
          >
            <MainMenuItemImage 
            className='moviesBg'
            >
            <MainMenuItemTitle 
            className='moviesItemTitle'
            >
              Movies
            </ MainMenuItemTitle>
            </MainMenuItemImage>
          </ MainMenuItemContainer>
        </Link>
        <Link 
        to='/Planets'
        >
          <MainMenuItemContainer 
          className='planetsContainer'
          >
            <MainMenuItemImage 
            className='planetsBg'
            >
            <MainMenuItemTitle 
            className='planetsItemTitle'
            >
              Planets
            </ MainMenuItemTitle>
            </MainMenuItemImage>
          </ MainMenuItemContainer>
        </Link>
        <Link 
        to='/Species'
        >
          <MainMenuItemContainer 
          className='speciesContainer'
          >
            <MainMenuItemImage 
            className='speciesBg'
            >
            <MainMenuItemTitle 
            className='speciesItemTitle'
            >
              Species
            </ MainMenuItemTitle>
            </MainMenuItemImage>
          </ MainMenuItemContainer>
        </Link>
     </ MainMenuUl>
    </ MainMenuNav>
  </ MainMenuContainer>
);
};

export default MainMenu;
