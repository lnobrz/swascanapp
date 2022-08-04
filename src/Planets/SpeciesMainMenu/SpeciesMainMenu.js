import React from "react";
import { MainMenuContainer } from "../../../Home/HomeMainMenu/MainMenuStyles";
import { GlobalContext } from "../../../Global/GlobalComponents";
import { getNamesArray, makeResponsible, ReadyDataMenu, ReadyMainContainer, ReadyMenuContainer, ReadyMainMenuTitle,} from "../../../Global/GlobalComponents";

const SpeciesMainMenu = () => {

  const pagesArray = [
    "https://swapi.dev/api/species/?page=1",
    "https://swapi.dev/api/species/?page=2",
    "https://swapi.dev/api/species/?page=3",
    "https://swapi.dev/api/species/?page=4",
  ];

  const [name, setName] = React.useState(false);
  React.useState(() => getNamesArray(pagesArray, setName, "name"), []);

  const globalVars = React.useContext(GlobalContext);
  React.useLayoutEffect(() => {makeResponsible(globalVars.setWindowWidth, globalVars.windowWidth, globalVars.setIsMobile)}, [globalVars.isMobile, globalVars.setIsMobile, globalVars.windowWidth, globalVars.setWindowWidth]);
  

  const [data, setData] = React.useState(null);
  const getData = async (event) => {
  const itemId = event.currentTarget.id;
  const request = await fetch (`https://swapi.dev/api/species/${itemId}/`);
  const json = await request.json();
  
  setData(json);
  globalVars.setShowMenu(false);
};

console.log(data);

  const handleClick = () => {
    globalVars.setShowMenu(!globalVars.showMenu);
  };

  return(
    <MainMenuContainer className={globalVars.showMenu === false ? "showData" : ""}>
      
      {globalVars.showMenu === false ?
      <>
      <ReadyDataMenu nameArray={name} getDataFunction={getData} clickFunction={handleClick}/>
      <ReadyMainContainer 
      showMenuVariable={globalVars.showMenu}
      dataArray={data}
      category={"name"}
      clickFunction={handleClick}
      dataText1={"Name: "}
      dataInfo1={data.name}
      dataText2={"Classification: "}
      dataInfo2={data.classification}
      dataText3={"Average Height: "}
      dataInfo3={data.average_height}
      dataText4={"Skin Colors: "}
      dataInfo4={data.skin_colors}
      dataText5={"Hair Color: "}
      dataInfo5={data.hair_colors}
      dataText6={"Eye Colors: "}
      dataInfo6={data.eye_colors}
      dataText7={"Average Lifespan: "}
      dataInfo7={data.average_lifespan}
      dataText8={"Homeworld: "}
      dataInfo8={data.homeworld}
      dataText9={"Language: "}
      dataInfo9={data.language}
      dataText10={"People: "}
      dataInfoArray1={data.residents}
      dataText11={"Films: "}
      dataInfoArray2={data.films}
      dataText12={""}
      dataInfoArray3={[]}
      />
      </>
      :
      <>
      <ReadyMainMenuTitle screenWidthVariable1={globalVars.mobile} screenWidthVariable2={globalVars.isMobile} categoryTitle="Specie"/>
      <ReadyMenuContainer nameVariable={name} getDataFunction={getData}/>
      </>}
    </MainMenuContainer>
  )
};

export default SpeciesMainMenu;