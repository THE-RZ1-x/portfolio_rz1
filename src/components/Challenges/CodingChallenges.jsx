import React from 'react';
import styled from 'styled-components';
import { FaReddit, FaTwitter, FaLinkedin, FaCode } from 'react-icons/fa';

const ChallengesContainer = styled.div`
  padding: 2rem;
  background: rgba(10, 25, 47, 0.7);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  margin: 2rem 0;
`;

const Title = styled.h2`
  color: #00f7ff;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  svg {
    font-size: 1.8rem;
  }
`;

const ChallengeCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 15px;
  margin-bottom: 2rem;
  border: 1px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    border-color: #00f7ff;
    transform: translateY(-5px);
  }
`;

const ChallengeMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.7);
`;

const Difficulty = styled.span`
  padding: 0.3rem 1rem;
  border-radius: 15px;
  font-size: 0.9rem;
  background: ${props => {
    switch(props.level) {
      case 'Easy': return 'rgba(0, 255, 0, 0.2)';
      case 'Medium': return 'rgba(255, 165, 0, 0.2)';
      case 'Hard': return 'rgba(255, 0, 0, 0.2)';
      default: return 'rgba(255, 255, 255, 0.2)';
    }
  }};
  color: ${props => {
    switch(props.level) {
      case 'Easy': return '#4caf50';
      case 'Medium': return '#ff9800';
      case 'Hard': return '#f44336';
      default: return 'white';
    }
  }};
`;

const ChallengeContent = styled.div`
  color: white;
  margin-bottom: 2rem;

  h3 {
    color: #00f7ff;
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: disc;
    padding-left: 1.5rem;
    margin-bottom: 1rem;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

const ShareButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const ShareButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.color};
    transform: translateY(-2px);
  }

  svg {
    font-size: 1.2rem;
  }
`;

const CodingChallenges = () => {
  const currentChallenge = {
    title: "Build a Real-time Chat Application",
    difficulty: "Medium",
    deadline: "7 days left",
    description: "Create a real-time chat application using WebSocket technology. The application should support multiple chat rooms, user authentication, and message history.",
    requirements: [
      "User authentication system",
      "Real-time message updates",
      "Multiple chat room support",
      "Message history persistence",
      "Basic UI with responsive design"
    ]
  };

  const shareUrls = {
    reddit: "https://reddit.com/submit?url=YOUR_CHALLENGE_URL&title=Coding Challenge: Real-time Chat App",
    twitter: "https://twitter.com/intent/tweet?text=Check out this coding challenge!",
    linkedin: "https://www.linkedin.com/sharing/share-offsite/?url=YOUR_CHALLENGE_URL"
  };

  return (
    <ChallengesContainer>
      <Title>
        <FaCode /> Weekly Coding Challenge
      </Title>

      <ChallengeCard>
        <ChallengeMeta>
          <Difficulty level={currentChallenge.difficulty}>
            {currentChallenge.difficulty}
          </Difficulty>
          <span>{currentChallenge.deadline}</span>
        </ChallengeMeta>

        <ChallengeContent>
          <h3>{currentChallenge.title}</h3>
          <p>{currentChallenge.description}</p>
          <ul>
            {currentChallenge.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </ChallengeContent>

        <ShareButtons>
          <ShareButton 
            href={shareUrls.reddit}
            target="_blank"
            rel="noopener noreferrer"
            color="rgba(255, 69, 0, 0.8)"
          >
            <FaReddit /> Share on Reddit
          </ShareButton>
          
          <ShareButton 
            href={shareUrls.twitter}
            target="_blank"
            rel="noopener noreferrer"
            color="rgba(29, 161, 242, 0.8)"
          >
            <FaTwitter /> Share on Twitter
          </ShareButton>
          
          <ShareButton 
            href={shareUrls.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            color="rgba(0, 119, 181, 0.8)"
          >
            <FaLinkedin /> Share on LinkedIn
          </ShareButton>
        </ShareButtons>
      </ChallengeCard>
    </ChallengesContainer>
  );
};

export default CodingChallenges;
