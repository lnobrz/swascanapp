import React from 'react';

/* Cover styled components import */
import { CoverTitle, CoverText, CoverContainer } from '../../Home/HomeCover/CoverStyles';

const SpeciesCover = () => {
  return (
  <CoverContainer>
    <header>
      <CoverTitle>Species</ CoverTitle>
    </header>
    <CoverText>
      Pick up your lightsaber and let's discover the most incredibles informations about all the species that lives in this universe
    </ CoverText>
  </ CoverContainer>
);
};

export default SpeciesCover;
