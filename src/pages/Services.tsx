import React from 'react';
import { Link } from 'react-router-dom';
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
  padding: 8rem 2rem;
  
  @media (max-width: 768px) {
    padding: 5rem 1.5rem;
  }
  
  @media (max-width: 425px) {
    padding: 3.5rem 1rem;
  }
  
  @media (max-width: 320px) {
    padding: 2.5rem 0.875rem;
  }
`;

const HeroContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.15;
  font-weight: 300;
  color: #1a1a1a;
  font-family: 'Cormorant', serif;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 425px) {
    font-size: 2rem;
  }
  
  @media (max-width: 375px) {
    font-size: 1.75rem;
  }
  
  @media (max-width: 320px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.125rem;
  margin-bottom: 2rem;
  color: #666;
  line-height: 1.7;
  max-width: 800px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 425px) {
    font-size: 0.9375rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 320px) {
    font-size: 0.875rem;
    margin-bottom: 1.25rem;
  }
`;

const ServicesSection = styled.section`
  padding: 5rem 2rem;
  max-width: 1280px;
  margin: 0 auto;
  background-color: #ffffff;
  
  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
  
  @media (max-width: 425px) {
    padding: 3rem 1rem;
  }
  
  @media (max-width: 320px) {
    padding: 2.5rem 0.875rem;
  }
`;

const ServicesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const ServiceItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  padding: 2rem;
  background: #f8f5ee;
  border-radius: 0.5rem;
  border: 1px solid #e5e5e5;
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  @media (max-width: 425px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 320px) {
    padding: 1.25rem;
  }
`;

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  font-size: 1.75rem;
  padding: 0.5rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  @media (max-width: 425px) {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const ServiceContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ServiceTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 0.875rem;
  color: #1a1a1a;
  font-weight: 400;
  font-family: 'Cormorant', serif;
  
  @media (max-width: 425px) {
    font-size: 1.125rem;
  }
  
  @media (max-width: 320px) {
    font-size: 1rem;
  }
`;

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.7;
  margin-bottom: 1rem;
  font-size: 0.9375rem;
  
  @media (max-width: 425px) {
    font-size: 0.875rem;
  }
  
  @media (max-width: 320px) {
    font-size: 0.8125rem;
  }
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

const FeatureItem = styled.li`
  color: #666;
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  font-size: 0.9375rem;
  display: flex;
  align-items: center;
  
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background-image: url('/images/tick.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  
  @media (max-width: 425px) {
    font-size: 0.875rem;
  }
`;

const ServiceLink = styled(Link)`
  color: #68696f;
  font-weight: 500;
  text-decoration: none;
  font-size: 0.9375rem;
  
  &:hover {
    text-decoration: underline;
  }
  
  @media (max-width: 425px) {
    font-size: 0.875rem;
  }
`;

const CTASection = styled.section`
  padding: 5rem 2rem;
  background-color: #f8f5ee;
  color: #1a1a1a;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
  
  @media (max-width: 425px) {
    padding: 3rem 1rem;
  }
  
  @media (max-width: 320px) {
    padding: 2.5rem 0.875rem;
  }
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-weight: 300;
    font-family: 'Cormorant', serif;
    color: #1a1a1a;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
    
    @media (max-width: 425px) {
      font-size: 1.75rem;
    }
  }
  
  p {
    font-size: 1.125rem;
    margin-bottom: 2rem;
    color: #666;
    
    @media (max-width: 768px) {
      font-size: 1rem;
    }
    
    @media (max-width: 425px) {
      font-size: 0.9375rem;
    }
  }
`;

const WhiteButton = styled(Link)`
  background-color: #565449;
  color: white;
  padding: 0.75rem 1.75rem;
  border-radius: 0;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s;
  display: inline-block;
  font-size: 0.875rem;
  
  &:hover {
    background-color: #1f2d34;
    transform: translateY(-2px);
  }
  
  @media (max-width: 425px) {
    padding: 0.625rem 1.25rem;
    font-size: 0.8125rem;
  }
  
  @media (max-width: 320px) {
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
  }
`;

const Services: React.FC = () => {
  return (
    <Container>
      <Header />
      
      <HeroSection>
        <HeroContent>
          <HeroTitle>Our Services</HeroTitle>
          <HeroSubtitle>
            Comprehensive business solutions tailored to help your organization succeed
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>
      
      <ServicesSection>
        <ServicesList>
          <ServiceItem>
            <ServiceIcon>📊</ServiceIcon>
            <ServiceContent>
              <ServiceTitle>Business Consulting</ServiceTitle>
              <ServiceDescription>
                Strategic guidance and expert advice to help you navigate complex business challenges and drive sustainable growth. Our consulting services are designed to provide actionable insights that make a real difference.
              </ServiceDescription>
              <ServiceFeatures>
                <FeatureItem>Strategic planning and execution</FeatureItem>
                <FeatureItem>Market analysis and competitive positioning</FeatureItem>
                <FeatureItem>Business process optimization</FeatureItem>
                <FeatureItem>Risk assessment and management</FeatureItem>
              </ServiceFeatures>
              <ServiceLink to="/services/details">
                Learn More →
              </ServiceLink>
            </ServiceContent>
          </ServiceItem>
          
          <ServiceItem>
            <ServiceIcon>💰</ServiceIcon>
            <ServiceContent>
              <ServiceTitle>Financial Analysis</ServiceTitle>
              <ServiceDescription>
                Comprehensive financial analysis and reporting services that provide deep insights into your business performance. We help you understand your financial position and identify opportunities for improvement.
              </ServiceDescription>
              <ServiceFeatures>
                <FeatureItem>Financial statement analysis</FeatureItem>
                <FeatureItem>Cash flow management and forecasting</FeatureItem>
                <FeatureItem>Budgeting and financial planning</FeatureItem>
                <FeatureItem>Profitability analysis and optimization</FeatureItem>
              </ServiceFeatures>
              <ServiceLink to="/services/details">
                Learn More →
              </ServiceLink>
            </ServiceContent>
          </ServiceItem>
          
          <ServiceItem>
            <ServiceIcon>📋</ServiceIcon>
            <ServiceContent>
              <ServiceTitle>Tax Advisory</ServiceTitle>
              <ServiceDescription>
                Expert tax planning and compliance services to help you meet all regulatory requirements while optimizing your tax position. We stay current with tax law changes to provide you with accurate, timely advice.
              </ServiceDescription>
              <ServiceFeatures>
                <FeatureItem>Tax planning and strategy</FeatureItem>
                <FeatureItem>VAT registration and compliance</FeatureItem>
                <FeatureItem>Corporate tax advisory</FeatureItem>
                <FeatureItem>Tax return preparation and filing</FeatureItem>
              </ServiceFeatures>
              <ServiceLink to="/services/details">
                Learn More →
              </ServiceLink>
            </ServiceContent>
          </ServiceItem>
          
          <ServiceItem>
            <ServiceIcon>👥</ServiceIcon>
            <ServiceContent>
              <ServiceTitle>HR Solutions</ServiceTitle>
              <ServiceDescription>
                Professional human resources services that help you manage your workforce effectively. From payroll processing to recruitment support, we handle the administrative tasks so you can focus on your business.
              </ServiceDescription>
              <ServiceFeatures>
                <FeatureItem>Payroll processing and administration</FeatureItem>
                <FeatureItem>Employee onboarding and management</FeatureItem>
                <FeatureItem>Recruitment and talent acquisition support</FeatureItem>
                <FeatureItem>HR compliance and policy development</FeatureItem>
              </ServiceFeatures>
              <ServiceLink to="/services/details">
                Learn More →
              </ServiceLink>
            </ServiceContent>
          </ServiceItem>
        </ServicesList>
      </ServicesSection>
      
      <CTASection>
        <CTAContent>
          <h2>Need a Custom Solution?</h2>
          <p>
            Every business is unique. Contact us to discuss how we can tailor our services to meet your specific needs.
          </p>
          <WhiteButton to="/contact">Get in Touch</WhiteButton>
        </CTAContent>
      </CTASection>
      
      <Footer />
    </Container>
  );
};

export default Services;