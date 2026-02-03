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

const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 3rem;
  max-width: 1280px;
  margin: 0 auto;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  
  @media (max-width: 425px) {
    gap: 2rem;
  }
`;

const HeroContent = styled.div`
  max-width: 600px;
  margin-left: 4rem;
  
  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
    margin-left: 0;
  }
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
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

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
  
  @media (max-width: 425px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

const PrimaryButton = styled(Link)`
  background-color: #1a1a1a;
  color: white;
  padding: 0.75rem 1.75rem;
  border-radius: 0;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.2s;
  display: inline-block;
  font-size: 0.875rem;
  
  &:hover {
    background-color: #333;
  }
  
  @media (max-width: 425px) {
    padding: 0.625rem 1.25rem;
    font-size: 0.8125rem;
    text-align: center;
  }
  
  @media (max-width: 320px) {
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
  }
`;

const SecondaryButton = styled(Link)`
  background-color: transparent;
  color: #1a1a1a;
  padding: 0.75rem 1.75rem;
  border: 1px solid #d7d7d6;
  border-radius: 0;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s;
  display: inline-block;
  font-size: 0.875rem;
  
  &:hover {
    background-color: #1a1a1a;
    color: white;
  }
  
  @media (max-width: 425px) {
    padding: 0.625rem 1.25rem;
    font-size: 0.8125rem;
    text-align: center;
  }
  
  @media (max-width: 320px) {
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
  }
`;

const HeroImage = styled.div`
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  height: 380px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }
  
  @media (max-width: 768px) {
    height: 320px;
  }
  
  @media (max-width: 425px) {
    height: 260px;
  }
  
  @media (max-width: 320px) {
    height: 220px;
  }
`;

const ServicesSection = styled.section`
  padding: 5rem 2rem;
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

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #1a1a1a;
  font-weight: 300;
  font-family: 'Cormorant', serif;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 425px) {
    font-size: 1.75rem;
  }
  
  @media (max-width: 375px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 320px) {
    font-size: 1.375rem;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.0625rem;
  color: #666;
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2.5rem;
  }
  
  @media (max-width: 425px) {
    font-size: 0.9375rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 320px) {
    font-size: 0.875rem;
  }
`;

const ServicesGrid = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  
  @media (max-width: 425px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;

const ServiceCard = styled.div`
  background: #f8f5ee;
  padding: 2rem;
  border-radius: 0.5rem;
  border: 1px solid #e5e5e5;
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
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

const ServiceTitle = styled.h3`
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

const StatsSection = styled.section`
  padding: 2rem 2rem 5rem;
  background: #f9f9f9;
  
  @media (max-width: 768px) {
    padding: 1.5rem 1.5rem 4rem;
  }
  
  @media (max-width: 425px) {
    padding: 1.5rem 1rem 3rem;
  }
  
  @media (max-width: 320px) {
    padding: 1.5rem 0.875rem 2.5rem;
  }
`;

const StatsGrid = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  text-align: center;
  
  @media (max-width: 768px) {
    gap: 2.5rem;
  }
  
  @media (max-width: 425px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`;

const StatItem = styled.div`
  h3 {
    font-size: 3rem;
    color: #1a1a1a;
    margin-bottom: 0.5rem;
    font-weight: 300;
    font-family: 'Cormorant', serif;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
    
    @media (max-width: 425px) {
      font-size: 2.25rem;
    }
    
    @media (max-width: 320px) {
      font-size: 2rem;
    }
  }
  
  p {
    font-size: 1rem;
    color: #666;
    
    @media (max-width: 425px) {
      font-size: 0.9375rem;
    }
    
    @media (max-width: 320px) {
      font-size: 0.875rem;
    }
  }
`;

const AboutSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f8f5ee;
  
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

const AboutContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const AboutText = styled.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: #1a1a1a;
    font-weight: 300;
    font-family: 'Cormorant', serif;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
    
    @media (max-width: 425px) {
      font-size: 1.75rem;
    }
    
    @media (max-width: 320px) {
      font-size: 1.5rem;
    }
  }
  
  p {
    color: #666;
    line-height: 1.8;
    margin-bottom: 1rem;
    font-size: 1.0625rem;
    
    @media (max-width: 425px) {
      font-size: 0.9375rem;
    }
    
    @media (max-width: 320px) {
      font-size: 0.875rem;
    }
  }
`;

const AboutButton = styled(Link)`
  background-color: #fff7e6;
  color: #1a1a1a;
  padding: 0.75rem 1.75rem;
  border: 1px solid #d7d7d6;
  border-radius: 0;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s;
  display: inline-block;
  font-size: 0.875rem;
  
  &:hover {
    background-color: #e6dcac;
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

const AboutImage = styled.div`
  height: 400px;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    height: 320px;
  }
  
  @media (max-width: 425px) {
    height: 250px;
    font-size: 0.875rem;
  }
  
  @media (max-width: 320px) {
    height: 200px;
  }
`;

const CTASection = styled.section`
  padding: 5rem 2rem;
  background: #1c1c1b;
  color: white;
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
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
    
    @media (max-width: 425px) {
      font-size: 1.75rem;
    }
    
    @media (max-width: 320px) {
      font-size: 1.5rem;
    }
  }
  
  p {
    font-size: 1.125rem;
    margin-bottom: 2rem;
    color: #e5e5e5;
    
    @media (max-width: 425px) {
      font-size: 1rem;
      margin-bottom: 1.5rem;
    }
    
    @media (max-width: 320px) {
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

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      
      <HeroSection>
        <HeroContainer>
          <HeroContent>
            <HeroTitle>Your Partner in Business Success</HeroTitle>
            <HeroSubtitle>
              Northbridge Strategic Solutions helps businesses make smarter strategic and financial decisions through clear insight, structured analysis, and practical consulting.
            </HeroSubtitle>
            <CTAButtons>
              <PrimaryButton to="/contact">Get Started</PrimaryButton>
              <SecondaryButton to="/about">Learn More</SecondaryButton>
            </CTAButtons>
          </HeroContent>
          <HeroImage>
            <img src="/images/professionalBusinessMeeting.jpg" alt="Professional Business Meeting" />
          </HeroImage>
        </HeroContainer>
      </HeroSection>
      
      <ServicesSection>
        <SectionTitle>Our Services</SectionTitle>
        <SectionSubtitle>
          Comprehensive business solutions tailored to your needs
        </SectionSubtitle>
        <ServicesGrid>
          <ServiceCard>
            <ServiceIcon>
              <img src="/images/businessConsultation.png" alt="Business Consulting" />
            </ServiceIcon>
            <ServiceTitle>Business Consulting</ServiceTitle>
            <ServiceDescription>
              Strategic guidance to help you make informed decisions and drive your business forward in an uncertain environment.
            </ServiceDescription>
            <ServiceLink to="/services/details">Explore Business Consulting →</ServiceLink>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceIcon>
              <img src="/images/financialAnalysis.png" alt="Financial Analysis" />
            </ServiceIcon>
            <ServiceTitle>Financial Analysis</ServiceTitle>
            <ServiceDescription>
              Comprehensive financial analysis and reporting services to optimize your business operations and profitability.
            </ServiceDescription>
            <ServiceLink to="/services/details">Explore Financial Analysis →</ServiceLink>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceIcon>
              <img src="/images/taxAdvisory.png" alt="Tax Advisory" />
            </ServiceIcon>
            <ServiceTitle>Tax Advisory</ServiceTitle>
            <ServiceDescription>
              Expert tax planning and compliance guidance to ensure your business meets all regulatory requirements efficiently.
            </ServiceDescription>
            <ServiceLink to="/services/details">Explore Tax Advisory →</ServiceLink>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceIcon>
              <img src="/images/HRSolutions.png" alt="HR Solutions" />
            </ServiceIcon>
            <ServiceTitle>HR Solutions</ServiceTitle>
            <ServiceDescription>
              Professional HR services including payroll processing, recruitment support, and employee management solutions.
            </ServiceDescription>
            <ServiceLink to="/services/details">Explore HR Solutions →</ServiceLink>
          </ServiceCard>
        </ServicesGrid>
      </ServicesSection>
      
      <StatsSection>
        <StatsGrid>
          <StatItem>
            <h3>2025</h3>
            <p>Founded</p>
          </StatItem>
          <StatItem>
            <h3>EU</h3>
            <p>Market Focus</p>
          </StatItem>
          <StatItem>
            <h3>Senior</h3>
            <p>Advisory Team</p>
          </StatItem>
          <StatItem>
            <h3>100%</h3>
            <p>Compliance-aware Approach</p>
          </StatItem>
        </StatsGrid>
      </StatsSection>
      
      <AboutSection>
        <AboutContent>
          <AboutText>
            <h2>About Northbridge Strategic Solutions</h2>
            <p>
              Northbridge Strategic Solutions is a UK-based business consulting firm focused on helping organizations navigate financial and strategic complexity with confidence. We provide practical, data-driven advice tailored to each client's unique challenges and goals.
            </p>
            <p>
              Our team combines strategic thinking with hands-on experience, allowing us to deliver clear guidance that supports informed decision-making, operational efficiency, and sustainable growth across a wide range of industries.
            </p>
            <AboutButton to="/about">Discover Our Story</AboutButton>
          </AboutText>
          <AboutImage>
            <img src="/images/professionalBusinessImage2.jpg" alt="Professional Business" />
          </AboutImage>
        </AboutContent>
      </AboutSection>
      
      <CTASection>
        <CTAContent>
          <h2>Ready to Grow Your Business?</h2>
          <p>
            Let's discuss how Northbridge Strategic Solutions can help you achieve your business goals with our comprehensive services.
          </p>
          <WhiteButton to="/contact">Schedule a Consultation</WhiteButton>
        </CTAContent>
      </CTASection>
      
      <Footer />
    </Container>
  );
};

export default Home;