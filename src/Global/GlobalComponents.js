import React from "react";
import { 
  CoverTitle, 
  CoverText, 
  CoverContainer 
} 
from '../Home/HomeCover/CoverStyles';
import { MainMenuTitle } from "../Home/HomeMainMenu/MainMenuStyles";
import { 
  DataMenu, 
  DataMenuItem, 
  MenuItemDecoration, 
  MenuItemTitle, 
  MainContainer, 
  DataContainer, 
  Data, 
  DataDiv, 
  MenuContainer, 
  MenuItem 
} 
from "./SecondMainMenuStyle";
import {CloseMobileMenuButton} from "../Header/HeaderMenuStyles";
import closeMobileMenuButtonBg from "../Images/Icons/closeMenuIcon.svg";

/* global */

export const GlobalContext = React.createContext();
export const GlobalStorage = ({children}) => {

  const mobile = window.matchMedia('(max-width: 744px)').matches;
  const [isMobile, setIsMobile] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [name, setName] = React.useState(false);
  const [data, setData] = React.useState(null);

  return(
    <GlobalContext.Provider value={{
      mobile, 
      isMobile, 
      setIsMobile, 
      windowWidth, 
      setWindowWidth,
      name, 
      setName, 
      data, 
      setData}}>
        {children}
    </GlobalContext.Provider>
  )
};

/* use with useEffect */
export const getNamesArray = (
  pagesArray, 
  stateVariable, 
  category
) => {

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
export const makeResponsible = ((isMobileSetter) => {

  const catchWindowWidth = () => {
    window.innerWidth >= 746 ? isMobileSetter(false) : isMobileSetter(true);
  };

  return(
    window.addEventListener('resize', catchWindowWidth)
  );
});

/* Global Functions */

export const getDataFunction = async (
  eventTargetVar, 
  category, 
  dataSetter, 
  showMenuSetter, 
  showMenuVar
  ) => 
  
  {
  const itemId = eventTargetVar;
  const request = await fetch (`https://swapi.dev/api/${category}/${itemId}/`);
  const json = await request.json();

  dataSetter(json);
  showMenuSetter(showMenuVar === true ? false : true);
  showMenuSetter(false);
};

export const handleClick = (showMenuSetter, showMenuVar) => {
  showMenuSetter(!showMenuVar);
};

/* styled components ready for use */

export const ReadyCover = ({title, text}) => {
  return(
    <CoverContainer>
      <header>
        <CoverTitle>{title}</ CoverTitle>
      </header>
      <CoverText>
        {text}
      </ CoverText>
    </ CoverContainer>
  )
};

export const ReadyDataMenu = ({
  dataVar,
  apiBug, 
  nameArray, 
  getDataFunction,
}) => {

  return(
    <DataMenu 
    style={dataVar === null ? {overflowX: "hidden"} : {overflowX: "auto"}}
    >
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

export const ReadyMainContainer = ({
  showMenuVariable,
  clickFunction,
  dataArray, 
  category, 
  dataText1, 
  dataText2, 
  dataText3, 
  dataText4, 
  dataText5, 
  dataText6, 
  dataText7, 
  dataText8, 
  dataText9, 
  dataText10, 
  dataText11, 
  dataText12, 
  dataText13, 
  dataInfo1, 
  dataInfo2, 
  dataInfo3, 
  dataInfo4, 
  dataInfo5, 
  dataInfo6, 
  dataInfo7, 
  dataInfo8, 
  dataInfo9, 
  dataInfoArray1, 
  dataInfoArray2, 
  dataInfoArray3, 
  dataInfoArray4
}) => {
  
  const globalVars = React.useContext(GlobalContext);
  const [charactersData, setCharactersData] = React.useState(null);
  const [filmsData, setFilmsData] = React.useState(null);
  const [planetsData, setPlanetsData] = React.useState(null);
  const [speciesData, setSpeciesData] = React.useState(null);

  React.useState(() => {
    const getData = async () => {
      const cData = dataInfoArray1 !== false ? await Promise.all(dataInfoArray1.map(async (item) => await fetch(item).then((item) => item.json()).then((item) => <p>{item.name}</p>))) : null;
      const fData = dataInfoArray2 !== false ? await Promise.all(dataInfoArray2.map(async (item) => await fetch(item).then((item) => item.json()).then((item) => <p>{item.title}</p>))) : null;
      const pData = dataInfoArray3 !== false ? await Promise.all(dataInfoArray3.map(async (item) => await fetch(item).then((item) => item.json()).then((item) => <p>{item.name}</p>))) : null;
      const sData = dataInfoArray4 !== false ? await Promise.all(dataInfoArray4.map(async (item) => await fetch(item).then((item) => item.json()).then((item) => <p>{item.name}</p>))) : null;
  
      await setCharactersData(cData);
      await setFilmsData(fData);
      await setPlanetsData(pData);
      await setSpeciesData(sData);
    };

    getData();
  }, [])

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
       <Data>{dataText1}<DataDiv>{dataInfo1}</DataDiv></Data>
       <Data>{dataText2}<DataDiv>{dataInfo2}</DataDiv></Data>
       <Data>{dataText3}<DataDiv>{dataInfo3}</DataDiv></Data>
       <Data>{dataText4}<DataDiv>{dataInfo4}</DataDiv></Data>
       <Data>{dataText5}<DataDiv>{dataInfo5}</DataDiv></Data>
       <Data>{dataText6}<DataDiv>{dataInfo6}</DataDiv></Data>   
       <Data>{dataText7}<DataDiv>{dataInfo7}</DataDiv></Data>
       <Data>{dataText8}<DataDiv>{dataInfo8}</DataDiv></Data>
       <Data>{dataText9}<DataDiv>{dataInfo9}</DataDiv></Data>
       <Data>{dataText10}<DataDiv>{dataInfoArray1 === false ? "" : charactersData === null ? "loading..." : charactersData}</DataDiv></Data>
       <Data>{dataText11}<DataDiv>{dataInfoArray2 === false ? "" : filmsData === null ? "loading..." : filmsData}</DataDiv></Data>
       <Data>{dataText12}<DataDiv>{dataInfoArray3 === false ? "" : planetsData === null ? "loading..." : planetsData}</DataDiv></Data>
       <Data>{dataText13}<DataDiv>{dataInfoArray4 === false ? "" : speciesData === null ? "loading..." : speciesData}</DataDiv></Data>
    </ul>
  </DataContainer>
  </MainContainer>
  );
};

export const ReadyMainMenuTitle = ({
  screenWidthVariable1, 
  screenWidthVariable2, 
  categoryTitle
}) => {

  return(
    ({screenWidthVariable1} || {screenWidthVariable2}) === true ? 
      <MainMenuTitle>Pick a<br />{categoryTitle}</MainMenuTitle>
      :
      <MainMenuTitle>Pick a {categoryTitle}</MainMenuTitle>
  )
}

export const ReadyMenuContainer = ({
  apiBug, 
  nameVariable, 
  getDataFunction
}) => {
  
  return(
    <MenuContainer className={nameVariable === false ? 'loading' : ''} 
    style={nameVariable === false ? {overflowX: "visible"} : {overflowX: "auto"}}>
       
       {(nameVariable === false) ? 
       <MenuItemTitle>
           loading...
      </MenuItemTitle>
       : 
       nameVariable.map((item, index) => {
           return(
           <MenuItem key={index} id={(apiBug === false) ?  `${parseInt(nameVariable.indexOf(item) + 1)}` : (nameVariable.indexOf(item)  <= 15) ? `${parseInt(nameVariable.indexOf(item) + 1)}` : `${parseInt(nameVariable.indexOf(item) + 2)}`} 
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