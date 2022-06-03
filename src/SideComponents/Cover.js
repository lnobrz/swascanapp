import React from 'react';

/* Cover styled components import */
import { CoverTitle, CoverText, CoverContainer } from '../Styles/CoverStyle';

const Cover = () => {
  return (
  <CoverContainer>
    <header>
      <CoverTitle>The Star Wars <br />information you<br /> need to know</ CoverTitle>
    </header>
    <CoverText>
    Swascan is a project who displays Star Wars informations into a website. These informations are being fetched from SWAPI, an API that contains SW infos.
    </ CoverText>
  </ CoverContainer>
);
};

export default Cover;
