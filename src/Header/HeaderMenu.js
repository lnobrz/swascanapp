import React from 'react';
import { MobileMenuLogo } from '../Logo/Logo';
import {DesktopMenu, MobileClosedMenu, MobileOpenedMenu} from './HeaderMenuComponents';
import { makeResponsible } from '../Global/GlobalComponents';

const Menu = () => {

  const mobile = window.matchMedia('(max-width: 744px)').matches;
  const [isMobile, setIsMobile] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useLayoutEffect(() => {makeResponsible(setWindowWidth, windowWidth, setIsMobile)}, [isMobile, windowWidth]);

  const [openedMenu, setOpenedMenu] = React.useState(false);

  const handleClick = () => {
    setOpenedMenu(!openedMenu);
  };
  
  const ref = React.useRef();

  React.useEffect(() => {
    const clickOutsideMobileMenu = (event) => {
      if(openedMenu && ref.current && !ref.current.contains(event.target)){
        setOpenedMenu(false);
      }
    }
    document.addEventListener('mousedown', clickOutsideMobileMenu);
    return () => {
      document.removeEventListener('mousedown', clickOutsideMobileMenu);
    }
  })

  return(
    (mobile && isMobile === true ?
          
    (openedMenu === true ?
      <>
        <MobileMenuLogo />
        <div ref={ref}>
          <MobileOpenedMenu clickFunction={handleClick}/>
        </div>
      </>
      :
      <MobileClosedMenu clickFunction={handleClick}/>
    )
      :
      <DesktopMenu />
    )
)
};

export default Menu;
