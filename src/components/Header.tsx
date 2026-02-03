import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #f9f9f9;
  color: #1a1a1a;
  padding: 1.25rem 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid #d7d7d6;
  
  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
  
  @media (max-width: 425px) {
    padding: 0.875rem 1rem;
  }
  
  @media (max-width: 320px) {
    padding: 0.75rem 0.875rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-size: 1.9rem;
  font-weight: 400;
  color: #000000;
  text-decoration: none;
  font-family: 'Cormorant', serif;
  letter-spacing: 0.02em;
  
  &:hover {
    color: #000000;
  }
  
  @media (max-width: 768px) {
    font-size: 1.625rem;
  }
  
  @media (max-width: 425px) {
    font-size: 1.35rem;
  }
  
  @media (max-width: 320px) {
    font-size: 1.2rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;
  
  @media (max-width: 768px) {
    gap: 1.5rem;
  }
  
  @media (max-width: 600px) {
    gap: 1rem;
  }
  
  @media (max-width: 425px) {
    gap: 0.75rem;
  }
`;

const NavLink = styled(Link)<{ $hideOnMobile?: boolean }>`
  color: #68696f;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9375rem;
  transition: color 0.2s;
  
  &:hover {
    color: #666;
  }
  
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
  
  @media (max-width: 600px) {
    ${props => props.$hideOnMobile && 'display: none;'}
  }
  
  @media (max-width: 425px) {
    font-size: 0.8125rem;
  }
`;

const CTAButton = styled(Link)`
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 0.625rem 1.5rem;
  border-radius: 0;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9375rem;
  transition: background-color 0.2s;
  white-space: nowrap;
  
  &:hover {
    background-color: #333;
  }
  
  @media (max-width: 768px) {
    padding: 0.5rem 1.25rem;
    font-size: 0.875rem;
  }
  
  @media (max-width: 425px) {
    padding: 0.5rem 0.875rem;
    font-size: 0.8125rem;
  }
  
  @media (max-width: 375px) {
    padding: 0.4375rem 0.75rem;
    font-size: 0.75rem;
  }
  
  .button-text-full {
    @media (max-width: 600px) {
      display: none;
    }
  }
  
  .button-text-short {
    display: none;
    @media (max-width: 600px) {
      display: inline;
    }
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <Logo to="/">Northbridge Strategic Solutions</Logo>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about" $hideOnMobile>About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact" $hideOnMobile>Contact</NavLink>
          <CTAButton to="/contact">
            <span className="button-text-full">Get Started</span>
            <span className="button-text-short">Start</span>
          </CTAButton>
        </NavLinks>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
