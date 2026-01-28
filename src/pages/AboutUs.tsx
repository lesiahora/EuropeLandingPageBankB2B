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

const ContentSection = styled.section`
  padding: 5rem 2rem;
  max-width: 1280px;
  margin: 0 auto;
  
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

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  
  @media (max-width: 425px) {
    gap: 2rem;
    margin-bottom: 3rem;
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
    font-size: 1.05rem;
    
    @media (max-width: 425px) {
      font-size: 0.9375rem;
    }
    
    @media (max-width: 320px) {
      font-size: 0.875rem;
    }
  }
`;

const ImagePlaceholder = styled.div`
  background-color: #f8f5ee;
  border: 1px solid #e5e5e5;
  height: 400px;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 1.1rem;
  
  @media (max-width: 768px) {
    height: 300px;
  }
  
  @media (max-width: 425px) {
    height: 250px;
    font-size: 1rem;
  }
  
  @media (max-width: 320px) {
    height: 220px;
    font-size: 0.9375rem;
  }
`;

const ValuesSection = styled.section`
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

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #1a1a1a;
  font-weight: 300;
  font-family: 'Cormorant', serif;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2.5rem;
  }
  
  @media (max-width: 425px) {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 320px) {
    font-size: 1.5rem;
  }
`;

const ValuesGrid = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    gap: 1.5rem;
  }
  
  @media (max-width: 425px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;

const ValueCard = styled.div`
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

const ValueIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  padding: 0.5rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  @media (max-width: 425px) {
    width: 50px;
    height: 50px;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 320px) {
    width: 40px;
    height: 40px;
  }
`;

const ValueTitle = styled.h3`
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

const ValueDescription = styled.p`
  color: #666;
  line-height: 1.6;
  font-size: 0.9375rem;
  
  @media (max-width: 425px) {
    font-size: 0.875rem;
  }
  
  @media (max-width: 320px) {
    font-size: 0.8125rem;
  }
`;

const TeamSection = styled.section`
  padding: 5rem 2rem;
  max-width: 1280px;
  margin: 0 auto;
  
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

const TeamIntro = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  
  h2 {
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
    
    @media (max-width: 320px) {
      font-size: 1.5rem;
    }
  }
  
  p {
    color: #666;
    font-size: 1.05rem;
    line-height: 1.8;
    
    @media (max-width: 425px) {
      font-size: 0.9375rem;
    }
    
    @media (max-width: 320px) {
      font-size: 0.875rem;
    }
  }
`;

const AboutUs: React.FC = () => {
  return (
    <Container>
      <Header />
      
      <HeroSection>
        <HeroContent>
          <HeroTitle>About EU Business Solutions</HeroTitle>
          <HeroSubtitle>
            Empowering businesses with professional consulting and financial services since 2011
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>
      
      <ContentSection>
        <AboutGrid>
          <AboutText>
            <h2>Our Story</h2>
            <p>
              EU Business Solutions was founded with a clear mission: to provide exceptional business consulting and financial services that help companies navigate complex challenges and achieve sustainable growth.
            </p>
            <p>
              Over the years, we have built a reputation for delivering personalized solutions that address the unique needs of each client. Our team of experienced professionals brings together expertise from various industries, ensuring that we can provide comprehensive support across all aspects of your business.
            </p>
            <p>
              From small startups to established enterprises, we have helped hundreds of clients optimize their operations, improve financial performance, and achieve their strategic objectives.
            </p>
          </AboutText>
          <ImagePlaceholder>
            [Professional Office Environment]
          </ImagePlaceholder>
        </AboutGrid>
        
        <AboutGrid>
          <ImagePlaceholder>
            [Team Collaboration Image]
          </ImagePlaceholder>
          <AboutText>
            <h2>Our Approach</h2>
            <p>
              We believe that every business is unique, which is why we take the time to understand your specific challenges, goals, and industry context before recommending solutions.
            </p>
            <p>
              Our approach is built on three core principles: transparency, expertise, and partnership. We work closely with our clients to ensure they understand every aspect of our recommendations and feel confident in the decisions they make.
            </p>
            <p>
              With EU Business Solutions, you gain more than just a service provider – you gain a trusted partner committed to your long-term success.
            </p>
          </AboutText>
        </AboutGrid>
      </ContentSection>
      
      <ValuesSection>
        <SectionTitle>Why Choose Us</SectionTitle>
        <ValuesGrid>
          <ValueCard>
            <ValueIcon><img src="/images/expertTeam.png" alt="Expert Team" /></ValueIcon>
            <ValueTitle>Expert Team</ValueTitle>
            <ValueDescription>
              Certified professionals with deep industry knowledge and years of hands-on experience in business consulting and financial services.
            </ValueDescription>
          </ValueCard>
          
          <ValueCard>
            <ValueIcon><img src="/images/provenResult.png" alt="Proven Results" /></ValueIcon>
            <ValueTitle>Proven Results</ValueTitle>
            <ValueDescription>
              Track record of delivering measurable outcomes and helping our clients achieve their business objectives consistently.
            </ValueDescription>
          </ValueCard>
          
          <ValueCard>
            <ValueIcon><img src="/images/timelyService.png" alt="Timely Service" /></ValueIcon>
            <ValueTitle>Timely Service</ValueTitle>
            <ValueDescription>
              Responsive support and efficient delivery of all our services, ensuring you can make timely business decisions.
            </ValueDescription>
          </ValueCard>
          
          <ValueCard>
            <ValueIcon><img src="/images/confidential.png" alt="Confidential" /></ValueIcon>
            <ValueTitle>Confidential</ValueTitle>
            <ValueDescription>
              Complete discretion and security for all your business and financial information, maintaining the highest standards of confidentiality.
            </ValueDescription>
          </ValueCard>
        </ValuesGrid>
      </ValuesSection>
      
      <TeamSection>
        <TeamIntro>
          <h2>Our Team</h2>
          <p>
            Our diverse team of professionals combines expertise in business strategy, finance, taxation, and human resources. We are united by our commitment to delivering exceptional service and helping our clients succeed.
          </p>
          <p>
            With a collaborative approach and a focus on continuous learning, we stay at the forefront of industry trends and best practices to provide you with the most effective solutions.
          </p>
        </TeamIntro>
      </TeamSection>
      
      <Footer />
    </Container>
  );
};

export default AboutUs;