import React from 'react';
import styled from 'styled-components';
import { pizzaColor } from '../style/Color';
import Title from '../style/title';

const NavBarStyle = styled.div`
  background-color: ${pizzaColor};
  position: fixed;
  width: 100%;
  z-index: 10;
`;

const Logo = styled(Title)`
  color: white;
  font-size: 30px;
  text-shadow: 1px 1px 4px brown;
`;

function NavBar() {
  return (
    <NavBarStyle>
      <Logo>Pizza House</Logo>
    </NavBarStyle>
  );
}

export default NavBar;
