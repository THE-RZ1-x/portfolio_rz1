import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaServer, FaCode, FaGraduationCap, FaUserTie, FaLightbulb } from 'react-icons/fa';
import { BiTargetLock } from 'react-icons/bi';

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

const Subtitle = styled(motion.p)`
  text-align: center;
  color: var(--light);
  margin-bottom: 3rem;
  font-size: 1.2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 2rem;
  border: 1px solid rgba(0, 247, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--primary);
    transform: translateY(-5px);
  }
`;

const CardIcon = styled.div`
  font-size: 2rem;
  color: var(--primary);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CardTitle = styled.h3`
  color: var(--primary);
  margin-bottom: 1rem;
  font-size: 1.3rem;
`;

const CardContent = styled.div`
  color: var(--light);
  line-height: 1.6;
  font-size: 1rem;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:before {
      content: "▹";
      color: var(--primary);
    }
  }
`;

const AboutContent = styled(motion.div)`
  color: var(--light);
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 3rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
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
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A passionate IT professional specializing in system administration, development, and cybersecurity
        </Subtitle>
        <AboutContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Hello! I'm Salah-Eddine Rhazouane, a versatile IT professional with a strong foundation in system administration
          and software development. My journey in technology is driven by a passion for creating efficient solutions
          and securing digital infrastructures.
        </AboutContent>
        <Grid>
          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <CardIcon><FaUserTie /> Profile</CardIcon>
            <CardContent>
              <ul>
                <li>System Administrator & Developer</li>
                <li>Based in Morocco</li>
                <li>Available for Remote Work</li>
                <li>Multilingual: Arabic, French, English</li>
              </ul>
            </CardContent>
          </Card>

          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <CardIcon><FaLightbulb /> Expertise</CardIcon>
            <CardContent>
              <ul>
                <li>System Administration</li>
                <li>Network Security</li>
                <li>Full Stack Development</li>
                <li>Database Management</li>
              </ul>
            </CardContent>
          </Card>

          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <CardIcon><FaGraduationCap /> Education</CardIcon>
            <CardContent>
              <ul>
                <li>Specialized Technician in IT Development</li>
                <li>OFPPT Certification</li>
                <li>Continuous Professional Development</li>
                <li>Technical Certifications</li>
              </ul>
            </CardContent>
          </Card>

          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <CardIcon><BiTargetLock /> Goals</CardIcon>
            <CardContent>
              <ul>
                <li>Delivering High-Quality Solutions</li>
                <li>Continuous Learning & Growth</li>
                <li>Building Secure Systems</li>
                <li>Creating Innovative Solutions</li>
              </ul>
            </CardContent>
          </Card>
        </Grid>
      </Container>
    </AboutSection>
  );
};

export default About;
