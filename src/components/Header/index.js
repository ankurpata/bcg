// Header.js
import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`;
const NavHeader = styled.div`
  max-width: 1010px;
  padding: 26px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;
const NavLeft = styled.div`
  width: 60%;
  text-align: left;
  display: flex;
  align-items:center;
`;
const NavRight = styled.div`
  width: 30%;
  text-align: right;
  svg {
    margin-right: 20px;
  }
`;
const FooterLogo = styled.img`
  text-align: center;
  width: 40px; 
`;
const Heading = styled.p` 
  display:inline-block;
  font-weight:bold;
  font-size: 24px; 
`;
const Header = ({ }) => {

  return (
    <Nav>
      <NavHeader>
        <NavLeft>
          <FooterLogo src={require('../../assets/images/logo.png')} />
          <Heading>BCG Memo Board</Heading>
        </NavLeft>
        <NavRight>

        </NavRight>
      </NavHeader>
    </Nav>
  );
};
export default Header;