import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const BlogContainer = styled.div`
  padding: 100px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const BlogCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid rgba(0, 247, 255, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    border-color: var(--primary);
    box-shadow: 0 5px 15px rgba(0, 247, 255, 0.1);
  }
`;

const BlogImage = styled.div`
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent, rgba(10, 25, 47, 0.8));
  }
`;

const BlogContent = styled.div`
  padding: 1.5rem;
`;

const BlogTitle = styled.h3`
  color: var(--primary);
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
`;

const BlogMeta = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const BlogExcerpt = styled.p`
  color: var(--light);
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: var(--primary);
  text-align: center;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: var(--light);
  margin-bottom: 3rem;
  font-size: 1.1rem;
`;

const blogPosts = [
  {
    title: "Free RDP with GitHub Actions Workflow",
    date: "January 10, 2025",
    image: "https://images.unsplash.com/photo-1607743386760-88ac62b89b8a",
    excerpt: "Learn how to create a free Remote Desktop environment using GitHub Actions workflow. Features Ubuntu Desktop with NoMachine, persistent storage, and automated setup. Perfect for development and testing.",
    readTime: "12 min read",
    link: "/blog/workflow-rdp"
  },
  {
    title: "Setting Up RDP in GitHub Codespaces",
    date: "January 10, 2025",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97",
    excerpt: "Learn how to set up Remote Desktop Protocol (RDP) access to your GitHub Codespace, transforming it into a full virtual machine in the cloud. Complete with step-by-step instructions and troubleshooting tips.",
    readTime: "10 min read",
    link: "/blog/codespace-rdp"
  },
  {
    title: "Understanding RAT Tools: Power and Responsibility",
    date: "January 10, 2025",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    excerpt: "An in-depth analysis of Remote Access Tools (RATs), their legitimate uses in system administration, and the importance of ethical usage. Featuring a curated collection of reliable tools from my GitHub repository.",
    readTime: "8 min read",
    link: "/blog/rat-tools"
  },
  {
    title: "The Future of Web Development",
    date: "December 8, 2023",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    excerpt: "Exploring upcoming trends in web development and how they will shape the future of the internet.",
    readTime: "5 min read"
  },
  {
    title: "Mastering React Hooks",
    date: "December 5, 2023",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    excerpt: "A comprehensive guide to using React Hooks effectively in your applications.",
    readTime: "8 min read"
  },
  {
    title: "UI/UX Best Practices",
    date: "December 1, 2023",
    image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef",
    excerpt: "Essential design principles for creating user-friendly and aesthetically pleasing interfaces.",
    readTime: "6 min read"
  },
  {
    title: "Optimizing Website Performance",
    date: "November 28, 2023",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    excerpt: "Tips and techniques for improving your website's loading speed and performance.",
    readTime: "7 min read"
  },
  {
    title: "Building Secure Web Applications",
    date: "November 25, 2023",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    excerpt: "Security best practices for protecting your web applications from common vulnerabilities.",
    readTime: "10 min read"
  },
  {
    title: "The Art of Clean Code",
    date: "November 22, 2023",
    image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2",
    excerpt: "Writing maintainable and efficient code that your future self will thank you for.",
    readTime: "6 min read"
  }
];

const Blog = () => {
  const navigate = useNavigate();

  const handleBlogClick = (link) => {
    if (link) {
      if (link.startsWith('http')) {
        window.open(link, '_blank');
      } else {
        navigate(link);
      }
    }
  };

  return (
    <BlogContainer>
      <SectionTitle>Blog</SectionTitle>
      <SectionSubtitle>
        Sharing insights and experiences from my journey in web development
      </SectionSubtitle>
      
      <BlogGrid>
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            onClick={() => handleBlogClick(post.link)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <BlogImage style={{ backgroundImage: `url(${post.image})` }} />
            <BlogContent>
              <BlogTitle>{post.title}</BlogTitle>
              <BlogMeta>{post.date} • {post.readTime}</BlogMeta>
              <BlogExcerpt>{post.excerpt}</BlogExcerpt>
            </BlogContent>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogContainer>
  );
};

export default Blog;
