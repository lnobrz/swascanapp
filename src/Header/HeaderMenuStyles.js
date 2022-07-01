import styled from "styled-components";
import TopAreaBg from "../Images/Backgrounds/bodyBg.jfif";

export const MenuNav = styled.nav`
  background-image: url(${TopAreaBg});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const MobileMenuNav = styled.nav`
    position: fixed;
    touch-action: none;
    top: 0px;
    right: 0px;
    width: 37.5%;
    height: 100%;
    z-index: 1;
    background-color: #040404;
    display: flex;
    flex-flow: column wrap;
    transition: all .5s;
    animation-name: openingMenu;
    animation-duration: 0.2s;
    animation-timing-function: linear;
    transform-origin: right;

   @keyframes openingMenu {
    from{transform: scaleX(95%)}
    to{transform: scaleX(100%)}
   }
`;

export const MenuStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 30px;

  @media (max-width: 744px){
    flex-flow: column wrap;
  };
`;

export const MobileMenuButton = styled.span`
  display: flex;
  flex-flow: row wrap;
  width: 30px;
  height: 15px;
  margin: 30px;
`

export const MobileMenuContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-bottom: 30px;
`;
export const CloseMobileMenuButton = styled.span`
  width: 15px;
  height: 15px;
  align-self: center;
`;

export const MobileMenuHr = styled.span`
  width: 100%;
  height: 1px;
  background-color: #1B1A19;
  margin: 0px 10px;
`;

export const MobileMenuTitle = styled.h5`
  font-family: "Roboto", sans-serif;
  font-weight: 800;
  font-size: 15px;
  color: #1B1A19;
  text-transform: uppercase;
`;

export const MenuItemsStyle = styled.li`
  font-family: "Roboto", sans-serif;
  color: #E5E5E0;
  font-weight: 400;
  font-size: 1em;
  line-height: 1.25em;
  letter-spacing: 10%;
  text-align: start;
  text-transform: uppercase;
  display: flex;
  flex-flow: row nowrap;
  align-content: flex-start;
  margin: 10px !important;

  &:hover{
    font-size: 1.1em;
    font-weight: 500;
  }

  @media (max-width: 744px){
    margin: 5px 0px !important;
  }
`;