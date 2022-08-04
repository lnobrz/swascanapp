import React from 'react';

/* Cover styled components import */
import { CoverTitle, CoverText, CoverContainer } from '../../Home/HomeCover/CoverStyles';

const CharactersCover = () => {
  return (
  <CoverContainer>
    <header>
      <CoverTitle>Characters</ CoverTitle>
    </header>
    <CoverText>
      Select a character in the bellow menu to read informations about them
    </ CoverText>
  </ CoverContainer>
);
};

export default CharactersCover;
