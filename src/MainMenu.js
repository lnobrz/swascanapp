import React from 'react';

/* Main menu styled components imports */
import { MainMenuTitle, MainMenuItemTitle, MainMenuContainer, MainMenuUl, MainMenuItemContainer, MainMenuItemImage, MainMenuNav} from './Styles/MainMenuStyle';

const MainMenu = () => {
  return (<MainMenuContainer>
    <MainMenuTitle>Pick<br />a<br />Cate<br />gory</MainMenuTitle>
    <MainMenuNav>
      <MainMenuUl>
        <MainMenuItemContainer>
          <MainMenuItemImage className='charactersBg' />
          <MainMenuItemTitle className='charactersItemTitle'>Characters</ MainMenuItemTitle>
        </ MainMenuItemContainer>
        <MainMenuItemContainer>
          <MainMenuItemImage className='moviesBg'/>
          <MainMenuItemTitle className='moviesItemTitle'>Movies</ MainMenuItemTitle>
        </ MainMenuItemContainer>
        <MainMenuItemContainer>
          <MainMenuItemImage className='planetsBg'/>
          <MainMenuItemTitle className='planetsItemTitle'>Planets</ MainMenuItemTitle>
        </ MainMenuItemContainer>
        <MainMenuItemContainer>
          <MainMenuItemImage className='speciesBg'/>
          <MainMenuItemTitle className='speciesItemTitle'>Species</ MainMenuItemTitle>
        </ MainMenuItemContainer>
     </ MainMenuUl>
    </ MainMenuNav>
  </ MainMenuContainer>
);
};

export default MainMenu;
