import React from 'react';

/* importing logo jsx and footer styled components */
import { FooterLogo} from '../Logo/Logo';
import { FooterRights, FooterContainer } from './FooterStyle';

const Footer = () => {
  return(<>
    <FooterContainer>
        <FooterLogo />
    </ FooterContainer>
  <FooterRights>Lucas Nobre. 2022. Some rights reserveds.</ FooterRights>
  </>
  );
};

export default Footer;
