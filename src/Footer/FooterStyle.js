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
  justify-content: flex-end;
  
  @media (max-width: 606px){
    background-image: url(${croppedFooterAreaBg});
    max-width: 100%;
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