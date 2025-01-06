import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaGithub, FaStar, FaCodeBranch, FaUsers } from 'react-icons/fa';

const Container = styled.div`
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  margin: 2rem 0;
`;

const Title = styled.h2`
  color: var(--primary);
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  svg {
    font-size: 1.8rem;
  }
`;

const FiltersContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const Filter = styled.select`
  background: rgba(255, 255, 255, 0.1);
  color: var(--light);
  padding: 0.5rem 1rem;
  border: 1px solid var(--primary);
  border-radius: 8px;
  outline: none;
  cursor: pointer;

  option {
    background: var(--dark);
  }
`;

const ReposGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const RepoCard = styled.a`
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 12px;
  text-decoration: none;
  color: var(--light);
  transition: transform 0.3s ease;
  border: 1px solid transparent;

  &:hover {
    transform: translateY(-5px);
    border-color: var(--primary);
  }

  h3 {
    color: var(--primary);
    margin-bottom: 1rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 1rem;
    font-size: 0.9rem;
  }
`;

const Stats = styled.div`
  display: flex;
  gap: 1rem;
  color: var(--primary);
  font-size: 0.9rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const CollaboratorsSection = styled.div`
  margin-top: 3rem;
`;

const CollaboratorsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
`;

const CollaboratorCard = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 10px;
  text-decoration: none;
  color: var(--light);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

const GitHubExplorer = () => {
  const [repos, setRepos] = useState([]);
  const [collaborators, setCollaborators] = useState([]);
  const [languageFilter, setLanguageFilter] = useState('all');
  const [sortBy, setSortBy] = useState('stars');

  // Mock data - Replace with actual GitHub API calls
  useEffect(() => {
    // Simulated repos data
    setRepos([
      {
        name: 'Project 1',
        description: 'A full-stack web application built with React and Node.js',
        language: 'JavaScript',
        stars: 45,
        forks: 12,
        url: 'https://github.com/yourusername/project1'
      },
      // Add more repos...
    ]);

    // Simulated collaborators data
    setCollaborators([
      {
        name: 'John Doe',
        avatar: 'https://via.placeholder.com/50',
        profile: 'https://github.com/johndoe',
        role: 'Frontend Developer'
      },
      // Add more collaborators...
    ]);
  }, []);

  return (
    <Container>
      <Title>
        <FaGithub /> GitHub Explorer
      </Title>

      <FiltersContainer>
        <Filter value={languageFilter} onChange={(e) => setLanguageFilter(e.target.value)}>
          <option value="all">All Languages</option>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
        </Filter>

        <Filter value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="stars">Most Stars</option>
          <option value="forks">Most Forks</option>
          <option value="recent">Most Recent</option>
        </Filter>
      </FiltersContainer>

      <ReposGrid>
        {repos.map((repo, index) => (
          <RepoCard key={index} href={repo.url} target="_blank" rel="noopener noreferrer">
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <Stats>
              <div>
                <FaStar /> {repo.stars}
              </div>
              <div>
                <FaCodeBranch /> {repo.forks}
              </div>
              <div>{repo.language}</div>
            </Stats>
          </RepoCard>
        ))}
      </ReposGrid>

      <CollaboratorsSection>
        <Title>
          <FaUsers /> Collaborators
        </Title>
        <CollaboratorsList>
          {collaborators.map((collaborator, index) => (
            <CollaboratorCard 
              key={index}
              href={collaborator.profile}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={collaborator.avatar} alt={collaborator.name} />
              <div>
                <h4>{collaborator.name}</h4>
                <small>{collaborator.role}</small>
              </div>
            </CollaboratorCard>
          ))}
        </CollaboratorsList>
      </CollaboratorsSection>
    </Container>
  );
};

export default GitHubExplorer;
