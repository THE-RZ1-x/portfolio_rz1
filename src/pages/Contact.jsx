import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaReddit, FaTelegram, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { BiSend } from 'react-icons/bi';
import emailjs from '@emailjs/browser';

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
  margin-bottom: 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  svg {
    font-size: 2rem;
  }
`;

const Subtitle = styled(motion.p)`
  text-align: center;
  color: var(--light);
  margin-bottom: 3rem;
  font-size: 1.1rem;
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
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: var(--primary);
  }
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
    box-shadow: 0 0 10px rgba(0, 247, 255, 0.2);
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
    box-shadow: 0 0 10px rgba(0, 247, 255, 0.2);
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    background: var(--secondary);
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 2rem;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  border: 1px solid rgba(0, 247, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--primary);
    transform: translateY(-5px);
  }

  svg {
    font-size: 2rem;
    color: var(--primary);
  }

  p {
    color: var(--light);
  }
`;

const ContactLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
`;

const SocialLink = styled(motion.a)`
  color: var(--light);
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: var(--primary);
    transform: translateY(-2px);
  }
`;

const StatusMessage = styled.p`
  text-align: center;
  margin-top: 0.75rem;
  color: ${({ $type }) => ($type === 'success' ? '#4ade80' : '#f87171')};
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: '', text: '' });

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const autoReplyTemplateId = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', text: '' });

    if (!serviceId || !templateId || !publicKey) {
      setStatus({ type: 'error', text: 'Email service is not configured. Please set EmailJS keys.' });
      return;
    }

    try {
      setIsSending(true);
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        { publicKey }
      );

      // Optional auto-reply to the user
      if (autoReplyTemplateId && formData.email) {
        try {
          await emailjs.send(
            serviceId,
            autoReplyTemplateId,
            {
              to_email: formData.email,
              to_name: formData.name,
            },
            { publicKey }
          );
        } catch (autoErr) {
          // Do not fail main flow if auto-reply fails
          console.warn('Auto-reply failed', autoErr);
        }
      }

      setStatus({ type: 'success', text: 'Message sent successfully. Thank you!' });
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus({ type: 'error', text: 'Failed to send message. Please try again later.' });
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <ContactSection>
      <Container>
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaEnvelope /> Let's Connect! 🤝
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Feel free to reach out for collaborations or just a friendly chat ✨
        </Subtitle>

        <ContactInfo>
          <InfoItem
            as="a"
            href="https://wa.me/212760359753"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
            <p>+212 760-359753</p>
          </InfoItem>
          <InfoItem
            as="a"
            href="https://t.me/RZ1_x"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram />
            <p>@RZ1_x</p>
          </InfoItem>
          <InfoItem>
            <FaMapMarkerAlt />
            <p>Morocco 🌍</p>
          </InfoItem>
        </ContactInfo>

        <ContactLinks>
          <SocialLink 
            href="https://github.com/THE-RZ1-x" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub />
          </SocialLink>
          <SocialLink 
            href="https://www.reddit.com/user/Illustrious_Sea_2752/" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaReddit />
          </SocialLink>
        </ContactLinks>

        <Form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FormGroup>
            <Label><FaEnvelope /> Name</Label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name ✍️"
            />
          </FormGroup>
          <FormGroup>
            <Label><FaEnvelope /> Email</Label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email 📧"
            />
          </FormGroup>
          <FormGroup>
            <Label><FaEnvelope /> Message</Label>
            <TextArea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message here 💭"
            />
          </FormGroup>
          <SubmitButton
            type="submit"
            disabled={isSending}
            whileHover={{ scale: isSending ? 1 : 1.02 }}
            whileTap={{ scale: isSending ? 1 : 0.98 }}
          >
            {isSending ? 'Sending...' : 'Send Message'} <BiSend />
          </SubmitButton>
          {status.text && (
            <StatusMessage $type={status.type}>{status.text}</StatusMessage>
          )}
        </Form>
      </Container>
    </ContactSection>
  );
};

export default Contact;
