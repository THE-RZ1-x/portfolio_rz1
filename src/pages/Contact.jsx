import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  min-height: 100vh;
  padding: 100px 50px;
  background: var(--dark);

  @media (max-width: 768px) {
    padding: 100px 20px;
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 2rem;
  text-align: center;
`;

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: var(--light);
  font-size: 1rem;
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 5px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: var(--light);
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border-radius: 5px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: var(--light);
  font-size: 1rem;
  min-height: 150px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  background: var(--primary);
  color: var(--dark);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--secondary);
    transform: translateY(-2px);
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

const ContactLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary);
  text-decoration: none;
  font-size: 1.1rem;
  transition: all 0.3s ease;

  &:hover {
    color: var(--secondary);
    transform: translateY(-2px);
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const phoneNumber = '+212 760-359753';
  const whatsappLink = 'https://wa.me/212760359753';
  const telegramLink = 'https://t.me/RZ1_x';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  return (
    <ContactSection>
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </Title>
        
        <ContactInfo>
          <ContactLinks>
            <ContactLink href={`tel:${phoneNumber}`}>
              📞 {phoneNumber}
            </ContactLink>
            <ContactLink href={whatsappLink} target="_blank" rel="noopener noreferrer">
              💬 WhatsApp
            </ContactLink>
            <ContactLink href={telegramLink} target="_blank" rel="noopener noreferrer">
              ✈️ Telegram
            </ContactLink>
          </ContactLinks>
        </ContactInfo>

        <Form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FormGroup>
            <Label>Name</Label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Message</Label>
            <TextArea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </SubmitButton>
        </Form>
      </Container>
    </ContactSection>
  );
};

export default Contact;
