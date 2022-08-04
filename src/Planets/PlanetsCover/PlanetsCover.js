import React from 'react';

/* Cover styled components import */
import { CoverTitle, CoverText, CoverContainer } from '../../Home/HomeCover/CoverStyles';

const PlanetsCover = () => {
  return (
  <CoverContainer>
    <header>
      <CoverTitle>Planets</ CoverTitle>
    </header>
    <CoverText>
      Scroll bellow to travel around the most incredibles planets in the whole universe. Just pick one in the menu bellow and have fun!
    </ CoverText>
  </ CoverContainer>
);
};

export default PlanetsCover;
