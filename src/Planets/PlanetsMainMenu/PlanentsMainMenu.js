import React from "react";
import { MainMenuContainer } from "../../Home/HomeMainMenu/MainMenuStyles";
import { GlobalContext } from "../../Global/GlobalComponents";
import { getNamesArray, makeResponsible, ReadyDataMenu, ReadyMainContainer, ReadyMenuContainer, ReadyMainMenuTitle,} from "../../Global/GlobalComponents";

const PlanetsMainMenu = () => {

  const globalVars = React.useContext(GlobalContext);

  React.useEffect(() => {
    globalVars.setShowMenu(true);
  }, []);

  React.useEffect(() => getNamesArray([
    "https://swapi.dev/api/planets/?page=1",
    "https://swapi.dev/api/planets/?page=2",
    "https://swapi.dev/api/planets/?page=3",
    "https://swapi.dev/api/planets/?page=4",
    "https://swapi.dev/api/planets/?page=5",
    "https://swapi.dev/api/planets/?page=6",
  ], globalVars.setName, "name"), [globalVars.setName]);

  React.useLayoutEffect(() => {makeResponsible(globalVars.setWindowWidth, globalVars.windowWidth, globalVars.setIsMobile)}, [globalVars.isMobile, globalVars.setIsMobile, globalVars.windowWidth, globalVars.setWindowWidth]);
  
  const getData = async (event) => {
  const itemId = event.currentTarget.id;
  const request = await fetch (`https://swapi.dev/api/planets/${itemId}/`);
  const json = await request.json();
  
  globalVars.setData(json);
  globalVars.setShowMenu(false);
};

  const handleClick = () => {
    globalVars.setShowMenu(!globalVars.showMenu);
  };

  return(
    <MainMenuContainer className={globalVars.showMenu === false ? "showData" : ""}>
      
      {globalVars.showMenu === false ?
      <>
      <ReadyDataMenu apiBug={false} nameArray={globalVars.name} getDataFunction={getData} clickFunction={handleClick}/>
      <ReadyMainContainer 
      showMenuVariable={globalVars.showMenu}
      dataArray={globalVars.data}
      category={"name"}
      clickFunction={handleClick}
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
      dataText10={"Residents: "}
      />
      </>
      :
      <>
      <ReadyMainMenuTitle screenWidthVariable1={globalVars.mobile} screenWidthVariable2={globalVars.isMobile} categoryTitle="Planet"/>
      <ReadyMenuContainer apiBug={false} nameVariable={globalVars.name} getDataFunction={getData}/>
      </>}
    </MainMenuContainer>
  )
};

export default PlanetsMainMenu;