import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaDownload, FaGraduationCap, FaBriefcase, FaCode, FaLanguage } from 'react-icons/fa';
import { BiCertification } from 'react-icons/bi';

// Import the icon directly
const ofpptIcon = new URL('/OFPPT_Logo.ico', import.meta.url).href;

const CVSection = styled.section`
  min-height: 100vh;
  padding: 100px 50px;
  background: var(--dark);
  color: var(--light);

  @media (max-width: 768px) {
    padding: 100px 20px;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 1rem;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.1rem;
  color: var(--light);
  margin-bottom: 2rem;
`;

const DownloadButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: var(--primary);
  color: var(--dark);
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    background: var(--secondary);
    transform: translateY(-2px);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const Section = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid rgba(0, 247, 255, 0.1);

  h2 {
    color: var(--primary);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;

    svg {
      font-size: 1.2rem;
    }
  }
`;

const Item = styled.div`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }

  h3 {
    color: var(--light);
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    line-height: 1.5;
  }

  .date {
    color: var(--primary);
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }
`;

const EducationHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  .logo-container {
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    overflow: hidden;

    &:hover {
      background: rgba(255, 255, 255, 0.08);
      transform: translateY(-2px);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      filter: brightness(0) invert(1);
      opacity: 0.9;
      display: block;
    }
  }

  h2 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--primary);
    font-size: 1.8rem;

    svg {
      color: var(--primary);
    }
  }
`;

const CV = () => {
  const handleDownload = () => {
    // Replace this URL with your actual CV PDF file
    const cvUrl = '/assets/RZ1-CV.pdf';
    window.open(cvUrl, '_blank');
  };

  return (
    <CVSection>
      <Container>
        <Header>
          <Title
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Curriculum Vitae
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            System & Network Administrator | Full Stack Developer | Security Enthusiast
          </Subtitle>
          <DownloadButton
            href="/assets/RZ1-CV.pdf"
            download="RZ1-CV.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload /> Download CV
          </DownloadButton>
        </Header>

        <Grid>
          <Section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <EducationHeader>
              <motion.div 
                className="logo-container"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <img 
                  src={ofpptIcon}
                  alt="OFPPT Logo"
                  loading="eager"
                />
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <FaGraduationCap /> 
                <span style={{ color: 'var(--primary)' }}>Education</span>
              </motion.h2>
            </EducationHeader>
            <Item>
              <h3>Systems and Networks Technician</h3>
              <div className="date">2022 - Present</div>
              <p>OFPPT University</p>
              <p>Currently in 2nd year, focusing on system administration, networking, and development</p>
            </Item>
          </Section>

          <Section
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2><FaCode /> Technical Skills</h2>
            <Item>
              <h3>System Administration</h3>
              <p>Windows Server, Linux Administration, System Management</p>
            </Item>
            <Item>
              <h3>Networking</h3>
              <p>CCNA 1-2-3, Network Configuration, TCP/IP, Network Security</p>
            </Item>
            <Item>
              <h3>Development</h3>
              <p>Python, C++, SQL, Web Development (HTML, CSS, JavaScript)</p>
            </Item>
            <Item>
              <h3>Security</h3>
              <p>Penetration Testing, Network Security, System Hardening</p>
            </Item>
            <Item>
              <h3>Office Tools</h3>
              <p>Microsoft Excel (Advanced), Microsoft Word (Professional), PowerPoint, Office Suite</p>
            </Item>
          </Section>

          <Section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2><BiCertification /> Certifications & Training</h2>
            <Item>
              <h3>CCNA Training</h3>
              <div className="date">2023</div>
              <p>Completed CCNA 1, 2, and 3 modules</p>
            </Item>
            <Item>
              <h3>System Administration</h3>
              <div className="date">2022 - Present</div>
              <p>Windows Server & Linux Administration</p>
            </Item>
          </Section>

          <Section
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2><FaBriefcase /> Projects & Experience</h2>
            <Item>
              <h3>Full Stack Development</h3>
              <p>Personal portfolio website using React, Node.js</p>
              <p>System administration and network configuration projects</p>
            </Item>
            <Item>
              <h3>Network & Security</h3>
              <p>Network design and implementation projects</p>
              <p>Security testing and system hardening exercises</p>
            </Item>
          </Section>

          <Section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2><FaLanguage /> Languages</h2>
            <Item>
              <h3>Arabic</h3>
              <p>Native proficiency</p>
            </Item>
            <Item>
              <h3>French</h3>
              <p>Professional working proficiency</p>
            </Item>
            <Item>
              <h3>English</h3>
              <p>Technical proficiency</p>
            </Item>
          </Section>
        </Grid>
      </Container>
    </CVSection>
  );
};

export default CV;
