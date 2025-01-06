import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TagCloud from 'TagCloud';

const CloudContainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;

  .tagcloud {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    letter-spacing: 0.0625em;
    font-size: 1.3em;
  }

  .tagcloud--item {
    color: var(--light);
    cursor: pointer;
    transition: color 0.3s;
    
    &:hover {
      color: var(--primary);
    }
  }
`;

const SkillsCloud = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!isInitialized) {
      const container = '.tagcloud';
      const texts = [
        'JavaScript', 'React', 'Node.js',
        'Python', 'TensorFlow', 'AI',
        'Machine Learning', 'HTML5', 'CSS3',
        'Git', 'Docker', 'AWS',
        'MongoDB', 'SQL', 'REST API',
        'TypeScript', 'Next.js', 'Vue.js'
      ];

      const options = {
        radius: 300,
        maxSpeed: 'normal',
        initSpeed: 'normal',
        keep: true,
      };

      TagCloud(container, texts, options);
      setIsInitialized(true);
    }
  }, [isInitialized]);

  return (
    <CloudContainer>
      <div className="tagcloud"></div>
    </CloudContainer>
  );
};

export default SkillsCloud;
