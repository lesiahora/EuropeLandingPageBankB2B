import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #1c1c1b;
  color: #e5e5e5;
  padding: 4rem 2rem 2rem;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem 1.5rem;
  }
  
  @media (max-width: 425px) {
    padding: 2.5rem 1rem 1rem;
  }
  
  @media (max-width: 320px) {
    padding: 2rem 0.875rem 1rem;
  }
`;

const FooterContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-bottom: 2.5rem;
  }
  
  @media (max-width: 425px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 320px) {
    gap: 1.25rem;
    margin-bottom: 1.25rem;
  }
`;

const FooterSection = styled.div`
  h3 {
    color: #ffffff;
    margin-bottom: 1.25rem;
    font-size: 0.8125rem;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    
    @media (max-width: 768px) {
      font-size: 0.75rem;
      margin-bottom: 1.125rem;
    }
    
    @media (max-width: 425px) {
      font-size: 0.6875rem;
      margin-bottom: 1rem;
    }
    
    @media (max-width: 320px) {
      font-size: 0.625rem;
      margin-bottom: 0.875rem;
    }
  }
  
  &:first-child h3 {
    font-family: 'Cormorant', serif;
    font-weight: 400;
    text-transform: none;
    letter-spacing: 0.02em;
    font-size: 1.5rem;
    
    @media (max-width: 768px) {
      font-size: 1.35rem;
    }
    
    @media (max-width: 425px) {
      font-size: 1.2rem;
    }
    
    @media (max-width: 320px) {
      font-size: 1.125rem;
    }
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FooterLink = styled(Link)`
  color: #b3b3b3;
  text-decoration: none;
  transition: color 0.2s;
  font-size: 0.875rem;
  
  &:hover {
    color: #ffffff;
  }
  
  @media (max-width: 425px) {
    font-size: 0.8125rem;
  }
  
  @media (max-width: 320px) {
    font-size: 0.75rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  color: #b3b3b3;
  font-size: 0.875rem;
  
  p {
    margin: 0;
    line-height: 1.6;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
  
  @media (max-width: 425px) {
    font-size: 0.8125rem;
    gap: 0.5rem;
  }
  
  @media (max-width: 320px) {
    font-size: 0.75rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  
  img {
    width: 20px;
    height: 20px;
    margin-top: 0.25rem;
    flex-shrink: 0;
    filter: brightness(0) invert(1);
    
    @media (max-width: 425px) {
      width: 18px;
      height: 18px;
    }
    
    @media (max-width: 320px) {
      width: 16px;
      height: 16px;
    }
  }
  
  div {
    flex: 1;
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #333;
  color: #808080;
  font-size: 0.875rem;
  word-wrap: break-word;
  
  p {
    margin: 0;
    padding: 0 1rem;
  }
  
  a {
    color: #b3b3b3;
    text-decoration: none;
    
    &:hover {
      color: #ffffff;
    }
  }
  
  @media (max-width: 425px) {
    font-size: 0.8125rem;
    padding-top: 1.5rem;
    
    p {
      padding: 0 0.5rem;
    }
  }
  
  @media (max-width: 320px) {
    font-size: 0.75rem;
    padding-top: 1.25rem;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterSection>
          <h3>Northbridge Strategic Solutions</h3>
          <ContactInfo>
            <p>Professional business consulting and financial services to help your business thrive.</p>
          </ContactInfo>
        </FooterSection>
        
        <FooterSection>
          <h3>Quick Links</h3>
          <FooterLinks>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/services">Services</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <h3>Services</h3>
          <FooterLinks>
            <FooterLink to="/services">Business Consulting</FooterLink>
            <FooterLink to="/services">Financial Analysis</FooterLink>
            <FooterLink to="/services">Tax Advisory</FooterLink>
            <FooterLink to="/services">HR Solutions</FooterLink>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <h3>Contact</h3>
          <ContactInfo>
            <ContactItem>
              <img src="/images/location.png" alt="Location" />
              <div>
                <p>Business Centre, Deansgate</p>
                <p>Manchester</p>
                <p>United Kingdom</p>
              </div>
            </ContactItem>
            <ContactItem>
              <img src="/images/telephone.png" alt="Phone" />
              <div>
                <p>+44 161 000 3842</p>
              </div>
            </ContactItem>
            <ContactItem>
              <img src="/images/email.png" alt="Email" />
              <div>
                <p>info@northbridge.com</p>
              </div>
            </ContactItem>
          </ContactInfo>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        <p>© 2026 Northbridge Strategic Solutions. All rights reserved. | <Link to="/legal">Privacy Policy</Link></p>
      </Copyright>
    </FooterWrapper>
  );
};

export default Footer;
