import React from 'react';

/* Main menu styled components imports */
import { MainMenuTitle, MainMenuItemTitle, MainMenuContainer, MainMenuUl, MainMenuItemContainer, MainMenuItemImage, MainMenuNav} from './Styles/MainMenuStyle';

const MainMenu = () => {
  return (<MainMenuContainer>
    {document.documentElement.clientWidth > 606 ? 
    <MainMenuTitle>Pick<br />a<br />Cate<br />gory</MainMenuTitle>: 
    <MainMenuTitle>Pick a<br />Category</MainMenuTitle>}
    <MainMenuNav>
      <MainMenuUl>
        <MainMenuItemContainer className='charactersContainer'>
          <MainMenuItemImage className='charactersBg' />
          <MainMenuItemTitle className='charactersItemTitle'>Characters</ MainMenuItemTitle>
        </ MainMenuItemContainer>
        <MainMenuItemContainer className='moviesContainer'>
          <MainMenuItemImage className='moviesBg'/>
          <MainMenuItemTitle className='moviesItemTitle'>Movies</ MainMenuItemTitle>
        </ MainMenuItemContainer>
        <MainMenuItemContainer className='planetsContainer'>
          <MainMenuItemImage className='planetsBg'/>
          <MainMenuItemTitle className='planetsItemTitle'>Planets</ MainMenuItemTitle>
        </ MainMenuItemContainer>
        <MainMenuItemContainer className='speciesContainer'>
          <MainMenuItemImage className='speciesBg'/>
          <MainMenuItemTitle className='speciesItemTitle'>Species</ MainMenuItemTitle>
        </ MainMenuItemContainer>
     </ MainMenuUl>
    </ MainMenuNav>
  </ MainMenuContainer>
);
};

export default MainMenu;
