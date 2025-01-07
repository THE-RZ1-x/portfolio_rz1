import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: ${props => props.theme.background};
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid ${props => props.theme.textSecondary};
  border-top: 5px solid ${props => props.theme.primary};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const LoadingSpinner = () => {
  return (
    <SpinnerWrapper>
      <Spinner />
    </SpinnerWrapper>
  );
};

export default LoadingSpinner;
