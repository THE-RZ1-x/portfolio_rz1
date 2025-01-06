// استيراد المكتبات اللازمة
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// تنسيق الحاوية الرئيسية للصفحة الأولى
const HeroContainer = styled.div`
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
  background: rgba(16, 24, 39, 0.8);
  border-radius: 10px;
  padding: 1.5rem;
  margin: 2rem auto;
  width: 100%;
  max-width: 750px;
  border: 1px solid rgba(0, 247, 255, 0.2);
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 247, 255, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 30px;
    background: rgba(0, 247, 255, 0.1);
    border-radius: 10px 10px 0 0;
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
  color: var(--primary);
  font-family: 'Fira Code', monospace;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 0.8rem;
  font-size: ${props => props.large ? 'clamp(1.5rem, 3vw, 2.2rem)' : '1rem'};

  &::before {
    content: '>';
    color: #50fa7b;
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
const TerminalName = styled.div`
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  font-weight: 600;
  color: #00ff00;
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Fira Code', monospace;
  position: relative;
`;

// تنسيق المؤشر
const Cursor = styled.span`
  display: inline-block;
  width: 8px;
  height: 1.2em;
  background: #00ff00;
  margin-left: 4px;
  animation: blink 1s infinite;

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;

// تنسيق حرف مكتوب
const TypedCharacter = styled.span`
  display: inline-block;
  color: #00ff00;
  text-shadow: 0 0 5px #00ff00;
  animation: typeJiggle 0.1s ease;

  @keyframes typeJiggle {
    0% { transform: translateY(0); }
    25% { transform: translateY(-1px); }
    75% { transform: translateY(1px); }
    100% { transform: translateY(0); }
  }
`;

// تنسيق التوقيع
const Signature = styled.span`
  display: inline-block;
  background: #00ff00;
  color: #000;
  font-family: 'Fira Code', monospace;
  font-size: clamp(1rem, 1.5vw, 1.3rem);
  padding: 4px 12px;
  border-radius: 6px;
  font-weight: bold;
  letter-spacing: 1px;
  box-shadow: 0 0 10px #00ff00,
              inset 0 0 5px #00ff00;
  text-shadow: none;
  border: 1px solid #00ff00;
  margin-left: 15px;
  position: relative;
  z-index: 2;
  opacity: ${props => props.show ? 1 : 0};
  transform: ${props => props.show ? 'translateY(0)' : 'translateY(10px)'};
  transition: opacity 0.3s ease, transform 0.3s ease;
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
  // حالة النص المعروض
  const [displayText, setDisplayText] = useState('');
  // حالة المؤشر
  const [isTyping, setIsTyping] = useState(true);
  // حالة الحذف
  const [isDeleting, setIsDeleting] = useState(false);
  // النص الحالي
  const [currentText, setCurrentText] = useState('name'); // 'name' or 'signature'
  // الاسم الكامل
  const fullName = 'SALAH-EDDINE RHAZOUANE';
  // التوقيع
  const signature = 'RZ1';

  // تأثير الكتابة
  useEffect(() => {
    let timeout;
    
    // دالة لكتابة النص حرفاً حرفاً
    const typeText = () => {
      const currentFullText = currentText === 'name' ? fullName : signature;
      
      if (isTyping && !isDeleting) {
        if (displayText !== currentFullText) {
          timeout = setTimeout(() => {
            setDisplayText(currentFullText.slice(0, displayText.length + 1));
          }, 150);
        } else {
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, 1000); // Wait before starting to delete
        }
      } else if (isDeleting) {
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentText(currentText === 'name' ? 'signature' : 'name');
        } else {
          timeout = setTimeout(() => {
            setDisplayText(displayText.slice(0, -1));
          }, 100);
        }
      }
    };

    typeText();
    return () => clearTimeout(timeout);
  }, [displayText, isTyping, isDeleting, currentText]);

  // دالة للحصول على تحية الترحيب
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  // متغيرات التحريك
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <HeroContainer>
      <HeroContent>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Greeting variants={itemVariants}>
            {getGreeting()}, Welcome to my terminal
          </Greeting>

          <TerminalWindow variants={itemVariants}>
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
                  >
                    {char}
                  </TypedCharacter>
                ))}
                <Cursor />
              </TerminalName>
            </TerminalPrompt>
          </TerminalWindow>

          <SubTitle variants={itemVariants}>
            A passionate Full Stack Developer and AI enthusiast, crafting innovative digital solutions 
            that bridge creativity with cutting-edge technology.
          </SubTitle>

          <ButtonContainer variants={itemVariants}>
            <StyledButton to="/projects" $primary>
              View My Work
            </StyledButton>
            <StyledButton to="/contact">
              Get In Touch
            </StyledButton>
          </ButtonContainer>
        </motion.div>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
