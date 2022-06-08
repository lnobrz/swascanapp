import React from 'react';

/* importing header menu and cover jsx components */
import HeaderMenu from './SideComponents/HeaderMenu';
import Cover from './SideComponents/Cover';
import { TopArea } from './Styles/TopArea';

const Header = () => {
  return(
    <>
  <TopArea>
  <HeaderMenu />
  <Cover />
  </ TopArea>
  </>
  );
};

export default Header;
