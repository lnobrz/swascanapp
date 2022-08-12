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

const PlanetsMainMenu = () => {

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
    "https://swapi.dev/api/planets/?page=1",
    "https://swapi.dev/api/planets/?page=2",
    "https://swapi.dev/api/planets/?page=3",
    "https://swapi.dev/api/planets/?page=4",
    "https://swapi.dev/api/planets/?page=5",
    "https://swapi.dev/api/planets/?page=6",
  ], 
  globalVars.setName, 
  "name"), 
  
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
    'planets', 
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
      category={"name"}
      dataText1={"Name: "}
      dataInfo1={globalVars.data.name}
      dataText2={"Rotation Period: "}
      dataInfo2={globalVars.data.rotation_period}
      dataText3={"Orbital Period: "}
      dataInfo3={globalVars.data.orbital_craw}
      dataText4={"Diameter: "}
      dataInfo4={globalVars.data.diameter}
      dataText5={"Climate: "}
      dataInfo5={globalVars.data.climate}
      dataText6={"Gravity: "}
      dataInfo6={globalVars.data.gravity}
      dataText7={"Terrain: "}
      dataInfo7={globalVars.data.terrain}
      dataText8={"Surface Water: "}
      dataInfo8={globalVars.data.surface_water}
      dataText9={"Population: "}
      dataInfo9={globalVars.data.population}
      dataText10={"Residents"}
      dataInfoArray1={globalVars.data.residents}
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
      categoryTitle="Planet"
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

export default PlanetsMainMenu;