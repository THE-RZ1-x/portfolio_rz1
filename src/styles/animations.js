import { keyframes } from 'styled-components';

export const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const glitch = keyframes`
  0% {
    clip-path: inset(50% 0 30% 0);
    transform: translate(-5px, 5px);
  }
  20% {
    clip-path: inset(15% 0 65% 0);
    transform: translate(5px, -5px);
  }
  40% {
    clip-path: inset(80% 0 5% 0);
    transform: translate(-5px, 5px);
  }
  60% {
    clip-path: inset(25% 0 60% 0);
    transform: translate(5px, -5px);
  }
  80% {
    clip-path: inset(70% 0 20% 0);
    transform: translate(-5px, 5px);
  }
  100% {
    clip-path: inset(50% 0 30% 0);
    transform: translate(0);
  }
`;
