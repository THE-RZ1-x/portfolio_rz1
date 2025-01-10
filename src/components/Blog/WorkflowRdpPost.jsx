import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaCode, FaDesktop, FaInfoCircle, FaDocker, FaUbuntu, FaServer } from 'react-icons/fa';

const PostContainer = styled.article`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  color: var(--light);
`;

const PostHeader = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`;

const PostTitle = styled(motion.h1)`
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 1rem;
`;

const PostMeta = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-bottom: 2rem;
`;

const PostImage = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  margin-bottom: 2rem;
  border: 1px solid rgba(0, 247, 255, 0.1);
`;

const PostContent = styled.div`
  line-height: 1.8;
  font-size: 1.1rem;
  
  h2 {
    color: var(--primary);
    font-size: 1.8rem;
    margin: 2rem 0 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  h3 {
    color: var(--primary);
    font-size: 1.4rem;
    margin: 1.5rem 0 1rem;
  }

  p {
    margin-bottom: 1.5rem;
  }

  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

const CodeBlock = styled.pre`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 247, 255, 0.1);
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  overflow-x: auto;
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
  
  code {
    color: #e6e6e6;
  }
`;

const InfoBox = styled.div`
  background: rgba(0, 247, 255, 0.05);
  border: 1px solid var(--primary);
  border-radius: 8px;
  padding: 1.5rem;
  margin: 2rem 0;

  h4 {
    color: var(--primary);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
`;

const SystemCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 247, 255, 0.1);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--primary);
    transform: translateY(-2px);
  }

  h4 {
    color: var(--primary);
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const RepoLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid var(--primary);
  border-radius: 5px;
  margin: 1rem 1rem 1rem 0;
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary);
    color: var(--dark);
  }
`;

const WorkflowRdpPost = () => {
  return (
    <PostContainer>
      <PostHeader>
        <PostTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Creating Free RDP with GitHub Actions Workflow
        </PostTitle>
        <PostMeta>January 10, 2025 • 12 min read</PostMeta>
        <PostImage src="https://images.unsplash.com/photo-1607743386760-88ac62b89b8a" />
      </PostHeader>

      <PostContent>
        <p>
          Want to set up a free Remote Desktop environment using GitHub Actions? In this guide, I'll show you 
          how to create a powerful RDP workspace using GitHub Actions workflow, with multiple OS options including 
          a customized Ubuntu Desktop with NoMachine.
        </p>

        <InfoBox>
          <h4><FaInfoCircle /> Prerequisites</h4>
          <ul>
            <li>A GitHub account</li>
            <li>Basic knowledge of GitHub Actions</li>
            <li>NoMachine Client (for Ubuntu Desktop option)</li>
          </ul>
        </InfoBox>

        <h2><FaServer /> Available System Options</h2>
        
        <SystemCard>
          <h4><FaUbuntu /> Ubuntu Desktop with NoMachine</h4>
          <p>
            A full Ubuntu desktop environment with NoMachine remote access, offering:
          </p>
          <ul>
            <li>XFCE4 Desktop Environment</li>
            <li>Pre-installed development tools</li>
            <li>Better performance than traditional RDP</li>
            <li>Persistent workspace option</li>
          </ul>
          <RepoLink 
            href="https://github.com/THE-RZ1-x/Docker-Ubuntu-Desktop-NoMachine" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaDocker /> View Docker Setup
          </RepoLink>
        </SystemCard>

        <h2><FaCode /> Setting Up the Workflow</h2>
        
        <p>
          The workflow uses GitHub Actions to create a remote desktop environment. Here's how to set it up:
        </p>

        <CodeBlock>
          <code>
{`name: RDP Workspace
on: workflow_dispatch
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Setup Remote Desktop
      run: |
        sudo apt-get update
        sudo apt-get install -y xfce4 xfce4-goodies
        sudo apt-get install -y nomachine
        # Additional setup commands...`}
          </code>
        </CodeBlock>

        <h3>Key Features</h3>
        <ul>
          <li>6-hour continuous runtime</li>
          <li>Automatic setup and configuration</li>
          <li>Persistent storage options</li>
          <li>Multiple desktop environment choices</li>
          <li>Pre-installed development tools</li>
        </ul>

        <InfoBox>
          <h4><FaInfoCircle /> Usage Guidelines</h4>
          <p>
            To maintain compliance with GitHub's terms of service:
          </p>
          <ul>
            <li>Use the RDP for development purposes only</li>
            <li>Don't run cryptocurrency miners or malicious software</li>
            <li>Don't abuse the system resources</li>
            <li>Keep your workflows within GitHub's usage limits</li>
          </ul>
        </InfoBox>

        <h2><FaDesktop /> Connecting to Your Workspace</h2>
        
        <h3>For Ubuntu Desktop with NoMachine:</h3>
        <ol>
          <li>Download and install NoMachine client</li>
          <li>Use the connection details provided in the workflow logs</li>
          <li>Connect using the auto-generated credentials</li>
          <li>Enjoy your Ubuntu desktop environment!</li>
        </ol>

        <h3>Customization Options</h3>
        <ul>
          <li>Custom desktop environments (XFCE4, GNOME, KDE)</li>
          <li>Additional software packages</li>
          <li>Persistent storage configuration</li>
          <li>Network and security settings</li>
        </ul>

        <h2>Troubleshooting Common Issues</h2>
        <ul>
          <li>Connection timeout: Check GitHub Actions logs</li>
          <li>Authentication issues: Verify credentials from logs</li>
          <li>Performance problems: Adjust NoMachine client settings</li>
          <li>Workspace termination: Check runtime limits</li>
        </ul>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
          <RepoLink 
            href="https://github.com/THE-RZ1-x/free-rdp-by-rz1" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaGithub /> Free RDP Workflow
          </RepoLink>
          <RepoLink 
            href="https://github.com/THE-RZ1-x/Docker-Ubuntu-Desktop-NoMachine" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaDocker /> Ubuntu Desktop Setup
          </RepoLink>
        </div>
      </PostContent>
    </PostContainer>
  );
};

export default WorkflowRdpPost;
