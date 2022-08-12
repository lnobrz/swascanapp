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
  getDataFunction,
  handleClick,
} 
from "../../Global/GlobalComponents";

const CharactersMainMenu = () => {

  const globalVars = React.useContext(GlobalContext);
  const [showMenu, setShowMenu] = React.useState(true);
  const handleClick = () => {
    setShowMenu(!showMenu)
  };
  
  React.useEffect(() => {
    setShowMenu(showMenu);
    globalVars.setName(false);
    window.innerWidth >= 746 ? globalVars.setIsMobile(false) : globalVars.setIsMobile(true)
  }, []);

  React.useEffect(() => getNamesArray([
    "https://swapi.dev/api/people/?page=1",
    "https://swapi.dev/api/people/?page=2",
    "https://swapi.dev/api/people/?page=3",
    "https://swapi.dev/api/people/?page=4",
    "https://swapi.dev/api/people/?page=5",
    "https://swapi.dev/api/people/?page=6",
    "https://swapi.dev/api/people/?page=7",
    "https://swapi.dev/api/people/?page=8",
    "https://swapi.dev/api/people/?page=9",
  ], 
  globalVars.setName, 
  "name"
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
      'people', 
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
      apiBug={true} 
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
      dataText2={"Birth year: "}
      dataInfo2={globalVars.data.birth_year}
      dataText3={"Gender: "}
      dataInfo3={globalVars.data.gender}
      dataText4={"Height: "}
      dataInfo4={globalVars.data.height}
      dataText5={"Mass: "}
      dataInfo5={globalVars.data.mass}
      dataText6={"Eye Color: "}
      dataInfo6={globalVars.data.eye_color}
      dataText7={"Skin Color: "}
      dataInfo7={globalVars.data.skin_color}
      dataText8={"Hair Color: "}
      dataInfo8={globalVars.data.hair_color}
      dataText10={""}
      dataInfoArray1={false}
      dataText11={"Movies: "}
      dataInfoArray2={globalVars.data.films}
      dataText12={""}
      dataInfoArray3={false}
      dataText13={"Species: "}
      dataInfoArray4={globalVars.data.species}
      />
      </>
      :
      <>
      <ReadyMainMenuTitle 
      screenWidthVariable1={globalVars.mobile} 
      screenWidthVariable2={globalVars.isMobile} 
      categoryTitle="Character"
      />
      <ReadyMenuContainer 
      apiBug={true} 
      nameVariable={globalVars.name} 
      getDataFunction={getData}/>
      </>}
    </MainMenuContainer>
  )
};

export default CharactersMainMenu;