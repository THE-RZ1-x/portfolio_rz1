import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LoadingContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.background};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const LoadingTerminal = styled(motion.div)`
  background: ${({ theme }) => theme.terminal.background};
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.shadow};
  width: 300px;
  text-align: center;
`;

const LoadingText = styled.div`
  color: ${({ theme }) => theme.primary};
  font-family: 'Fira Code', monospace;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &::before {
    content: '>';
    color: ${({ theme }) => theme.terminal.prompt};
  }
`;

const Cursor = styled(motion.span)`
  display: inline-block;
  width: 10px;
  height: 1.2em;
  background-color: ${({ theme }) => theme.primary};
  margin-left: 4px;
`;

const LoadingScreen = () => {
  return (
    <LoadingContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <LoadingTerminal
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <LoadingText>
          Loading
          <Cursor
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        </LoadingText>
      </LoadingTerminal>
    </LoadingContainer>
  );
};

export default LoadingScreen;
