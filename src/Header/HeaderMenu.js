import React from 'react';
import { MobileMenuLogo } from '../Logo/Logo';
import {DesktopMenu, MobileClosedMenu, MobileOpenedMenu} from './HeaderMenuComponents';
import { makeResponsible } from '../Global/GlobalComponents';
import { GlobalContext } from '../Global/GlobalComponents';

const Menu = () => {

  const globalVars = React.useContext(GlobalContext);

  React.useLayoutEffect(() => {makeResponsible(globalVars.setIsMobile)}, [globalVars.setIsMobile]);

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

  React.useEffect(() => {
    window.innerWidth >= 746 ? globalVars.setIsMobile(false) : globalVars.setIsMobile(true);
  }, []);

  return(
    (globalVars.mobile && globalVars.isMobile === true ?
          
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
