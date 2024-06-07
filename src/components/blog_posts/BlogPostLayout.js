import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import heonLogo from '../../assets/images/logo.png';

const categories = [
  { name: 'All', id: 'all', link: '/blog?category=all', color: '#f56565' },
  { name: 'Artificial Intelligence', id: 'artificial-intelligence', link: '/blog?category=artificial-intelligence', color: '#ecc94b' },
  { name: 'Math', id: 'math', link: '/blog?category=math', color: '#9f7aea' },
  { name: 'Theoretical CS', id: 'theoretical-cs', link: '/blog?category=theoretical-cs', color: '#4299e1' },
  { name: 'Miscellaneous', id: 'miscellaneous', link: '/blog?category=miscellaneous', color: '#48bb78' }
];


const BlogPostLayout = ({ children, selectedCategories }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="w-full bg-white flex justify-between items-center p-6 mx-2">
        <Link to="/">
          <img src={heonLogo} alt="Logo" className="h-12 w-auto" /> {/* Adjust height and width as needed */}
        </Link>
        <div className="flex space-x-6">
          <a href="https://www.github.com/heon01px2020" target="_blank" rel="noopener noreferrer" className="text-4xl" style={{ color: '#183F7C' }}>
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/heonlee2002" target="_blank" rel="noopener noreferrer" className="text-4xl" style={{ color: '#183F7C' }}>
            <FaLinkedin />
          </a>
          <a href="mailto:heon_lee@brown.edu" className="text-4xl" style={{ color: '#183F7C' }}>
            <FaEnvelope />
          </a>
        </div>
      </nav>
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
