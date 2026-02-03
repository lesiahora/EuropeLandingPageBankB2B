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
  padding: 6rem 2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 5rem 1.5rem;
  }
`;

const Breadcrumb = styled.div`
  max-width: 1200px;
  margin: 0 auto 2rem;
  font-size: 0.9rem;
  
  a {
    color: #666;
    text-decoration: none;
    
    &:hover {
      color: #1a1a1a;
    }
  }
  
  span {
    color: #999;
    margin: 0 0.5rem;
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
`;

const HeroSubtitle = styled.p`
  font-size: 1.125rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.7;
`;

const ContentSection = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #ffffff;
  
  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const MainContent = styled.div`
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #1a1a1a;
    margin-top: 2rem;
    font-weight: 300;
    font-family: 'Cormorant', serif;
    
    &:first-child {
      margin-top: 0;
    }
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #1a1a1a;
    margin-top: 1.5rem;
    font-weight: 400;
  }
  
  p {
    color: #666;
    line-height: 1.8;
    margin-bottom: 1rem;
    font-size: 1.0625rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 1rem 0;
  }
  
  li {
    color: #666;
    padding: 0.5rem 0;
    padding-left: 1.5rem;
    position: relative;
    line-height: 1.6;
    
    &:before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #1a1a1a;
      font-weight: bold;
    }
  }
`;

const Sidebar = styled.aside`
  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: #1a1a1a;
    font-weight: 400;
  }
`;

const ServiceCard = styled.div`
  background: #f8f5ee;
  padding: 2rem;
  border-radius: 0.5rem;
  border: 1px solid #e5e5e5;
  margin-bottom: 2rem;
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  }
`;

const ServiceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ServiceLink = styled(Link)`
  color: #666;
  text-decoration: none;
  padding: 0.75rem;
  border-radius: 0.25rem;
  transition: all 0.2s;
  display: block;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    color: #1a1a1a;
  }
`;

const CTACard = styled.div`
  background: #1a1a1a;
  color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  text-align: center;
  
  h3 {
    color: white;
    margin-bottom: 1rem;
    font-weight: 400;
  }
  
  p {
    margin-bottom: 1.5rem;
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.9375rem;
  }
`;

const WhiteButton = styled(Link)`
  background-color: white;
  color: #1a1a1a;
  padding: 0.75rem 1.75rem;
  border-radius: 0;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.2s;
  display: inline-block;
  font-size: 0.875rem;
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const BenefitCard = styled.div`
  padding: 1.5rem;
  background: #f8f5ee;
  border-radius: 0.5rem;
  border: 1px solid #e5e5e5;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-2px);
  }
  
  h4 {
    color: #1a1a1a;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    font-weight: 500;
  }
  
  p {
    color: #666;
    font-size: 0.9375rem;
    margin: 0;
  }
`;

const ServiceDetails: React.FC = () => {
  return (
    <Container>
      <Header />
      
      <HeroSection>
        <Breadcrumb>
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/services">Services</Link>
          <span>/</span>
          <span style={{ color: '#1a1a1a', fontWeight: 500 }}>Business Consulting</span>
        </Breadcrumb>
        <HeroTitle>Business Consulting</HeroTitle>
        <HeroSubtitle>
          Strategic guidance to drive your business forward
        </HeroSubtitle>
      </HeroSection>
      
      <ContentSection>
        <ContentGrid>
          <MainContent>
            <h2>Overview</h2>
            <p>
              Our Business Consulting services provide strategic guidance and expert advice to help you navigate complex business challenges. Whether you're looking to expand into new markets, optimize your operations, or develop a comprehensive growth strategy, our experienced consultants are here to help.
            </p>
            <p>
              We work closely with your team to understand your unique situation, challenges, and goals. Our approach combines industry best practices with innovative thinking to deliver solutions that are both practical and effective.
            </p>
            
            <h2>What We Offer</h2>
            <p>
              Our comprehensive consulting services cover all aspects of business strategy and operations:
            </p>
            <ul>
              <li>Strategic planning and business model development</li>
              <li>Market research and competitive analysis</li>
              <li>Organizational structure and process optimization</li>
              <li>Change management and transformation initiatives</li>
              <li>Performance measurement and KPI development</li>
              <li>Risk assessment and mitigation strategies</li>
              <li>Growth strategy and expansion planning</li>
              <li>Digital transformation consulting</li>
            </ul>
            
            <h2>Key Benefits</h2>
            <BenefitsGrid>
              <BenefitCard>
                <h4>Expert Guidance</h4>
                <p>Access to experienced consultants with diverse industry expertise</p>
              </BenefitCard>
              <BenefitCard>
                <h4>Objective Perspective</h4>
                <p>Unbiased analysis and recommendations based on data and best practices</p>
              </BenefitCard>
              <BenefitCard>
                <h4>Customized Solutions</h4>
                <p>Strategies tailored to your specific business needs and goals</p>
              </BenefitCard>
              <BenefitCard>
                <h4>Measurable Results</h4>
                <p>Clear metrics and KPIs to track progress and success</p>
              </BenefitCard>
            </BenefitsGrid>
            
            <h2>Our Process</h2>
            <h3>1. Discovery Phase</h3>
            <p>
              We begin by conducting a thorough assessment of your current situation, including interviews with key stakeholders, analysis of existing documentation, and review of relevant data. This helps us understand your challenges, opportunities, and goals.
            </p>
            
            <h3>2. Analysis and Strategy Development</h3>
            <p>
              Based on our findings, we develop a comprehensive strategy that addresses your specific needs. This includes detailed recommendations, implementation roadmaps, and success metrics.
            </p>
            
            <h3>3. Implementation Support</h3>
            <p>
              We don't just provide recommendations – we work with you to implement them. Our team provides ongoing support, guidance, and expertise throughout the implementation process.
            </p>
            
            <h3>4. Review and Optimization</h3>
            <p>
              We monitor progress, measure results, and make adjustments as needed to ensure you achieve your objectives. Our commitment extends beyond the initial engagement to ensure long-term success.
            </p>
            
            <h2>Who Can Benefit</h2>
            <p>
              Our business consulting services are ideal for:
            </p>
            <ul>
              <li>Small to medium-sized businesses looking to scale</li>
              <li>Established companies facing market disruption</li>
              <li>Organizations undergoing significant change</li>
              <li>Businesses entering new markets or launching new products</li>
              <li>Companies seeking to improve operational efficiency</li>
            </ul>
          </MainContent>
          
          <Sidebar>
            <ServiceCard>
              <h3>All Services</h3>
              <ServiceList>
                <ServiceLink to="/services/details">Business Consulting</ServiceLink>
                <ServiceLink to="/services/details">Financial Analysis</ServiceLink>
                <ServiceLink to="/services/details">Tax Advisory</ServiceLink>
                <ServiceLink to="/services/details">HR Solutions</ServiceLink>
              </ServiceList>
            </ServiceCard>
            
            <CTACard>
              <h3>Ready to Get Started?</h3>
              <p>
                Contact us today to discuss how our consulting services can help your business succeed.
              </p>
              <WhiteButton to="/contact">Contact Us</WhiteButton>
            </CTACard>
          </Sidebar>
        </ContentGrid>
      </ContentSection>
      
      <Footer />
    </Container>
  );
};

export default ServiceDetails;