// استيراد المكتبات اللازمة
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blink, fadeIn, slideUp, glitch } from '../../styles/animations';

// تنسيق الحاوية الرئيسية للصفحة الأولى
const HeroContainer = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  z-index: 10;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(10, 25, 47, 0.3);
    z-index: -1;
  }
`;

// تنسيق محتوى الصفحة الأولى
const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
  position: relative;
  z-index: 15;
`;

// تنسيق نافذة الطرفية
const TerminalWindow = styled(motion.div)`
  background: ${({ theme }) => theme.terminal.background};
  border-radius: 10px;
  padding: 1.5rem;
  margin: 2rem auto;
  width: 100%;
  max-width: 750px;
  border: 1px solid ${({ theme }) => theme.border};
  position: relative;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 30px;
    background: ${({ theme }) => theme.terminal.background};
    border-radius: 10px 10px 0 0;
    opacity: 0.8;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
      0deg,
      ${({ theme }) => theme.terminal.background} 0px,
      ${({ theme }) => theme.terminal.background} 1px,
      transparent 1px,
      transparent 2px
    );
    opacity: 0.1;
    pointer-events: none;
  }
`;

// تنسيق رأس نافذة الطرفية
const TerminalHeader = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
`;

// تنسيق أزرار نافذة الطرفية
const TerminalButton = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.color};
`;

// تنسيق سطر الأوامر
const TerminalPrompt = styled.div`
  color: ${({ theme }) => theme.terminal.prompt};
  font-family: 'Fira Code', monospace;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 0.8rem;
  font-size: ${props => props.large ? 'clamp(1.5rem, 3vw, 2.2rem)' : '1rem'};
  opacity: 0.9;

  &::before {
    content: '>';
    color: #50fa7b;
    opacity: 0.8;
    text-shadow: 0 0 5px #50fa7b;
    ${props => props.large && `
      font-size: 1.5rem;
    `}
  }
`;

// تنسيق نص الطرفية
const TerminalText = styled.div`
  font-family: 'Fira Code', monospace;
  color: var(--light);
  position: relative;
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

// تنسيق اسم المستخدم
const TerminalName = styled.span`
  position: relative;
  color: ${({ theme }) => theme.primary};
  text-shadow: 0 0 8px ${({ theme }) => theme.primary}40;
  letter-spacing: 2px;
  font-family: 'Fira Code', 'Courier New', monospace;
  font-weight: 500;
  pointer-events: none;
`;

// تنسيق حرف مكتوب
const TypedCharacter = styled.span`
  display: inline-block;
  position: relative;
  margin-right: ${props => props.isSpace ? '0.5em' : '0'};
  text-shadow: 0 0 10px ${({ theme }) => theme.primary};
  opacity: 0.9;
  pointer-events: none;
`;

// تنسيق المؤشر
const Cursor = styled.span`
  display: inline-block;
  width: 10px;
  height: 1.2em;
  background-color: ${({ theme }) => theme.primary};
  margin-left: 4px;
  animation: ${blink} 1s step-end infinite;
  box-shadow: 0 0 8px ${({ theme }) => theme.primary};
  opacity: 0.8;
`;

// تنسيق تحية الترحيب
const Greeting = styled(motion.p)`
  font-size: clamp(1rem, 3vw, 1.2rem);
  color: var(--primary);
  margin-bottom: 1rem;
  opacity: 0.9;
`;

// تنسيق العنوان الفرعي
const SubTitle = styled(motion.p)`
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  color: var(--light);
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto 2rem;
`;

// تنسيق حاوية الأزرار
const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
`;

// تنسيق الزر
const StyledButton = styled(Link)`
  padding: 0.8rem 2rem;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  ${props => props.$primary ? `
    background: var(--primary);
    color: var(--dark);
    border: none;
    
    &:hover {
      background: #4d4dff;
      transform: translateY(-3px);
    }
  ` : `
    background: transparent;
    color: var(--primary);
    border: 1px solid var(--primary);
    
    &:hover {
      background: rgba(0, 247, 255, 0.1);
      transform: translateY(-3px);
    }
  `}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }

  &:hover::before {
    left: 100%;
  }
`;

// مكون الصفحة الرئيسية
const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentText, setCurrentText] = useState('name');
  const [isVisible, setIsVisible] = useState(false);
  const fullName = 'SALAH-EDDINE  RHAZOUANE';
  const signature = 'RZ1';

  useEffect(() => {
    setIsVisible(true);
    
    let timeout;
    const typeText = () => {
      const currentFullText = currentText === 'name' ? fullName : signature;
      
      if (isTyping && !isDeleting) {
        if (displayText !== currentFullText) {
          timeout = setTimeout(() => {
            setDisplayText(currentFullText.slice(0, displayText.length + 1));
          }, 50);
        } else {
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, 2000);
        }
      } else if (isDeleting) {
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentText(currentText === 'name' ? 'signature' : 'name');
        } else {
          timeout = setTimeout(() => {
            setDisplayText(displayText.slice(0, -1));
          }, 30);
        }
      }
    };

    typeText();
    return () => clearTimeout(timeout);
  }, [displayText, isTyping, isDeleting, currentText]);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <HeroContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <HeroContent>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <Greeting
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 }
            }}
          >
            {getGreeting()}, Welcome to my terminal
          </Greeting>

          <TerminalWindow
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 }
            }}
          >
            <TerminalHeader>
              <TerminalButton color="#ff5f56" />
              <TerminalButton color="#ffbd2e" />
              <TerminalButton color="#27c93f" />
            </TerminalHeader>
            
            <TerminalPrompt>
              user@portfolio:~$ whoami
            </TerminalPrompt>
            
            <TerminalPrompt large>
              <TerminalName>
                {displayText.split('').map((char, index) => (
                  <TypedCharacter 
                    key={index}
                    isSpace={index === 11}
                  >
                    {char}
                  </TypedCharacter>
                ))}
                <Cursor />
              </TerminalName>
            </TerminalPrompt>
          </TerminalWindow>

          <SubTitle
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 }
            }}
          >
            A passionate Full Stack Developer and AI enthusiast, crafting innovative digital solutions 
            that bridge creativity with cutting-edge technology.
          </SubTitle>

          <ButtonContainer
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 }
            }}
          >
            <StyledButton 
              to="/projects" 
              $primary
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </StyledButton>
            <StyledButton 
              to="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </StyledButton>
          </ButtonContainer>
        </motion.div>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
