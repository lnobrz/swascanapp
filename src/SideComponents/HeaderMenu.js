import React from 'react';
import {Logo} from './Logo';

/* Header menu styled components import */
import { MenuItemsStyle, MenuStyle } from '../Styles/MenuStyle';
import {MenuNav} from "../Styles/MenuStyle";

const HeaderMenu = () => {
  return(
    <MenuNav>
      < Logo />
      <MenuStyle>
        <MenuItemsStyle>Home</ MenuItemsStyle>
        <MenuItemsStyle>Characters</ MenuItemsStyle>
        <MenuItemsStyle>Movies</ MenuItemsStyle>
        <MenuItemsStyle>Planets</ MenuItemsStyle>
        <MenuItemsStyle>Species</ MenuItemsStyle>
      </ MenuStyle>
    </MenuNav>
  );
};

export default HeaderMenu;
