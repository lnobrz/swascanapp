import styled from "styled-components";
import footerAreaBg from "../Images/Backgrounds/footerBg.png"
import croppedFooterAreaBg from "../Images/Backgrounds/croppedFooterBg.png"

export const FooterContainer = styled.footer`
  background-image: url(${footerAreaBg});
  max-width: 100%;
  height: 290.18;
  background-size: cover;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  @media (max-width: 606px){
    background-image: url(${croppedFooterAreaBg});
    max-width: 100%;
    flex-flow: column wrap;
    align-content: flex-start;
  }

`;

export const FooterMenuFlex = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1.87em;
  margin: 30px;

  @media (max-width: 606px){
    margin: 20px 30px;
    order: 2;
  }
`;

export const FooterMenuTitle = styled.h5`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1em;
  color: #F1F1EB;
  text-transform: uppercase;
  margin: 10px 0px;

  @media (max-width: 606px){
    font-size: 0.62em;
  }
`;

export const FooterMenuItem = styled.li`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 0.87em;
  color: #CFCFC9;
  margin-bottom: 4px;

  @media (max-width: 606px){
    font-size: 0.37em;
  }
`;

export const FooterRights = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 0.62em;
  padding: 10px;
  background-color: #040404;
  color: #CFCFC9;
  text-align: center;
`;