import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaYoutube, FaInstagram, FaLinkedin, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import AnalyticsDashboard from '../Analytics/AnalyticsDashboard';
import CodingChallenges from '../Challenges/CodingChallenges';

const Container = styled.div`
  min-height: 100vh;
  padding: 80px 20px;
  background-color: var(--dark);
  color: var(--light);
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--primary);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;

const Card = styled.a`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 10px;
  text-decoration: none;
  color: var(--light);
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }

  svg {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--primary);
  }

  h2 {
    margin-bottom: 1rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const SocialContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Social = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      description: 'Check out my code repositories and projects',
      url: 'https://github.com/THE-RZ1-x'
    },
    {
      name: 'Telegram',
      icon: <FaTelegram />,
      description: 'Connect with me on Telegram',
      url: 'https://t.me/RZ1_x'
    },
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp />,
      description: 'Chat with me on WhatsApp',
      url: 'https://wa.me/212760359753'
    }
  ];

  return (
    <Container>
      <Content>
        <Title>Connect With Me</Title>
        <Grid>
          {socialLinks.map((social) => (
            <Card 
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
              <h2>{social.name}</h2>
              <p>{social.description}</p>
            </Card>
          ))}
        </Grid>
        <SocialContainer>
          <AnalyticsDashboard />
          <CodingChallenges />
        </SocialContainer>
      </Content>
    </Container>
  );
};

export default Social;
