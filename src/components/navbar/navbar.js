import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  position: absolute;
  width: 100%;
  height: 100px;
  background: rgba(0,0,0, 0);
  display: flex;
  flex-direction: column;
  padding-top: 25px;
  z-index: 99;
`;

export const NavbarContainerLeft = styled.div`
    flex: 40%;
    display: flex;
    justify-content: center;
    font-weight: 700;
`;
export const NavbarContainerRight = styled.div`
    flex: 65%;
    display: flex;
    justify-content: center;
`;

export const NavLinks = styled(Link)`
    color: white;
    font-size: 30px;
    text-decoration: none;
    margin: 25px;
`;

export const LinkContainer = styled.div`
    display: flex;
`;
export const NavLinkContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export function Navbar(){
    return(
        <NavbarContainer>
        <NavLinkContainer>
            
            <NavbarContainerLeft>
                <LinkContainer>
                    <NavLinks to='/'>Shubham Vyas</NavLinks>
                </LinkContainer>
            </NavbarContainerLeft>
        
            <NavbarContainerRight>
                <LinkContainer>
                    <NavLinks to='/about' >About</NavLinks>
                    <NavLinks to='/contact'>Social</NavLinks>
                    <NavLinks to='/portfolio'>Portfolio</NavLinks>
                    <NavLinks to='/sauce'>Source Code</NavLinks>
                </LinkContainer>
            </NavbarContainerRight>
        </NavLinkContainer>
        
        </NavbarContainer>
    );
}
