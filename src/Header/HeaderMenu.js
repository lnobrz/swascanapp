import React from 'react';
import { MobileMenuLogo } from '../Logo/Logo';
import {DesktopMenu, MobileClosedMenu, MobileOpenedMenu} from './HeaderMenuComponents';

const Menu = () => {

  const [openedMenu, setOpenedMenu] = React.useState(false);
  const mobile = window.matchMedia('(max-width: 744px)').matches;
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
    (mobile === true ?
          
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
