import styled from "styled-components";

export const CoverContainer = styled.section`
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 28px;
  margin-right: 7.31em;
  margin-bottom: 6em;
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
  margin-bottom: 0.31em;
  display: flex;
  flex-wrap: wrap;
`;

export const CoverText = styled.p`
  max-width: 40.49em;
  background-color: #040404;
  height: 3.75em;
  border-radius: 4px;
  padding: 0.31em 1.62em;
  font-family: 'Roboto', sans-serif;
  font-size: 1.25em;
  line-height: 1.56em;
  letter-spacing: 5%;
  color: #CFCFC9;
  text-align: end;
  margin-bottom: 100px;
  display: flex;
  flex-wrap: wrap;
`;