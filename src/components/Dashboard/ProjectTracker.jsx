import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TrackerContainer = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 2rem;
  margin: 2rem 0;
  border: 1px solid rgba(0, 247, 255, 0.1);
`;

const Title = styled.h3`
  color: var(--primary);
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 10px;
  padding: 1.5rem;
  border: 1px solid rgba(0, 247, 255, 0.05);
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--primary);
    transform: translateX(10px);
  }
`;

const ProjectTitle = styled.h4`
  color: var(--light);
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
  margin: 0.5rem 0;
`;

const Progress = styled.div`
  height: 100%;
  background: var(--primary);
  border-radius: 3px;
  width: ${props => props.$progress}%;
  transition: width 1s ease-in-out;
  box-shadow: 0 0 10px var(--primary);
`;

const ProjectMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`;

const Tag = styled.span`
  background: rgba(0, 247, 255, 0.1);
  color: var(--primary);
  padding: 0.2rem 0.5rem;
  border-radius: 3px;
  font-size: 0.8rem;
`;

const liveProjects = [
  {
    title: "AI-Powered Personal Assistant",
    progress: 80,
    type: "AI/ML",
    daysLeft: 5,
    priority: "High"
  },
  {
    title: "E-commerce Platform Redesign",
    progress: 60,
    type: "Frontend",
    daysLeft: 10,
    priority: "Medium"
  },
  {
    title: "Blockchain Integration System",
    progress: 30,
    type: "Backend",
    daysLeft: 15,
    priority: "High"
  },
  {
    title: "Mobile App Development",
    progress: 45,
    type: "Mobile",
    daysLeft: 20,
    priority: "Medium"
  }
];

const ProjectTracker = () => {
  return (
    <TrackerContainer>
      <Title>🚀 Live Project Tracker</Title>
      <ProjectList>
        {liveProjects.map((project, index) => (
          <ProjectCard
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProgressBar>
              <Progress $progress={project.progress} />
            </ProgressBar>
            <ProjectMeta>
              <Tag>{project.type}</Tag>
              <span>{project.progress}% Complete</span>
              <span>{project.daysLeft} days left</span>
              <Tag>{project.priority}</Tag>
            </ProjectMeta>
          </ProjectCard>
        ))}
      </ProjectList>
    </TrackerContainer>
  );
};

export default ProjectTracker;
