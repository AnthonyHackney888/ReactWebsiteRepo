import React, { useState} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  NavIcon2,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  A
} from './Navbar.elements';
/* <NavItem>
              
<NavLinks to='/Contact' onClick={closeMobileMenu}>
                Contact
                </NavLinks>
    </NavItem>            
*/
function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  

  


  return (
    <>
      <IconContext.Provider value={{ color: 'teal' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/ReactWebsiteRepo' onClick={handleClick} click={click}>
              <NavIcon />
              AHBCODE
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/ReactWebsiteRepo' onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <A target="_blank" href="https://github.com/AnthonyHackney888"><NavIcon2/>Github</A>
              </NavItem>
             
              <NavItem>
                <NavLinks to='/About' onClick={closeMobileMenu}>
                About
                </NavLinks>
              </NavItem>   
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
