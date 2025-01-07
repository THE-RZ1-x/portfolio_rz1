import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaServer, 
  FaNetworkWired, 
  FaLaptopCode, 
  FaShieldAlt, 
  FaCode,
  FaDatabase,
  FaBug,
  FaMobileAlt,
  FaDesktop
} from 'react-icons/fa';
import { BiSupport } from 'react-icons/bi';

const ServicesContainer = styled.div`
  padding: 100px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ServiceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 2rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 247, 255, 0.1);

  &:hover {
    border-color: var(--primary);
    transform: translateY(-5px);
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  color: var(--primary);
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const ServiceDescription = styled.p`
  color: var(--light);
  line-height: 1.6;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: var(--primary);
  text-align: center;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: var(--light);
  margin-bottom: 3rem;
  font-size: 1.1rem;
`;

const services = [
  {
    icon: <FaServer />,
    title: "System Administration",
    description: "Expert system administration services including server management, system optimization, and infrastructure maintenance."
  },
  {
    icon: <FaNetworkWired />,
    title: "Network Solutions",
    description: "Comprehensive networking services including setup, maintenance, and security implementation for both small and large-scale networks."
  },
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    description: "Full-stack web development using modern technologies like React, Node.js, and various front-end frameworks for responsive and dynamic applications."
  },
  {
    icon: <FaShieldAlt />,
    title: "Cybersecurity",
    description: "Implementation of robust security measures, vulnerability assessment, and protection against cyber threats."
  },
  {
    icon: <FaCode />,
    title: "Software Development",
    description: "Custom software solutions and applications development using various programming languages and modern development practices."
  },
  {
    icon: <FaDatabase />,
    title: "Database Management",
    description: "Database design, optimization, and management services ensuring efficient data storage and retrieval systems."
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Solutions",
    description: "Development of mobile applications and responsive web solutions for seamless mobile user experience."
  },
  {
    icon: <FaBug />,
    title: "Testing & Debugging",
    description: "Comprehensive testing services and debugging solutions to ensure high-quality, error-free applications."
  },
  {
    icon: <BiSupport />,
    title: "Technical Support",
    description: "Reliable technical support and maintenance services for all your IT infrastructure needs."
  }
];

const Services = () => {
  return (
    <ServicesContainer>
      <SectionTitle>My Services</SectionTitle>
      <SectionSubtitle>
        Comprehensive IT Solutions & Development Services
      </SectionSubtitle>
      <ServiceGrid>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ServiceIcon>{service.icon}</ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServiceGrid>
    </ServicesContainer>
  );
};

export default Services;
