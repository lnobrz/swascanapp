import React from 'react';

/* importing logo jsx and footer styled components */
import { FooterLogo} from './SideComponents/Logo';
import { FooterMenuTitle, FooterMenuItem, FooterRights, FooterContainer, FooterMenuFlex } from './Styles/FooterStyle';

const Footer = () => {
  return(<>
  <FooterContainer>
    <FooterMenuFlex>
    <div>
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
      </nav>
      </div>
      <div>
      <FooterMenuTitle>Contact-me</ FooterMenuTitle>
      <nav>
      <ul>
        <FooterMenuItem>www.linkedin.com/in/lucas-nobrz</ FooterMenuItem>
        <FooterMenuItem>lucasnobre37@outlook.com</ FooterMenuItem>
        <FooterMenuItem>https://github.com/lnobrz</ FooterMenuItem>
      </ul>
    </nav>
    </div>
    </ FooterMenuFlex>
    <FooterLogo />
  </ FooterContainer>
  <FooterRights>Lucas Nobre & SWASCAN. 2022. Alguns direitos reservados</ FooterRights>
  </>
  );
};

export default Footer;
