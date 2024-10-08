// src/components/Layout.js
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import heonLogo from '../assets/images/logo.png';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <nav className="w-full bg-white flex justify-between items-center p-4 h-16">
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

      {/* Main Content Section */}
      <div className="flex-1 bg-gradient-to-br from-custom-white to-custom-blue flex justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default Layout;
