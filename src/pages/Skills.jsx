import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import TechTree from '../components/Skills/TechTree';
import ProjectTracker from '../components/Dashboard/ProjectTracker';

const SkillsContainer = styled.div`
  padding: 100px 20px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: var(--primary);
  text-align: center;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  color: var(--light);
  margin-bottom: 3rem;
  font-size: 1.1rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const SkillCategory = styled(motion.div)`
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

const CategoryTitle = styled.h3`
  color: var(--primary);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SkillsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--light);
  font-size: 1rem;

  &::before {
    content: '▹';
    color: var(--primary);
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const StatCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  border: 1px solid rgba(0, 247, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--primary);
    transform: translateY(-5px);
  }
`;

const StatNumber = styled.h4`
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.p`
  color: var(--light);
  font-size: 1rem;
`;

const skills = {
  frontend: {
    title: "Frontend Development",
    icon: "🎨",
    skills: [
      "React.js", "Next.js", "TypeScript",
      "HTML5/CSS3", "Tailwind CSS", "JavaScript",
      "Redux", "Responsive Design", "Vue.js",
      "Material-UI", "Styled Components", "Webpack"
    ]
  },
  backend: {
    title: "Backend Development",
    icon: "⚙️",
    skills: [
      "Node.js", "Express.js", "Python",
      "MongoDB", "PostgreSQL", "RESTful APIs",
      "GraphQL", "Docker", "AWS",
      "Firebase", "Microservices", "CI/CD"
    ]
  },
  tools: {
    title: "Tools & Others",
    icon: "🛠️",
    skills: [
      "Git/GitHub", "VS Code", "Postman",
      "Figma", "Jest", "npm/yarn",
      "Linux", "Agile/Scrum", "Jira",
      "Vercel", "Netlify", "DevOps"
    ]
  }
};

const stats = [
  { number: "500+", label: "Problems Solved" },
  { number: "50+", label: "Projects Completed" },
  { number: "20+", label: "GitHub Repositories" },
  { number: "5+", label: "Years Experience" }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <SkillsContainer>
      <SectionTitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills & Projects
      </SectionTitle>
      <SectionSubtitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Explore my technical expertise and ongoing projects
      </SectionSubtitle>

      <ProjectTracker />
      
      <TechTree />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <SkillsGrid>
          {Object.entries(skills).map(([key, category], index) => (
            <SkillCategory
              key={key}
              variants={itemVariants}
            >
              <CategoryTitle>
                {category.icon} {category.title}
              </CategoryTitle>
              <SkillsList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem
                    key={skillIndex}
                    variants={itemVariants}
                  >
                    {skill}
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsGrid>

        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              variants={itemVariants}
            >
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsGrid>
      </motion.div>
    </SkillsContainer>
  );
};

export default Skills;
