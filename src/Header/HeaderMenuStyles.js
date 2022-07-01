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
    top: 0px;
    right: 0px;
    width: 50%;
    height: 100vh;
    max-height: -webkit-fill-avaliable;
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
  padding: 0px 0px 20px 20px;
  width: 30px;
  height: 30px;
  margin: 30px;
`

export const MobileMenuContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  margin-bottom: 30px;
`;
export const CloseMobileMenuButton = styled.span`
  width: 30px;
  height: 30px;
`;

export const MobileMenuHr = styled.span`
  width: 100%;
  height: 1px;
  background-color: #1B1A19;
  margin: 0px 10px;
`;

export const MenuItemsStyle = styled.li`
  font-family: "Roboto", sans-serif;
  color: #E5E5E0;
  font-weight: 400;
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