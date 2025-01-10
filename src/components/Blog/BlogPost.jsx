import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExclamationTriangle, FaCheck, FaTools } from 'react-icons/fa';

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

  p {
    margin-bottom: 1rem;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const ToolCard = styled.div`
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

const RatToolsPost = () => {
  return (
    <PostContainer>
      <PostHeader>
        <PostTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Understanding RAT Tools: Power and Responsibility
        </PostTitle>
        <PostMeta>January 10, 2025 • 8 min read</PostMeta>
        <PostImage src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" />
      </PostHeader>

      <PostContent>
        <p>
          Remote Access Tools (RATs) are powerful utilities in the world of system administration and cybersecurity. 
          When used ethically and legally, they serve as essential tools for IT professionals. This article explores 
          the legitimate uses of RATs, their importance in system administration, and the responsibility that comes 
          with their usage.
        </p>

        <InfoBox>
          <h4><FaExclamationTriangle /> Important Disclaimer</h4>
          <p>
            The tools and information provided here are for educational and professional purposes only. Always ensure 
            you have proper authorization before accessing any system. Unauthorized access to computer systems is illegal 
            and unethical.
          </p>
        </InfoBox>

        <h2>Legitimate Uses of RAT Tools</h2>
        <ul>
          <li>Remote System Administration and Maintenance</li>
          <li>Technical Support and Troubleshooting</li>
          <li>Network Management and Monitoring</li>
          <li>Security Testing (with proper authorization)</li>
          <li>Educational Purposes and Learning</li>
        </ul>

        <h2>Featured Tools from Our Collection</h2>
        
        <ToolCard>
          <h4><FaTools /> Remote Utilities</h4>
          <p>
            A professional-grade remote administration tool with features like remote desktop control, 
            file transfer, and system information gathering. Perfect for IT administrators managing 
            multiple systems.
          </p>
        </ToolCard>

        <ToolCard>
          <h4><FaTools /> DameWare Mini Remote Control</h4>
          <p>
            Enterprise-level remote access solution with advanced security features, multi-platform support, 
            and detailed logging capabilities. Ideal for corporate environments.
          </p>
        </ToolCard>

        <ToolCard>
          <h4><FaTools /> TightVNC</h4>
          <p>
            Open-source remote desktop software that's lightweight and efficient. Great for basic remote 
            access needs and educational purposes.
          </p>
        </ToolCard>

        <h2>Best Practices and Security Considerations</h2>
        <InfoBox>
          <h4><FaCheck /> Security Guidelines</h4>
          <ul>
            <li>Always use strong authentication methods</li>
            <li>Implement encryption for all remote sessions</li>
            <li>Keep detailed logs of all remote access activities</li>
            <li>Regularly update tools to patch security vulnerabilities</li>
            <li>Use VPNs for additional security when possible</li>
          </ul>
        </InfoBox>

        <h3>Common Use Cases</h3>
        <p>
          System administrators often use RAT tools for:
        </p>
        <ul>
          <li>Providing immediate technical support to remote users</li>
          <li>Performing system maintenance during off-hours</li>
          <li>Managing servers and workstations across multiple locations</li>
          <li>Conducting security audits and assessments</li>
          <li>Training and educational demonstrations</li>
        </ul>

        <RepoLink 
          href="https://github.com/THE-RZ1-x/RZ1_RAT-s_collect" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaGithub /> View Full Collection on GitHub
        </RepoLink>
      </PostContent>
    </PostContainer>
  );
};

export default RatToolsPost;
