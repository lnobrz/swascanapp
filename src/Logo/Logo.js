import React from 'react';

/*Logo styled components import */
import {LogoStyle, FooterLogoStyle, MobileMenuLogoStyle, MobileLogoContainer} from './LogoStyles';

export const Logo = () => {
  return <LogoStyle>Swas<br />Can</ LogoStyle>;
};

export const MobileMenuLogo = () => {
  return (
  <MobileLogoContainer>
    <MobileMenuLogoStyle>
      Swas<br />Can
    </ MobileMenuLogoStyle>
  </ MobileLogoContainer>
  );
};

export const FooterLogo = () => {
  return <FooterLogoStyle>Swas<br />Can</ FooterLogoStyle>;
};