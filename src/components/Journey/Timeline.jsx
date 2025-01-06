import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TimelineContainer = styled.div`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const TimelineTitle = styled(motion.h2)`
  text-align: center;
  color: var(--primary);
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: 3rem;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: var(--primary);
    margin: 1rem auto;
  }
`;

const TimelineWrapper = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: linear-gradient(
      to bottom,
      transparent,
      var(--primary),
      var(--primary),
      transparent
    );
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  justify-content: ${props => props.align === 'left' ? 'flex-start' : 'flex-end'};
  padding-left: ${props => props.align === 'right' ? '50%' : '0'};
  padding-right: ${props => props.align === 'left' ? '50%' : '0'};
  margin: 2rem 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: var(--primary);
    border-radius: 50%;
    left: ${props => props.align === 'right' ? '0' : '100%'};
    transform: translate(-50%, 0);
    box-shadow: 0 0 10px var(--primary);
  }
`;

const TimelineContent = styled(motion.div)`
  background: rgba(0, 247, 255, 0.05);
  border: 1px solid rgba(0, 247, 255, 0.1);
  border-radius: 8px;
  padding: 1.5rem;
  width: 80%;
  margin: ${props => props.align === 'left' ? '0 2rem 0 0' : '0 0 0 2rem'};
  position: relative;
  
  &:hover {
    background: rgba(0, 247, 255, 0.1);
    transform: translateY(-5px);
    transition: all 0.3s ease;
  }
`;

const TimelineDate = styled.div`
  color: var(--primary);
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const TimelineHeading = styled.h3`
  color: var(--light);
  margin-bottom: 0.5rem;
`;

const TimelineDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  line-height: 1.6;
`;

const TimelineTech = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;
`;

const TechTag = styled.span`
  background: rgba(0, 247, 255, 0.1);
  color: var(--primary);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
`;

const journeyData = [
  {
    date: '2024',
    title: 'Full Stack Developer & AI Specialist',
    description: 'Leading development of innovative web applications with AI integration.',
    technologies: ['React', 'Node.js', 'Python', 'TensorFlow'],
    align: 'right'
  },
  {
    date: '2023',
    title: 'AI Project Implementation',
    description: 'Successfully deployed multiple AI-powered solutions for clients.',
    technologies: ['Python', 'TensorFlow', 'OpenAI', 'Docker'],
    align: 'left'
  },
  {
    date: '2022',
    title: 'Web Development Journey',
    description: 'Mastered modern web technologies and frameworks.',
    technologies: ['React', 'Vue.js', 'Node.js', 'MongoDB'],
    align: 'right'
  },
  {
    date: '2021',
    title: 'Started Learning Programming',
    description: 'Began the journey into software development with basic web technologies.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python'],
    align: 'left'
  }
];

const Timeline = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <TimelineContainer>
      <TimelineTitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Coding Journey
      </TimelineTitle>
      
      <TimelineWrapper>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {journeyData.map((item, index) => (
            <TimelineItem
              key={index}
              align={item.align}
              variants={itemVariants}
            >
              <TimelineContent align={item.align}>
                <TimelineDate>{item.date}</TimelineDate>
                <TimelineHeading>{item.title}</TimelineHeading>
                <TimelineDescription>{item.description}</TimelineDescription>
                <TimelineTech>
                  {item.technologies.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </TimelineTech>
              </TimelineContent>
            </TimelineItem>
          ))}
        </motion.div>
      </TimelineWrapper>
    </TimelineContainer>
  );
};

export default Timeline;
