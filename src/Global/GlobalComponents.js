import React from "react";
import { MainMenuTitle } from "../Home/HomeMainMenu/MainMenuStyles";
import { DataMenu, DataMenuItem, MenuItemDecoration, MenuItemTitle, MainContainer, DataContainer, Data, DataSpan, MenuContainer, MenuItem } from "../Characters/CharactersMainMenu/SecondMainMenuStyle";
import {CloseMobileMenuButton} from "../Header/HeaderMenuStyles";
import closeMobileMenuButtonBg from "../Images/Icons/closeMenuIcon.svg";

/* global */

export const GlobalContext = React.createContext();
export const GlobalStorage = ({children}) => {

  const mobile = window.matchMedia('(max-width: 744px)').matches;
  const [isMobile, setIsMobile] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [showMenu, setShowMenu] = React.useState(true);
  const [name, setName] = React.useState(false);
  const [data, setData] = React.useState(null);

  return(
    <GlobalContext.Provider value={{mobile, isMobile, setIsMobile, windowWidth, setWindowWidth, showMenu, setShowMenu, name, setName, data, setData}}>{children}
    </GlobalContext.Provider>
  )
};

/* use with useEffect */
export const getNamesArray = (pagesArray, stateVariable, category) => {

  const makeRequest = async () => {
  const jsonRequest = await Promise.all(pagesArray.map(async(item) => await (await fetch(item)).json()));
  const characters = jsonRequest.map((item) => item.results);
  const charactersNames = characters.map((item) => item.map((item) => item[category]));
  let charactersNamesArray = [].concat.apply([], charactersNames);
  stateVariable(charactersNamesArray);
};

makeRequest();

};

/* use with useLayoutEffect */
export const makeResponsible = ((windowWidthSetter, windowWidth, isMobileSetter) => {

  const catchWindowWidth = () => {
    windowWidthSetter(window.innerWidth);
    (windowWidth >= 746 ? isMobileSetter(false) : isMobileSetter(true));
  };

  window.addEventListener('resize', catchWindowWidth);

  return () => {
    document.removeEventListener('resize', catchWindowWidth);
  };
});

/* styled components ready for use */

export const ReadyDataMenu = ({apiBug, nameArray, getDataFunction}) => {

  return(
    <DataMenu>
      {nameArray.map((item) => {
        return(
          <DataMenuItem 
            id={(apiBug === false) ?  `${parseInt(nameArray.indexOf(item) + 1)}` : (nameArray.indexOf(item) <= 15) ? 
              `${parseInt(nameArray.indexOf(item) + 1)}` : 
              `${parseInt(nameArray.indexOf(item) + 2)}`}
            onClick={getDataFunction}>
            <MenuItemDecoration/>
            <MenuItemTitle>
             {item}
            </MenuItemTitle>
          </DataMenuItem>
        )
      })}
    </DataMenu>   
  );
};

export const ReadyMainContainer = ({showMenuVariable, dataArray, category, clickFunction, dataText1, dataText2, dataText3, dataText4, dataText5, dataText6, dataText7, dataText8, dataText9, dataText10, dataText11, dataText12, dataInfo1, dataInfo2, dataInfo3, dataInfo4, dataInfo5, dataInfo6, dataInfo7, dataInfo8, dataInfo9, dataInfoArray1, dataInfoArray2, dataInfoArray3}) => {

  return(
    <MainContainer>
    <MainMenuTitle className={showMenuVariable === false ? "showTitle" : ""}>
      {dataArray[category]}
    </MainMenuTitle>
    <DataContainer>
    <CloseMobileMenuButton style={{margin: "30px 30px 0px 0px"}} onClick={clickFunction}>
      <img src={closeMobileMenuButtonBg} alt="close menu icon" className='mobileMenuIcon'/>
    </CloseMobileMenuButton>
    <ul>
       <Data>{dataText1}<DataSpan>{dataInfo1}</DataSpan></Data>
       <Data>{dataText2}<DataSpan>{dataInfo2}</DataSpan></Data>
       <Data>{dataText3}<DataSpan>{dataInfo3}</DataSpan></Data>
       <Data>{dataText4}<DataSpan>{dataInfo4}</DataSpan></Data>
       <Data>{dataText5}<DataSpan>{dataInfo5}</DataSpan></Data>
       <Data>{dataText6}<DataSpan>{dataInfo6}</DataSpan></Data>   
       <Data>{dataText7}<DataSpan>{dataInfo7}</DataSpan></Data>
       <Data>{dataText8}<DataSpan>{dataInfo8}</DataSpan></Data>
       <Data>{dataText9}<DataSpan>{dataInfo9}</DataSpan></Data>
       <Data>{dataText10}<DataSpan>{[dataInfoArray1].map((item) => <p>{item}<br/></p>)}</DataSpan></Data>
       <Data>{dataText11}<DataSpan>{[dataInfoArray2].map((item) => <p>{item}<br/></p>)}</DataSpan></Data>
       <Data>{dataText12}<DataSpan>{[dataInfoArray3].map((item) => <p>{item}<br/></p>)}</DataSpan></Data>
    </ul>
  </DataContainer>
  </MainContainer>
  );
};

export const ReadyMainMenuTitle = ({screenWidthVariable1, screenWidthVariable2, categoryTitle}) => {
  return(
    ({screenWidthVariable1} || {screenWidthVariable2}) === true ? 
      <MainMenuTitle>Pick a<br />{categoryTitle}</MainMenuTitle>
      :
      <MainMenuTitle>Pick a {categoryTitle}</MainMenuTitle>
  )
}

export const ReadyMenuContainer = ({apiBug, nameVariable, getDataFunction}) => {
  
  return(
    <MenuContainer className={nameVariable === false ? 'loading' : ''}>
       
       {(nameVariable === false) ? 
       <MenuItemTitle>
           loading...
      </MenuItemTitle>
       : 
       nameVariable.map((item) => {
           return(
           <MenuItem id={(apiBug === false) ?  `${parseInt(nameVariable.indexOf(item) + 1)}` : (nameVariable.indexOf(item)  <= 15) ? `${parseInt(nameVariable.indexOf(item) + 1)}` : `${parseInt(nameVariable.indexOf(item) + 2)}`} 
           onClick={getDataFunction}>
           <MenuItemDecoration/>
           <MenuItemTitle>
             {item}
           </MenuItemTitle>
         </MenuItem>)      
         })}
     </MenuContainer>
  )
}