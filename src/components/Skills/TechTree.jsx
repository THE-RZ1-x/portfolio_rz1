import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const TreeContainer = styled.div`
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  margin: 2rem 0;
  border: 1px solid rgba(0, 247, 255, 0.1);
  overflow: hidden;
`;

const Title = styled.h3`
  color: var(--primary);
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TreeBranch = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background: rgba(0, 247, 255, 0.2);
    z-index: 0;
  }
`;

const TechNode = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 247, 255, 0.1);
  border-radius: 10px;
  padding: 1rem;
  cursor: pointer;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--primary);
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(0, 247, 255, 0.2);
  }
`;

const NodeTitle = styled.h4`
  color: var(--primary);
  font-size: 1rem;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const NodeIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const DetailPanel = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 247, 255, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  margin-top: 1rem;
`;

const DetailTitle = styled.h5`
  color: var(--primary);
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

const DetailList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DetailItem = styled.li`
  color: var(--light);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '▹';
    color: var(--primary);
  }
`;

const techData = {
  frontend: {
    icon: "🎨",
    title: "Frontend",
    details: {
      projects: ["E-commerce Platform", "Portfolio Website", "Dashboard UI"],
      tools: ["VS Code", "Chrome DevTools", "Figma"],
      frameworks: ["React", "Vue.js", "Next.js"]
    }
  },
  backend: {
    icon: "⚙️",
    title: "Backend",
    details: {
      projects: ["REST API Service", "Authentication System", "Database Design"],
      tools: ["Postman", "Docker", "Git"],
      frameworks: ["Node.js", "Express", "MongoDB"]
    }
  },
  ai: {
    icon: "🤖",
    title: "AI/ML",
    details: {
      projects: ["Chatbot", "Image Recognition", "Data Analysis"],
      tools: ["Jupyter", "TensorFlow", "PyTorch"],
      frameworks: ["scikit-learn", "Keras", "NLTK"]
    }
  },
  mobile: {
    icon: "📱",
    title: "Mobile",
    details: {
      projects: ["iOS App", "Android App", "Cross-platform App"],
      tools: ["Xcode", "Android Studio", "Expo"],
      frameworks: ["React Native", "Flutter", "Swift"]
    }
  }
};

const TechTree = () => {
  const [selectedTech, setSelectedTech] = useState(null);

  return (
    <TreeContainer>
      <Title>🌳 Tech Tree</Title>
      
      <TreeBranch>
        {Object.entries(techData).map(([key, tech], index) => (
          <TechNode
            key={key}
            onClick={() => setSelectedTech(selectedTech === key ? null : key)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <NodeIcon>{tech.icon}</NodeIcon>
            <NodeTitle>{tech.title}</NodeTitle>
          </TechNode>
        ))}
      </TreeBranch>

      <AnimatePresence>
        {selectedTech && (
          <DetailPanel
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <DetailTitle>{techData[selectedTech].title} Details</DetailTitle>
            <DetailList>
              <DetailItem>Projects:</DetailItem>
              {techData[selectedTech].details.projects.map((project, index) => (
                <DetailItem key={index}>- {project}</DetailItem>
              ))}
              <DetailItem style={{ marginTop: '1rem' }}>Tools:</DetailItem>
              {techData[selectedTech].details.tools.map((tool, index) => (
                <DetailItem key={index}>- {tool}</DetailItem>
              ))}
              <DetailItem style={{ marginTop: '1rem' }}>Frameworks:</DetailItem>
              {techData[selectedTech].details.frameworks.map((framework, index) => (
                <DetailItem key={index}>- {framework}</DetailItem>
              ))}
            </DetailList>
          </DetailPanel>
        )}
      </AnimatePresence>
    </TreeContainer>
  );
};

export default TechTree;
