import styled from "styled-components";
import footerAreaBg from "../Images/footerBg.png"

export const FooterContainer = styled.footer`
  background-image: url(${footerAreaBg});
  max-width: 100%;
  height: 290.18;
  background-size: cover;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

export const FooterMenuFlex = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 30px;
  margin: 28px 0px 28px 102px;
`;

export const FooterMenuTitle = styled.h5`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1em;
  color: #F1F1EB;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const FooterMenuItem = styled.li`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 0.87em;
  color: #CFCFC9;
  margin-bottom: 4px;
`;

export const FooterRights = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 0.62em;
  padding: 4px;
  background-color: #040404;
  color: #CFCFC9;
  text-align: center;
`;

export const FooterLogo = styled.h1`
  background: -webkit-linear-gradient(180deg, #FFFFFC 0%, #F9FC72 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Oxanium', cursive, "Arial", sans-serif;
  font-weight: bold;
  font-size: 2.25em;
  line-height: 1em;
  letter-spacing: 10%;
  text-align: end;
  text-transform: uppercase;
`;