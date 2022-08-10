import React from 'react';

/* Cover styled components import */
import { 
  CoverTitle, 
  CoverText, 
  CoverContainer 
} 
from './CoverStyles';

const Cover = () => {
  return (
  <CoverContainer>
    <header>
      <CoverTitle>The Star Wars <br />informations you<br /> need to know</ CoverTitle>
    </header>
    <CoverText>
    Swascan is a project that displays Star Wars informations into a website. These informations are being fetched from SWAPI, an API that stores hundreds of Star Wars data.
    </ CoverText>
  </ CoverContainer>
);
};

export default Cover;
