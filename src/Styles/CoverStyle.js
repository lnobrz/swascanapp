import styled from "styled-components";
import TopAreaBg from "../Images/bodyBg.jfif";

export const CoverContainer = styled.section`
  background-image: url(${TopAreaBg});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const CoverTitle = styled.h2`
  background: -webkit-linear-gradient(180deg, #FFFFFC 0%, #F9FC72 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Oxanium', cursive, "Arial", sans-serif;
  font-weight: 700;
  font-size: 3em;
  line-height: 1em;
  text-transform: uppercase;
  text-align: end;
  margin: 15px 30px;

  @media (max-width: 744px){
    font-size: 2.4em;
  }

  @media (max-width: 606px){
    font-size: 2em;
  }
`;

export const CoverText = styled.p`
  max-width: 580px;
  background-color: #050505;
  height: 75px;
  border-radius: 4px;
  padding: 5px 32px;
  font-family: 'Roboto', sans-serif;
  font-size: 1.25em;
  line-height: 1.56em;
  letter-spacing: 5%;
  color: #CFCFC9;
  text-align: end;
  align-content: center;
  margin: 0px 30px 30px 30px;

  @media (max-width: 780px){
    padding: 18px;
    font-size: 1.1em;
  }

  @media (max-width: 680px){
    width: auto;
    height: auto;
    text-align: center;
  }
  `;