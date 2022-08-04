import React from 'react';

/* Cover styled components import */
import { CoverTitle, CoverText, CoverContainer } from '../../Home/HomeCover/CoverStyles';

const MoviesCover = () => {
  return (
  <CoverContainer>
    <header>
      <CoverTitle>Movies</ CoverTitle>
    </header>
    <CoverText>
      Is this section you will get to know everything about these saga's movies. Take a look bellow and select the movie that you want.
    </ CoverText>
  </ CoverContainer>
);
};

export default MoviesCover;
