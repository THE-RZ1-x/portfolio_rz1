import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaServer, FaNetworkWired, FaLaptopCode, FaShieldAlt, FaFileAlt } from 'react-icons/fa';

const SkillsContainer = styled.div`
  min-height: 100vh;
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const SkillCategory = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 2rem;
  border: 1px solid rgba(0, 247, 255, 0.1);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  &:hover {
    border-color: var(--primary);
    transform: translateY(-5px);
  }
`;

const CategoryTitle = styled.h3`
  color: var(--primary);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  svg {
    font-size: 1.2em;
    
    @media (max-width: 768px) {
      font-size: 1.1em;
    }
  }
`;

const SkillsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
`;

const SkillItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--light);
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  &::before {
    content: '▹';
    color: var(--primary);
  }
`;

const skills = {
  systemAdmin: {
    title: "System Administration",
    icon: FaServer,
    skills: [
      "Windows Server Administration",
      "Linux System Management",
      "System Configuration",
      "Network Management"
    ]
  },
  networking: {
    title: "Networking",
    icon: FaNetworkWired,
    skills: [
      "CCNA 1-2-3 Certification",
      "Network Configuration",
      "TCP/IP Protocols",
      "Network Security"
    ]
  },
  development: {
    title: "Development",
    icon: FaLaptopCode,
    skills: [
      "Python Programming",
      "C++ Development",
      "SQL & Databases",
      "Web Development"
    ]
  },
  security: {
    title: "Security",
    icon: FaShieldAlt,
    skills: [
      "Penetration Testing",
      "Network Security",
      "System Hardening",
      "Security Best Practices"
    ]
  },
  office: {
    title: "Office Tools",
    icon: FaFileAlt,
    skills: [
      "Microsoft Excel (Advanced)",
      "Microsoft Word (Professional)",
      "Microsoft PowerPoint",
      "Office Suite Proficiency"
    ]
  }
};

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <SkillsGrid>
        {Object.entries(skills).map(([key, category]) => (
          <SkillCategory
            key={key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CategoryTitle>
              {React.createElement(category.icon)} {category.title}
            </CategoryTitle>
            <SkillsList>
              {category.skills.map((skill, index) => (
                <SkillItem
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {skill}
                </SkillItem>
              ))}
            </SkillsList>
          </SkillCategory>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
};

export default Skills;
