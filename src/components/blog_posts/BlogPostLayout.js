import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const categories = [
  { name: 'All', id: 'all', link: '/blog?category=all', color: '#f56565' },
  { name: 'Game Dev', id: 'game-dev', link: '/blog?category=game-dev', color: '#ecc94b' },
  { name: 'Linux', id: 'linux', link: '/blog?category=linux', color: '#4299e1' },
  { name: 'Math', id: 'math', link: '/blog?category=math', color: '#9f7aea' },
  { name: 'Networks', id: 'networks', link: '/blog?category=networks', color: '#48bb78' },
  { name: 'Rust', id: 'rust', link: '/blog?category=rust', color: '#ed8936' },
];

const BlogPostLayout = ({ children, selectedCategories }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-full bg-white flex justify-between items-center p-6 mx-2">
        <Link to="/" className="text-5xl font-bold" style={{ color: '#000000' }}>
          Heon Lee
        </Link>
        <div className="flex space-x-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-4xl" style={{ color: '#183F7C' }}>
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-4xl" style={{ color: '#183F7C' }}>
            <FaLinkedin />
          </a>
          <a href="mailto:your-email@example.com" className="text-4xl" style={{ color: '#183F7C' }}>
            <FaEnvelope />
          </a>
        </div>
      </div>
      <div className="flex-1 bg-gradient-to-br from-custom-white to-custom-blue p-8 w-full flex flex-col items-center">
        <div className="w-full max-w-7xl">
          <div className="flex space-x-2 mb-4">
            {categories
              .filter(category => selectedCategories.includes(category.name))
              .map(category => (
                <Link
                  key={category.id}
                  to={category.link}
                  className="px-4 py-2 rounded-full text-white"
                  style={{
                    backgroundColor: category.color,
                  }}
                >
                  {category.name}
                </Link>
              ))}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default BlogPostLayout;
