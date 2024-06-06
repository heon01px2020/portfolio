import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import { FaProjectDiagram, FaBriefcase, FaBlogger, FaUser } from 'react-icons/fa';

// Importing images from assets directory
import projectsImage from '../assets/images/landing_page/projects.jpg';
import codingImage from '../assets/images/landing_page/coding.jpg';
import blogImage from '../assets/images/landing_page/blog.jpg';
import aboutMeImage from '../assets/images/landing_page/aboutme.jpg';

const LandingPage = () => {
  const [activeCard, setActiveCard] = useState('projects');

  const handleMouseEnter = (card) => {
    setActiveCard(card);
  };

  return (
    <Layout>
      <div className="flex flex-col md:flex-row w-full" style={{ maxWidth: '80rem' }}>
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center p-8 md:w-1/2">
          <div className="text-left">
            <h1 className="text-base font-bold" style={{ color: '#183F7C' }}>WELCOME TO MY LITTLE CORNER OF THE INTERNET :)</h1>
            <h2 className="text-6xl font-bold mt-4">HI, I'M HEON!</h2>
            <p className="mt-4 text-xl max-w-xl">
              Welcome to my portfolio website! I'm a <span style={{ color: '#183F7C', fontWeight: 'bold' }}>developer</span> and <span style={{ color: '#183F7C', fontWeight: 'bold' }}>student</span> passionate in <span style={{ color: '#183F7C', fontWeight: 'bold' }}>computer science</span> and <span style={{ color: '#183F7C', fontWeight: 'bold' }}>math</span>. Built with ReactJS, this site ensures a smooth experience on any device. Click on the cards or use the navigation links above to discover more about me.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center items-center p-8 md:w-1/2">
          <div className="flex flex-row gap-4 w-full h-[600px]">
            <Link
              to="/projects"
              onMouseEnter={() => handleMouseEnter('projects')}
              className="transition-all duration-300"
              style={{
                backgroundImage: `url(${projectsImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%',
                flex: activeCard === 'projects' ? '5 1 0%' : '1 1 0%',
                transition: 'flex 0.3s ease-in-out',
                borderRadius: '1.5rem',
              }}
            >
              {activeCard === 'projects' && (
                <div className="flex flex-col justify-end h-full p-4 bg-black bg-opacity-50" style={{ borderRadius: '1.5rem' }}>
                  <div className="flex items-center">
                    <FaProjectDiagram className="w-8 h-8 mr-2 text-white" />
                    <div>
                      <h3 className="text-xl font-bold text-white">Projects</h3>
                      <p className="text-gray-200">Innovative solutions</p>
                    </div>
                  </div>
                </div>
              )}
            </Link>
            <Link
              to="/experience"
              onMouseEnter={() => handleMouseEnter('experience')}
              className="transition-all duration-300"
              style={{
                backgroundImage: `url(${codingImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%',
                flex: activeCard === 'experience' ? '5 1 0%' : '1 1 0%',
                transition: 'flex 0.3s ease-in-out',
                borderRadius: '1.5rem',
              }}
            >
              {activeCard === 'experience' && (
                <div className="flex flex-col justify-end h-full p-4 bg-black bg-opacity-50" style={{ borderRadius: '1.5rem' }}>
                  <div className="flex items-center">
                    <FaBriefcase className="w-8 h-8 mr-2 text-white" />
                    <div>
                      <h3 className="text-xl font-bold text-white">Experience</h3>
                      <p className="text-gray-200">Professional journey</p>
                    </div>
                  </div>
                </div>
              )}
            </Link>
            <Link
              to="/blog"
              onMouseEnter={() => handleMouseEnter('blog')}
              className="transition-all duration-300"
              style={{
                backgroundImage: `url(${blogImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%',
                flex: activeCard === 'blog' ? '5 1 0%' : '1 1 0%',
                transition: 'flex 0.3s ease-in-out',
                borderRadius: '1.5rem',
              }}
            >
              {activeCard === 'blog' && (
                <div className="flex flex-col justify-end h-full p-4 bg-black bg-opacity-50" style={{ borderRadius: '1.5rem' }}>
                  <div className="flex items-center">
                    <FaBlogger className="w-8 h-8 mr-2 text-white" />
                    <div>
                      <h3 className="text-xl font-bold text-white">Blog</h3>
                      <p className="text-gray-200">My thoughts and ideas</p>
                    </div>
                  </div>
                </div>
              )}
            </Link>
            <Link
              to="/aboutme"
              onMouseEnter={() => handleMouseEnter('aboutme')}
              className="transition-all duration-300"
              style={{
                backgroundImage: `url(${aboutMeImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%',
                flex: activeCard === 'aboutme' ? '5 1 0%' : '1 1 0%',
                transition: 'flex 0.3s ease-in-out',
                borderRadius: '1.5rem',
              }}
            >
              {activeCard === 'aboutme' && (
                <div className="flex flex-col justify-end h-full p-4 bg-black bg-opacity-50" style={{ borderRadius: '1.5rem' }}>
                  <div className="flex items-center">
                    <FaUser className="w-8 h-8 mr-2 text-white" />
                    <div>
                      <h3 className="text-xl font-bold text-white">About Me</h3>
                      <p className="text-gray-200">Get to know me</p>
                    </div>
                  </div>
                </div>
              )}
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default LandingPage;
