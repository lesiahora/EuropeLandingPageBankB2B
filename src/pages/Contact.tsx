import React, { useState } from 'react';
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  
  @media (max-width: 425px) {
    gap: 2rem;
  }
`;

const ContactForm = styled.form`
  background: #f8f5ee;
  padding: 2rem;
  border-radius: 0.5rem;
  border: 1px solid #e5e5e5;
  
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
      margin-bottom: 1.25rem;
    }
    
    @media (max-width: 320px) {
      font-size: 1.5rem;
    }
  }
  
  @media (max-width: 425px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 320px) {
    padding: 1.25rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  
  @media (max-width: 425px) {
    margin-bottom: 1.25rem;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
  font-weight: 400;
  font-size: 0.9375rem;
  font-family: 'Cormorant', serif;
  
  @media (max-width: 425px) {
    font-size: 0.875rem;
  }
  
  @media (max-width: 320px) {
    font-size: 0.8125rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e5e5e5;
  border-radius: 0.25rem;
  font-size: 0.9375rem;
  transition: border-color 0.2s;
  box-sizing: border-box;
  background-color: #ffffff;
  
  &:focus {
    outline: none;
    border-color: #1a1a1a;
  }
  
  @media (max-width: 425px) {
    padding: 0.625rem;
    font-size: 0.875rem;
  }
  
  @media (max-width: 320px) {
    padding: 0.5rem;
    font-size: 0.8125rem;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e5e5e5;
  border-radius: 0.25rem;
  font-size: 0.9375rem;
  min-height: 150px;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.2s;
  box-sizing: border-box;
  background-color: #ffffff;
  
  &:focus {
    outline: none;
    border-color: #1a1a1a;
  }
  
  @media (max-width: 425px) {
    padding: 0.625rem;
    font-size: 0.875rem;
    min-height: 120px;
  }
  
  @media (max-width: 320px) {
    padding: 0.5rem;
    font-size: 0.8125rem;
    min-height: 100px;
  }
`;

const SubmitButton = styled.button`
  background-color: #1a1a1a;
  color: white;
  padding: 0.75rem 1.75rem;
  border: none;
  border-radius: 0;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  width: 100%;
  
  &:hover {
    background-color: #333;
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

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  @media (max-width: 425px) {
    gap: 1.5rem;
  }
`;

const InfoSection = styled.div`
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
      margin-bottom: 1.25rem;
    }
    
    @media (max-width: 320px) {
      font-size: 1.5rem;
    }
  }
  
  p {
    color: #666;
    line-height: 1.8;
    margin-bottom: 1rem;
    font-size: 0.9375rem;
    
    @media (max-width: 425px) {
      font-size: 0.875rem;
      line-height: 1.6;
    }
    
    @media (max-width: 320px) {
      font-size: 0.8125rem;
    }
  }
`;

const InfoCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (max-width: 425px) {
    gap: 1.25rem;
  }
`;

const InfoCard = styled.div`
  background: #f8f5ee;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #e5e5e5;
  display: flex;
  align-items: start;
  gap: 1rem;
  
  @media (max-width: 425px) {
    padding: 1.25rem;
    gap: 0.875rem;
  }
  
  @media (max-width: 320px) {
    padding: 1rem;
    gap: 0.75rem;
  }
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  background-color: #1a1a1a;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
  color: white;
  
  @media (max-width: 425px) {
    width: 40px;
    height: 40px;
    font-size: 1.25rem;
  }
  
  @media (max-width: 320px) {
    width: 36px;
    height: 36px;
    font-size: 1.125rem;
  }
`;

const InfoContent = styled.div`
  flex: 1;
  
  h3 {
    font-size: 1.125rem;
    margin-bottom: 0.5rem;
    color: #1a1a1a;
    font-weight: 400;
    font-family: 'Cormorant', serif;
    
    @media (max-width: 425px) {
      font-size: 1rem;
    }
    
    @media (max-width: 320px) {
      font-size: 0.9375rem;
    }
  }
  
  p {
    margin: 0;
    color: #666;
    line-height: 1.6;
    font-size: 0.9375rem;
    
    @media (max-width: 425px) {
      font-size: 0.875rem;
    }
    
    @media (max-width: 320px) {
      font-size: 0.8125rem;
    }
  }
`;

const MapPlaceholder = styled.div`
  background: linear-gradient(135deg, #e5e5e5, #f5f5f5);
  height: 300px;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 1rem;
  
  @media (max-width: 768px) {
    height: 250px;
  }
  
  @media (max-width: 425px) {
    height: 200px;
    font-size: 0.875rem;
  }
  
  @media (max-width: 320px) {
    height: 180px;
  }
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission handler (non-functional as per requirements)
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Container>
      <Header />
      
      <HeroSection>
        <HeroContent>
          <HeroTitle>Contact Us</HeroTitle>
          <HeroSubtitle>
            Get in touch with our team. We're here to help you succeed.
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>
      
      <ContentSection>
        <ContactGrid>
          <ContactForm onSubmit={handleSubmit}>
            <h2>Send Us a Message</h2>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project or inquiry..."
                required
              />
            </FormGroup>
            
            <SubmitButton type="submit">Send Message</SubmitButton>
          </ContactForm>
          
          <ContactInfo>
            <InfoSection>
              <h2>Get in Touch</h2>
              <p>
                Have a question or want to discuss how we can help your business? 
                Fill out the form or reach us through any of the contact methods below.
              </p>
            </InfoSection>
            
            <InfoCards>
              <InfoCard>
                <IconWrapper>📍</IconWrapper>
                <InfoContent>
                  <h3>Address</h3>
                  <p>
                    123 Business Street<br />
                    London, EC1A 1BB<br />
                    United Kingdom
                  </p>
                </InfoContent>
              </InfoCard>
              
              <InfoCard>
                <IconWrapper>📞</IconWrapper>
                <InfoContent>
                  <h3>Phone</h3>
                  <p>+44 20 1234 5678</p>
                </InfoContent>
              </InfoCard>
              
              <InfoCard>
                <IconWrapper>✉️</IconWrapper>
                <InfoContent>
                  <h3>Email</h3>
                  <p>info@eubusiness.com</p>
                </InfoContent>
              </InfoCard>
              
              <InfoCard>
                <IconWrapper>🕐</IconWrapper>
                <InfoContent>
                  <h3>Business Hours</h3>
                  <p>
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday - Sunday: Closed
                  </p>
                </InfoContent>
              </InfoCard>
            </InfoCards>
            
            <MapPlaceholder>
              [Map Location Placeholder]
            </MapPlaceholder>
          </ContactInfo>
        </ContactGrid>
      </ContentSection>
      
      <Footer />
    </Container>
  );
};

export default Contact;