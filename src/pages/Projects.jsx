import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = styled.section`
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
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: var(--primary);
    margin: 1rem auto;
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 247, 255, 0.1);
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    border-color: var(--primary);
    box-shadow: 0 10px 20px rgba(0, 247, 255, 0.1);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background: ${props => props.image ? `url(${props.image}) center/cover` : 'linear-gradient(45deg, #1a1a1a, #2a2a2a)'};
  position: relative;
  border-bottom: 1px solid rgba(0, 247, 255, 0.1);
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  color: var(--light);
  margin-bottom: 1rem;
  font-size: 1.3rem;
`;

const ProjectDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary);
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  border: 1px solid var(--primary);
  border-radius: 5px;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--primary);
    color: var(--dark);
  }

  svg {
    font-size: 1rem;
  }
`;

// Generate a live website preview image (WordPress mShots)
const getSiteShot = (url, width = 1200) => `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=${width}`;

const Projects = () => {
  const projects = [
    {
      title: 'Maroc Cart',
      description: 'Modern e-commerce frontend experience tailored for the Moroccan market.',
      image: getSiteShot('https://maroc-cart-frontend.windsurf.build/'),
      demo: 'https://maroc-cart-frontend.windsurf.build/',
      // github: '' // optional repo URL if available
    },
    {
      title: 'RZ1 Crypto',
      description: 'A cryptocurrency tracking and analysis platform providing real-time market data, price updates, and crypto insights.',
      image: 'https://raw.githubusercontent.com/THE-RZ1-x/RZ1crypto/main/screenshot.png',
      demo: 'https://the-rz1-x.github.io/RZ1crypto/',
      github: 'https://github.com/THE-RZ1-x/RZ1crypto'
    },
    {
      title: 'Profile Generator',
      description: 'A dynamic profile generator tool that creates personalized user profiles with customizable features and modern design elements.',
      image: 'https://raw.githubusercontent.com/THE-RZ1-x/RZ1_prfile_gen/main/screenshot.png',
      demo: 'https://the-rz1-x.github.io/RZ1_prfile_gen/',
      github: 'https://github.com/THE-RZ1-x/RZ1_prfile_gen'
    },
    {
      title: 'Multi Chat AI',
      description: 'An advanced AI chat application featuring multiple AI models including ChatGPT, Gemini, and Claude. Built with modern web technologies for seamless AI interactions.',
      image: 'https://raw.githubusercontent.com/THE-RZ1-x/multi_chat-ai/main/screenshot.png',
      demo: 'https://the-rz1-x.github.io/multi_chat-ai/',
      github: 'https://github.com/THE-RZ1-x/multi_chat-ai'
    },
    {
      title: 'Web App Games',
      description: 'A collection of interactive web-based games including Snake, Tetris, and more. Built with modern web technologies for an engaging gaming experience.',
      image: 'https://raw.githubusercontent.com/THE-RZ1-x/webapp_games_by_RZ1/main/screenshot.png',
      demo: 'https://the-rz1-x.github.io/webapp_games_by_RZ1/',
      github: 'https://github.com/THE-RZ1-x/webapp_games_by_RZ1'
    },
    {
      title: 'Portfolio-origin',
      description: 'A modern portfolio website showcasing my projects and skills, built with React and styled-components.',
      image: 'https://raw.githubusercontent.com/THE-RZ1-x/portfolio/main/screenshot.png',
      demo: 'https://the-rz1-x.github.io/portfolio/',
      github: 'https://github.com/THE-RZ1-x/portfolio'
    },
    {
      title: 'Weather App',
      description: 'A weather application that provides real-time weather information using weather API integration.',
      image: 'https://raw.githubusercontent.com/THE-RZ1-x/Weather-App/main/screenshot.png',
      demo: 'https://the-rz1-x.github.io/Weather-App/',
      github: 'https://github.com/THE-RZ1-x/Weather-App'
    },
    {
      title: 'Calculator',
      description: 'A fully functional calculator web application with a clean and modern interface.',
      image: 'https://raw.githubusercontent.com/THE-RZ1-x/Calculator/main/screenshot.png',
      demo: 'https://the-rz1-x.github.io/Calculator/',
      github: 'https://github.com/THE-RZ1-x/Calculator'
    },
    {
      title: 'Tic Tac Toe Game',
      description: 'A classic Tic Tac Toe game implementation with an interactive user interface.',
      image: 'https://raw.githubusercontent.com/THE-RZ1-x/Tic-Tac-Toe/main/screenshot.png',
      demo: 'https://the-rz1-x.github.io/Tic-Tac-Toe/',
      github: 'https://github.com/THE-RZ1-x/Tic-Tac-Toe'
    }
  ];

  const handleProjectClick = (demoUrl) => {
    window.open(demoUrl, '_blank');
  };

  return (
    <ProjectsSection>
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </Title>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              onClick={() => handleProjectClick(project.demo)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectImage image={getSiteShot(project.demo)} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectLinks>
                  <ProjectLink
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </ProjectLink>
                  {project.github && (
                    <ProjectLink
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub /> GitHub
                    </ProjectLink>
                  )}
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
