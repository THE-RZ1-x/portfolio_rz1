import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 100px 50px;
  background: var(--dark);

  @media (max-width: 768px) {
    padding: 100px 20px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 2rem;
  text-align: center;
`;

const Content = styled(motion.div)`
  color: var(--light);
  line-height: 1.6;
  font-size: 1.1rem;
`;

const About = () => {
  return (
    <AboutSection>
      <Container>
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </Title>
        <Content
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>
            Hello! I'm Salah-Eddine Rhazouane, a passionate developer with expertise in AI and web development.
            I love solving complex problems and creating innovative solutions that make a difference.
          </p>
          {/* Add more content as needed */}
        </Content>
      </Container>
    </AboutSection>
  );
};

export default About;
