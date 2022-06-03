import React from 'react';

/* Main menu styled components imports */
import { MainMenuTitle, MainMenuItemTitle} from './Styles/MainMenuStyle';

/* Main menu pics imports*/
import charactersMenuItemCover from "./Images/charactersCover.jpg";
import moviesMenuItemCover from "./Images/moviesCover.jpg";
import planetsMenuItemCover from "./Images/planetsCover.jpg";
import speciesMenuItemCover from "./Images/speciesCover.jpg";

const MainMenu = () => {
  return (<>
    <MainMenuTitle>Pick<br />a<br />Cate<br />gory</MainMenuTitle>
    <nav>
      <ul>
        <div>
          <MainMenuItemTitle>Characters</ MainMenuItemTitle>
          <img src={charactersMenuItemCover} alt="Characters menu item cover" width="100px"/>
        </div>
        <div>
          <img src={moviesMenuItemCover} alt="Movies menu item cover" width="100px"/>
          <MainMenuItemTitle>Movies</ MainMenuItemTitle>
        </div>
        <div>
          <img src={planetsMenuItemCover} alt="Planets menu item cover" width="100px"/>
          <MainMenuItemTitle>Planets</ MainMenuItemTitle>
        </div>
        <div>
          <img src={speciesMenuItemCover} alt="Species menu item cover" width="100px"/>
          <MainMenuItemTitle>Species</ MainMenuItemTitle>
        </div>
     </ul>
    </ nav>
  </>
);
};

export default MainMenu;
