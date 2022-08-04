import React from "react";
import { MainMenuContainer } from "../../Home/HomeMainMenu/MainMenuStyles";
import { GlobalContext } from "../../Global/GlobalComponents";
import { getNamesArray, makeResponsible, ReadyDataMenu, ReadyMainContainer, ReadyMenuContainer, ReadyMainMenuTitle,} from "../../Global/GlobalComponents";

const CharactersMainMenu = () => {

  const globalVars = React.useContext(GlobalContext);
  
  React.useEffect(() => {
    globalVars.setData(null);
    globalVars.setShowMenu(true);
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
  ], globalVars.setName, "name"), [globalVars.setName]);

  React.useLayoutEffect(() => {makeResponsible(globalVars.setWindowWidth, globalVars.windowWidth, globalVars.setIsMobile)}, [globalVars.isMobile, globalVars.setIsMobile, globalVars.windowWidth, globalVars.setWindowWidth]);
  
  const getData = async (event) => {
    const itemId = event.currentTarget.id;
    const request = await fetch (`https://swapi.dev/api/people/${itemId}/`);
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
      <ReadyDataMenu apiBug={true} nameArray={globalVars.name} getDataFunction={getData} clickFunction={handleClick}/>
      <ReadyMainContainer 
      showMenuVariable={globalVars.showMenu}
      dataArray={globalVars.data}
      category={"name"}
      clickFunction={handleClick}
      dataText1={"Name: "}
      dataInfo1={globalVars.data.name}
      dataText2={"Birth year: "}
      dataInfo2={globalVars.data.birth_year}
      dataText3={"Homeworld: "}
      dataInfo3={globalVars.data.homeworld}
      dataText4={"Gender: "}
      dataInfo4={globalVars.data.gender}
      dataText5={"Height: "}
      dataInfo5={globalVars.data.height}
      dataText6={"Mass: "}
      dataInfo6={globalVars.data.mass}
      dataText7={"Eye Color: "}
      dataInfo7={globalVars.data.eye_color}
      dataText8={"Skin Color: "}
      dataInfo8={globalVars.data.skin_color}
      dataText9={"Hair Color: "}
      dataInfo9={globalVars.data.hair_color}
      dataText10={"Movies: "}
      dataInfoArray1={globalVars.data.films}
      dataText11={""}
      dataInfoArray2={[]}
      dataText12={""}
      dataInfoArray3={[]}
      />
      </>
      :
      <>
      <ReadyMainMenuTitle screenWidthVariable1={globalVars.mobile} screenWidthVariable2={globalVars.isMobile} categoryTitle="Character"/>
      <ReadyMenuContainer apiBug={true} nameVariable={globalVars.name} getDataFunction={getData}/>
      </>}
    </MainMenuContainer>
  )
};

export default CharactersMainMenu;