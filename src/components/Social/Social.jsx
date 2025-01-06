import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaYoutube, FaInstagram, FaLinkedin, FaTelegram, FaWhatsapp, FaReddit } from 'react-icons/fa';
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
  font-size: 3rem;
  margin-bottom: 2rem;
  color: var(--primary);
  text-shadow: 0 0 10px var(--primary);
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 100%;
    height: 2px;
    background: var(--primary);
    box-shadow: 0 0 10px var(--primary);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Card = styled(motion.a)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 10px;
  text-decoration: none;
  color: var(--light);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: var(--primary);
    box-shadow: 0 0 20px rgba(0, 247, 255, 0.1);
  }

  svg {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--primary);
    filter: drop-shadow(0 0 8px var(--primary));
  }

  h2 {
    margin-bottom: 1rem;
    color: var(--primary);
    font-size: 1.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
    line-height: 1.5;
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
      name: 'Reddit',
      icon: <FaReddit />,
      description: 'Follow me on Reddit',
      url: 'https://www.reddit.com/user/Illustrious_Sea_2752/'
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
