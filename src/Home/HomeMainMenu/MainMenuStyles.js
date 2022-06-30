import styled from "styled-components";

export const MainMenuContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  background-color: #040404;
  justify-content: space-between;
  align-content: center;
  align-items: center;

  @media (max-width: 606px){
    display: flex;
    flex-flow: column wrap;
    justify-content: space-around;
    align-content: space-around;
  }
`;

export const MainMenuTitle = styled.h5`
  font-family: 'Oxanium', cursive;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 6em;
  letter-spacing: 0.01em;
  color: #1B1A19;
  margin: 30px;

  @media (max-width: 2000px) {
    font-size: 5em;
  }

  @media (max-width: 1122px) {
    font-size: 6em;
  }

  @media (max-width: 948px) {
    font-size: 5em;
  }

  @media (max-width: 871px) {
    font-size: 4em;
  }

  @media (max-width: 792px) {
    font-size: 3em;
  }

  @media (max-width: 635px) {
    font-size: 2em;
  }

  @media (max-width: 606px) {
    font-size: 3em;
    text-align: center;
    margin-bottom: 15px;
  }
`;

export const MainMenuNav = styled.nav`
  margin: 30px;
  max-width: 100%;

  @media (max-width: 606px){
    margin: 0px 30px 30px 30px;
  };
`;

export const MainMenuUl = styled.nav`
  display: flex;
  flex-flow: row wrap;

  @media (max-width: 1122px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    margin: 0px 30px 30px 30px;
  }
`;

export const MainMenuItemContainer = styled.div`
  margin: 5px;
  filter: drop-shadow(0px 2px 4px rgba(27, 26, 25, 0.25));
`;

export const MainMenuItemImage = styled.div`
  width: 136px;
  height: 240px;
  background-size: cover;

  @media (max-width: 1122px) {
    width: 168px;
    height: 288px;
  };

  @media (max-width: 948px) {
    width: 152px;
    height: 256px;
  }

  @media (max-width: 871px) {
    width: 136px;
    height: 224px;
  }

  @media (max-width: 792px) {
    width: 120px;
    height: 192px;
  }

  @media (max-width: 606px) {
    width: 160px;
    height: 240px;
  }
`;

export const MainMenuItemTitle = styled.h2`
  width: 100%;
  font-family: 'Oxanium', cursive;
  font-size: 0.62em;
  font-weight: 800;
  color: #FFFFFC;
  text-transform: uppercase;
`;