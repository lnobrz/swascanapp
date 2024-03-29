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
  getDataFunction} 
  from "../../Global/GlobalComponents";

const SpeciesMainMenu = () => {

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
    "https://swapi.dev/api/species/?page=1",
    "https://swapi.dev/api/species/?page=2",
    "https://swapi.dev/api/species/?page=3",
    "https://swapi.dev/api/species/?page=4",
  ], globalVars.setName
  , "name"), 

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
    'species', 
    globalVars.setData, 
    setShowMenu, 
    showMenu);
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
      category={"name"}
      dataText1={"Name: "}
      dataInfo1={globalVars.data.name}
      dataText2={"Classification: "}
      dataInfo2={globalVars.data.classification}
      dataText3={"Average Height: "}
      dataInfo3={globalVars.data.average_height}
      dataText4={"Skin Colors: "}
      dataInfo4={globalVars.data.skin_colors}
      dataText5={"Hair Color: "}
      dataInfo5={globalVars.data.hair_colors}
      dataText6={"Eye Colors: "}
      dataInfo6={globalVars.data.eye_colors}
      dataText7={"Average Lifespan: "}
      dataInfo7={globalVars.data.average_lifespan}
      dataText8={"Language: "}
      dataInfo8={globalVars.data.language}
      dataText10={"Characters: "}
      dataInfoArray1={globalVars.data.people}
      dataText11={"Movies: "}
      dataInfoArray2={globalVars.data.films}
      dataText12={""}
      dataInfoArray3={false}
      dataText13={""}
      dataInfoArray4={false}
      />
      </>
      :
      <>
      <ReadyMainMenuTitle 
      screenWidthVariable1={globalVars.mobile} 
      screenWidthVariable2={globalVars.isMobile} 
      categoryTitle="Specie"
      />

      <ReadyMenuContainer 
      apiBug={false} 
      nameVariable={globalVars.name} 
      getDataFunction={getData}
      />
      </>}
    </MainMenuContainer>
  )
};

export default SpeciesMainMenu;