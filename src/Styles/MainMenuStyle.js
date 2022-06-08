import styled from "styled-components";

export const MainMenuContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  background-color: #040404;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`;

export const MainMenuTitle = styled.h5`
  font-family: 'Oxanium', cursive;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 6em;
  letter-spacing: 0.01em;
  color: #1B1A19;
  margin-top: 60px;
  margin-bottom: 60px;
  margin-right: 144px;
  margin-left: 102px;
`;

export const MainMenuNav = styled.nav`
  margin-right: 102px;
`;
export const MainMenuUl = styled.nav`
  display: flex;
  flex-flow: row wrap;
`;

export const MainMenuItemContainer = styled.div`
  margin: 15px;
  filter: drop-shadow(0px 2px 4px rgba(27, 26, 25, 0.25));
`;

export const MainMenuItemImage = styled.div`
  width: 120px;
  height: 240px;
  background-size: cover;
`;

export const MainMenuItemTitle = styled.h2`
  font-family: 'Oxanium', cursive;
  font-size: 0.62em;
  font-weight: 800;
  color: #FFFFFC;
  text-transform: uppercase;
`;