import React from 'react';

/* importing logo jsx and footer styled components */
import Logo from './SideComponents/Logo';
import { FooterMenuTitle, FooterMenuItem, FooterRights } from './Styles/FooterStyle';

const Footer = () => {
  return(
  <footer>
    <FooterMenuTitle>Menu</ FooterMenuTitle>
    <nav>
      <ul>
        <FooterMenuItem>Home</ FooterMenuItem>
        <FooterMenuItem>Characters</ FooterMenuItem>
        <FooterMenuItem>Movies</ FooterMenuItem>
        <FooterMenuItem>Planets</ FooterMenuItem>
        <FooterMenuItem>Species</ FooterMenuItem>
        <FooterMenuItem>About</ FooterMenuItem>
      </ul>
      <FooterMenuTitle>Contact-me</ FooterMenuTitle>
      <ul>
        <FooterMenuItem>www.linkedin.com/in/lucas-nobrz</ FooterMenuItem>
        <FooterMenuItem>lucasnobre37@outlook.com</ FooterMenuItem>
        <FooterMenuItem>https://github.com/lnobrz</ FooterMenuItem>
      </ul>
    </nav>
    <Logo />
    <FooterRights>Lucas Nobre & SWASCAN. 2022. Alguns direitos reservados</ FooterRights>
  </footer>
  );
};

export default Footer;
