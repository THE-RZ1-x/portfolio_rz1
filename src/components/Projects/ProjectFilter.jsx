import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
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

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled(motion.button)`
  background: ${props => props.active ? 'var(--primary)' : 'transparent'};
  color: ${props => props.active ? 'var(--dark)' : 'var(--primary)'};
  border: 1px solid var(--primary);
  padding: 0.5rem 1rem;
  border-radius: 25px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.active ? 'var(--primary)' : 'rgba(0, 247, 255, 0.1)'};
    transform: translateY(-2px);
  }
`;

const ProjectGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(0, 247, 255, 0.05);
  border: 1px solid rgba(0, 247, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

const ProjectImage = styled.div`
  height: 200px;
  background: ${props => \`url(\${props.image}) center/cover\`};
  border-bottom: 1px solid rgba(0, 247, 255, 0.1);
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  color: var(--light);
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

const TechTag = styled.span`
  background: rgba(0, 247, 255, 0.1);
  color: var(--primary);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  color: var(--primary);
  text-decoration: none;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;

  &:hover {
    text-decoration: underline;
  }
`;

const projectsData = [
  {
    id: 1,
    title: 'AI Chat Assistant',
    description: 'A sophisticated chatbot powered by machine learning algorithms.',
    image: '/projects/ai-chat.jpg',
    category: 'AI',
    tech: ['Python', 'TensorFlow', 'React', 'Node.js'],
    github: 'https://github.com/yourusername/ai-chat',
    demo: 'https://ai-chat-demo.com'
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    description: 'Full-featured online shopping platform with payment integration.',
    image: '/projects/ecommerce.jpg',
    category: 'Web',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/yourusername/ecommerce',
    demo: 'https://ecommerce-demo.com'
  },
  {
    id: 3,
    title: 'Image Recognition App',
    description: 'Mobile app that identifies objects in real-time using AI.',
    image: '/projects/image-recognition.jpg',
    category: 'Mobile',
    tech: ['React Native', 'TensorFlow Lite', 'Python'],
    github: 'https://github.com/yourusername/image-recognition',
    demo: 'https://image-recognition-demo.com'
  },
  // Add more projects as needed
];

const categories = ['All', 'AI', 'Web', 'Mobile'];

const ProjectFilter = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  const handleFilterClick = (category) => {
    setActiveFilter(category);
    if (category === 'All') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(project => project.category === category));
    }
  };

  return (
    <ProjectSection>
      <SectionTitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Featured Projects
      </SectionTitle>

      <FilterContainer>
        {categories.map((category) => (
          <FilterButton
            key={category}
            active={activeFilter === category}
            onClick={() => handleFilterClick(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </FilterButton>
        ))}
      </FilterContainer>

      <ProjectGrid
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectImage image={project.image} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.tech.map((tech, index) => (
                    <TechTag key={index}>{tech}</TechTag>
                  ))}
                </TechStack>
                <ProjectLinks>
                  <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> GitHub
                  </ProjectLink>
                  <ProjectLink href={project.demo} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </AnimatePresence>
      </ProjectGrid>
    </ProjectSection>
  );
};

export default ProjectFilter;
