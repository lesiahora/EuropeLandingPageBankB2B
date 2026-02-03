import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;

const HeroSection = styled.section`
  background-color: #f8f5ee;
  color: #1a1a1a;
  padding: 6rem 2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 5rem 1.5rem;
  }
  
  @media (max-width: 425px) {
    padding: 3.5rem 1rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 300;
  color: #1a1a1a;
  font-family: 'Cormorant', serif;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 425px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.125rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.7;
  
  @media (max-width: 425px) {
    font-size: 1rem;
  }
`;

const ContentSection = styled.section`
  padding: 5rem 2rem;
  max-width: 900px;
  margin: 0 auto;
  background-color: #ffffff;
  
  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
  
  @media (max-width: 425px) {
    padding: 3rem 1rem;
  }
`;

const LegalContent = styled.div`
  background: #f8f5ee;
  padding: 3rem;
  border-radius: 0.5rem;
  border: 1px solid #e5e5e5;
  
  h2 {
    font-size: 1.875rem;
    margin-bottom: 1rem;
    margin-top: 2rem;
    color: #1a1a1a;
    font-weight: 300;
    font-family: 'Cormorant', serif;
    
    &:first-child {
      margin-top: 0;
    }
  }
  
  h3 {
    font-size: 1.3rem;
    margin-bottom: 0.75rem;
    margin-top: 1.5rem;
    color: #1a1a1a;
    font-weight: 400;
  }
  
  p {
    color: #666;
    line-height: 1.8;
    margin-bottom: 1rem;
    font-size: 1.0625rem;
  }
  
  ul {
    margin: 1rem 0;
    padding-left: 2rem;
    color: #666;
    
    li {
      margin-bottom: 0.5rem;
      line-height: 1.6;
    }
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
  
  @media (max-width: 425px) {
    padding: 1.5rem;
  }
`;

const LastUpdated = styled.p`
  font-style: italic;
  color: #999 !important;
  font-size: 0.9rem;
  margin-bottom: 2rem !important;
`;

const Legal: React.FC = () => {
  return (
    <Container>
      <Header />
      
      <HeroSection>
        <HeroTitle>Privacy Policy</HeroTitle>
        <HeroSubtitle>
          Your privacy is important to us
        </HeroSubtitle>
      </HeroSection>
      
      <ContentSection>
        <LegalContent>
          <LastUpdated>Last Updated: January 22, 2026</LastUpdated>
          
          <h2>1. Introduction</h2>
          <p>
            EU Business Solutions ("we," "our," or "us") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
            when you visit our website or use our services.
          </p>
          
          <h2>2. Information We Collect</h2>
          <p>
            We may collect information about you in a variety of ways. The information we may collect 
            includes:
          </p>
          <ul>
            <li>Personal data such as your name, email address, and contact information that you voluntarily provide to us</li>
            <li>Business information related to your company and industry</li>
            <li>Information about how you use our website and services</li>
          </ul>
          
          <h2>3. Use of Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul>
            <li>Provide and maintain our services</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Send you updates and information about our services</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>
          
          <h2>4. Disclosure of Your Information</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. 
            We may share your information only in the following circumstances:
          </p>
          <ul>
            <li>With your consent</li>
            <li>To comply with legal obligations</li>
            <li>To protect and defend our rights and property</li>
            <li>With trusted service providers who assist us in operating our business</li>
          </ul>
          
          <h2>5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal 
            information against unauthorized access, alteration, disclosure, or destruction. However, 
            no method of transmission over the Internet or electronic storage is completely secure.
          </p>
          
          <h2>6. Your Rights</h2>
          <p>
            You have the right to:
          </p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Object to processing of your information</li>
            <li>Request restriction of processing</li>
          </ul>
          
          <h2>7. Cookies</h2>
          <p>
            Our website may use cookies to enhance user experience. You can choose to disable 
            cookies through your browser settings, though this may affect the functionality of 
            certain features.
          </p>
          
          <h2>8. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for 
            the privacy practices or content of these external sites.
          </p>
          
          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any 
            changes by posting the new Privacy Policy on this page and updating the "Last Updated" 
            date.
          </p>
          
          <h2>10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p>
            <strong>Northbridge Strategic Solutions</strong><br />
            Business Centre, Deansgate, Manchester, United Kingdom<br />
            Phone: +44 161 000 3842
          </p>
        </LegalContent>
      </ContentSection>
      
      <Footer />
    </Container>
  );
};

export default Legal;