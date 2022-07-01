import styled from "styled-components";
import TopAreaBg from "../Images/Backgrounds/bodyBg.jfif";

export const LogoStyle = styled.h1`
  background: -webkit-linear-gradient(180deg, #FFFFFC 0%, #F9FC72 100%);;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Oxanium', cursive, "Arial", sans-serif;
  font-weight: bold;
  font-size: 2.25em;
  line-height: 36px;
  letter-spacing: 10%;
  text-align: start;
  text-transform: uppercase;
  margin: 30px;
`;

export const FooterLogoStyle = styled.h1`
  background: -webkit-linear-gradient(180deg, #FFFFFC 0%, #F9FC72 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Oxanium', cursive, "Arial", sans-serif;
  font-weight: bold;
  font-size: 2.25em;
  line-height: 36px;
  letter-spacing: 10%;
  text-align: end;
  text-transform: uppercase;
  flex-wrap: wrap;
  margin: 30px;
`;

export const MobileLogoContainer = styled.div`
    background-image: url(${TopAreaBg});
    background-size: cover;
    background-repeat: no-repeat;
`;

export const MobileMenuLogoStyle = styled.h1`
  background: -webkit-linear-gradient(180deg, #FFFFFC 0%, #F9FC72 100%);;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Oxanium', cursive, "Arial", sans-serif;
  font-weight: bold;
  font-size: 2.25em;
  line-height: 36px;
  letter-spacing: 10%;
  text-align: start;
  text-transform: uppercase;
  padding: 30px;
`;