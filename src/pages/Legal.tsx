import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: #ccc;
  max-width: 800px;
  margin: 0 auto;
`;

const ContentSection = styled.section`
  padding: 4rem 2rem;
  max-width: 900px;
  margin: 0 auto;
`;

const LegalContent = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    margin-top: 2rem;
    color: #1a1a2e;
    
    &:first-child {
      margin-top: 0;
    }
  }
  
  h3 {
    font-size: 1.3rem;
    margin-bottom: 0.75rem;
    margin-top: 1.5rem;
    color: #1a1a2e;
  }
  
  p {
    color: #666;
    line-height: 1.8;
    margin-bottom: 1rem;
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
            <strong>EU Business Solutions</strong><br />
            123 Business Street<br />
            London, EC1A 1BB<br />
            United Kingdom<br />
            Email: privacy@eubusiness.com<br />
            Phone: +44 20 1234 5678
          </p>
        </LegalContent>
      </ContentSection>
      
      <Footer />
    </Container>
  );
};

export default Legal;