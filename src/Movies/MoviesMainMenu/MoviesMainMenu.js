import React from "react";
import { MainMenuContainer } from "../../Home/HomeMainMenu/MainMenuStyles";
import { GlobalContext } from "../../Global/GlobalComponents";
import { 
  getNamesArray, 
  makeResponsible, 
  ReadyDataMenu, 
  ReadyMainContainer, 
  ReadyMenuContainer, 
  ReadyMainMenuTitle,
  getDataFunction 
} 
from "../../Global/GlobalComponents";

const MoviesMainMenu = () => {

  const globalVars = React.useContext(GlobalContext);
  const [showMenu, setShowMenu] = React.useState(true);
  const handleClick = () => {
    setShowMenu(!showMenu)
  };

  React.useEffect(() => {
    setShowMenu(true);
    globalVars.setName(false);
    window.innerWidth >= 746 ? globalVars.setIsMobile(false) : globalVars.setIsMobile(true)
  }, []);

  React.useEffect(() => getNamesArray([
    "https://swapi.dev/api/films/?page=1",
  ], 
  globalVars.setName, 
  "title"
  ), 
  
  [globalVars.setName]);

  React.useLayoutEffect(() => {makeResponsible(
    globalVars.setWindowWidth, 
    globalVars.windowWidth, 
    globalVars.setIsMobile)}, 
    
    [
      globalVars.isMobile, 
      globalVars.setIsMobile, 
      globalVars.windowWidth, 
      globalVars.setWindowWidth
    ]);
  
  const getData = async (event) => {
  
    const itemId = event.currentTarget.id;
  
    getDataFunction(
      itemId, 
      'films', 
      globalVars.setData, 
      setShowMenu, 
      showMenu
    );
};

  return(
    <MainMenuContainer 
    className={showMenu === false ? "showData" : ""}
    >
      
      {showMenu === false ?
      <>
      <ReadyDataMenu
      dataVar={globalVars.data}
      apiBug={false} 
      nameArray={globalVars.name} 
      getDataFunction={getData} 
      />
      <ReadyMainContainer 
      showMenuVariable={showMenu}
      clickFunction={handleClick}
      dataArray={globalVars.data}
      category={"title"}
      dataText1={"Title: "}
      dataInfo1={globalVars.data.title}
      dataText2={"Episode ID: "}
      dataInfo2={globalVars.data.episode_id}
      dataText3={"Opening Craw: "}
      dataInfo3={globalVars.data.opening_craw}
      dataText4={"Director: "}
      dataInfo4={globalVars.data.director}
      dataText5={"Producer: "}
      dataInfo5={globalVars.data.producer}
      dataText6={"Release Date: "}
      dataInfo6={globalVars.data.release_date}
      dataText10={"Characters: "}
      dataInfoArray1={globalVars.data.characters}
      dataText11={""}
      dataInfoArray2={false}
      dataText12={"Planets: "}
      dataInfoArray3={globalVars.data.planets}
      dataText13={"Species: "}
      dataInfoArray4={globalVars.data.species}
      />
      </>
      :
      <>
      <ReadyMainMenuTitle 
      screenWidthVariable1={globalVars.mobile} 
      screenWidthVariable2={globalVars.isMobile} 
      categoryTitle="Movie"
      />
      <ReadyMenuContainer 
      apiBug={false} 
      nameVariable={globalVars.name} 
      getDataFunction={getData}/>
      </>}
    </MainMenuContainer>
  )
};

export default MoviesMainMenu;