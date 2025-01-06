import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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
    icon: "💻",
    title: "Web Development",
    description: "Building responsive and dynamic web applications using modern technologies like React, Next.js, and Node.js."
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces with a focus on user experience and modern design principles."
  },
  {
    icon: "📱",
    title: "Mobile Development",
    description: "Developing cross-platform mobile applications using React Native and Flutter."
  },
  {
    icon: "🔧",
    title: "API Development",
    description: "Building robust and scalable RESTful APIs using Node.js, Express, and MongoDB."
  },
  {
    icon: "🚀",
    title: "Performance Optimization",
    description: "Optimizing web applications for speed, SEO, and better user experience."
  },
  {
    icon: "🛡️",
    title: "Security Solutions",
    description: "Implementing security best practices and protecting applications from common vulnerabilities."
  }
];

const Services = () => {
  return (
    <ServicesContainer>
      <SectionTitle>My Services</SectionTitle>
      <SectionSubtitle>
        Providing high-quality development solutions for your digital needs
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
