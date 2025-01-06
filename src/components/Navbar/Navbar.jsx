import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: rgba(10, 25, 47, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  z-index: 1000;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Logo = styled(Link)`
  font-size: 2rem;
  font-weight: bold;
  color: var(--primary);
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: var(--secondary);
    transform: translateY(-2px);
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 80px;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    flex-direction: column;
    background: rgba(10, 25, 47, 0.95);
    backdrop-filter: blur(10px);
    width: 100%;
    height: calc(100vh - 80px);
    padding: 2rem;
    transition: all 0.3s ease;
  }
`;

const NavLink = styled(Link)`
  color: var(--light);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    color: var(--primary);
    background: rgba(0, 247, 255, 0.1);
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 1rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--light);
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: var(--primary);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavContainer style={{ 
      boxShadow: scrolled ? '0 5px 15px rgba(0,0,0,0.3)' : 'none',
      background: scrolled ? 'rgba(10, 25, 47, 0.95)' : 'transparent'
    }}>
      <Logo to="/">RZ1</Logo>
      <MobileMenuButton onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MobileMenuButton>
      <NavLinks isOpen={isOpen}>
        <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
        <NavLink to="/skills" onClick={() => setIsOpen(false)}>Skills</NavLink>
        <NavLink to="/projects" onClick={() => setIsOpen(false)}>Projects</NavLink>
        <NavLink to="/cv" onClick={() => setIsOpen(false)}>CV</NavLink>
        <NavLink to="/services" onClick={() => setIsOpen(false)}>Services</NavLink>
        <NavLink to="/social" onClick={() => setIsOpen(false)}>Social</NavLink>
        <NavLink to="/blog" onClick={() => setIsOpen(false)}>Blog</NavLink>
        <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
      </NavLinks>
    </NavContainer>
  );
};

export default Navbar;
