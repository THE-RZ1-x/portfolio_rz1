import React from 'react';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
  background: var(--dark);
`;

const Particles = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  
  span {
    position: absolute;
    display: block;
    width: 2px;
    height: 2px;
    background: var(--primary);
    animation: float 50s linear infinite;
    opacity: 0;
    
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: var(--primary);
      border-radius: 50%;
      animation: pulse 2s ease-out infinite;
    }
  }

  @keyframes float {
    0% {
      transform: translateY(0) translateX(0);
      opacity: 1;
    }
    100% {
      transform: translateY(-100vh) translateX(100px);
      opacity: 0;
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }
`;

const AnimatedBackground = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100 + '%',
    top: Math.random() * 100 + '%',
    delay: Math.random() * 50 + 's',
    duration: (Math.random() * 20 + 30) + 's'
  }));

  return (
    <BackgroundContainer>
      <Particles>
        {particles.map(particle => (
          <span
            key={particle.id}
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration
            }}
          />
        ))}
      </Particles>
    </BackgroundContainer>
  );
};

export default AnimatedBackground;
