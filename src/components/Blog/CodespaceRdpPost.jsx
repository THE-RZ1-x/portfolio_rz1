import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaCode, FaDesktop, FaInfoCircle, FaTerminal } from 'react-icons/fa';

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

const StepCard = styled.div`
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
  margin-top: 2rem;
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary);
    color: var(--dark);
  }
`;

const CodespaceRdpPost = () => {
  return (
    <PostContainer>
      <PostHeader>
        <PostTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Setting Up RDP in GitHub Codespaces: A Complete Guide
        </PostTitle>
        <PostMeta>January 10, 2025 • 10 min read</PostMeta>
        <PostImage src="https://images.unsplash.com/photo-1629654297299-c8506221ca97" />
      </PostHeader>

      <PostContent>
        <p>
          GitHub Codespaces provides a powerful cloud development environment, but sometimes you need a full 
          desktop experience. In this guide, I'll show you how to set up Remote Desktop Protocol (RDP) access 
          to your GitHub Codespace, allowing you to use it as a full virtual machine in the cloud.
        </p>

        <InfoBox>
          <h4><FaInfoCircle /> Prerequisites</h4>
          <ul>
            <li>A GitHub account with Codespaces access</li>
            <li>Basic knowledge of GitHub and command line</li>
            <li>An RDP client (like Microsoft Remote Desktop)</li>
          </ul>
        </InfoBox>

        <h2><FaCode /> Setting Up Your Codespace</h2>
        
        <StepCard>
          <h4><FaTerminal /> Step 1: Create a New Codespace</h4>
          <p>
            Start by creating a new Codespace from my template repository. This repository contains all the 
            necessary scripts and configurations to set up RDP access.
          </p>
          <CodeBlock>
            <code>
              git clone https://github.com/THE-RZ1-x/RZ1_CODESPACE_RDP.git
              cd RZ1_CODESPACE_RDP
            </code>
          </CodeBlock>
        </StepCard>

        <StepCard>
          <h4><FaTerminal /> Step 2: Configure the Environment</h4>
          <p>
            The repository includes a setup script that will configure all necessary components:
          </p>
          <ul>
            <li>XFCE4 Desktop Environment</li>
            <li>TigerVNC Server</li>
            <li>XRDP Server</li>
            <li>Various desktop applications</li>
          </ul>
          <CodeBlock>
            <code>
              chmod +x setup.sh
              ./setup.sh
            </code>
          </CodeBlock>
        </StepCard>

        <h2><FaDesktop /> Connecting to Your RDP Server</h2>
        
        <StepCard>
          <h4><FaTerminal /> Step 3: Start the RDP Server</h4>
          <p>
            Once the setup is complete, start the RDP server using:
          </p>
          <CodeBlock>
            <code>
              sudo service xrdp start
              sudo service xrdp status  # Verify the server is running
            </code>
          </CodeBlock>
        </StepCard>

        <InfoBox>
          <h4><FaInfoCircle /> Security Note</h4>
          <p>
            The setup script includes basic security configurations, but you should:
          </p>
          <ul>
            <li>Change the default password immediately</li>
            <li>Use SSH tunneling for additional security</li>
            <li>Keep your Codespace updated</li>
          </ul>
        </InfoBox>

        <h2>Customization and Features</h2>
        <p>
          The RDP setup includes several features:
        </p>
        <ul>
          <li>Full XFCE4 desktop environment</li>
          <li>Pre-installed development tools</li>
          <li>Browser and basic office applications</li>
          <li>Clipboard sharing between local and remote system</li>
          <li>File transfer capabilities</li>
        </ul>

        <h3>Troubleshooting Common Issues</h3>
        <ul>
          <li>Connection refused: Check if the RDP service is running</li>
          <li>Black screen: Verify XFCE4 is properly installed</li>
          <li>Slow performance: Adjust your RDP client settings</li>
          <li>Authentication issues: Verify your credentials</li>
        </ul>

        <RepoLink 
          href="https://github.com/THE-RZ1-x/RZ1_CODESPACE_RDP" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaGithub /> View Project on GitHub
        </RepoLink>
      </PostContent>
    </PostContainer>
  );
};

export default CodespaceRdpPost;
