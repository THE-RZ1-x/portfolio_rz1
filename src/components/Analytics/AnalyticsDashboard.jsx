import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

const DashboardContainer = styled.div`
  padding: 2rem;
  background: rgba(10, 25, 47, 0.7);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  margin: 2rem 0;
`;

const Title = styled.h2`
  color: #00f7ff;
  margin-bottom: 2rem;
  text-align: center;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const PlatformCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const PlatformHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  color: #00f7ff;
  
  svg {
    font-size: 1.8rem;
  }
`;

const StatsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StatItem = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &:last-child {
    border-bottom: none;
  }
`;

const AnalyticsDashboard = () => {
  // Mock data - Replace with actual API calls
  const platformStats = {
    github: {
      icon: <FaGithub />,
      name: 'GitHub',
      stats: {
        'Total Repos': '25',
        'Stars': '150',
        'Followers': '75',
        'Contributions': '523'
      }
    },
    youtube: {
      icon: <FaYoutube />,
      name: 'YouTube',
      stats: {
        'Subscribers': '1.2K',
        'Total Views': '15K',
        'Videos': '45',
        'Watch Time': '2.5K hrs'
      }
    },
    twitter: {
      icon: <FaTwitter />,
      name: 'Twitter',
      stats: {
        'Followers': '850',
        'Tweets': '1.2K',
        'Engagements': '5.6K',
        'Impressions': '25K'
      }
    },
    linkedin: {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      stats: {
        'Connections': '500+',
        'Post Views': '10K',
        'Profile Views': '250',
        'Engagement Rate': '4.5%'
      }
    }
  };

  return (
    <DashboardContainer>
      <Title>Social Media Analytics</Title>
      <StatsGrid>
        {Object.entries(platformStats).map(([platform, data]) => (
          <PlatformCard key={platform}>
            <PlatformHeader>
              {data.icon}
              <h3>{data.name}</h3>
            </PlatformHeader>
            <StatsList>
              {Object.entries(data.stats).map(([stat, value]) => (
                <StatItem key={stat}>
                  <span>{stat}</span>
                  <span>{value}</span>
                </StatItem>
              ))}
            </StatsList>
          </PlatformCard>
        ))}
      </StatsGrid>
    </DashboardContainer>
  );
};

export default AnalyticsDashboard;
