import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import heonLogo from '../assets/images/logo.png';

const posts = [
  {
    date: '',
    title: 'Lindemann-Weierstrass Theorem',
    description: 'A Proof of Transcendence of e and pi.',
    categories: ['Math'],
    link: 'lindemann-weierstrass'
  },
  {
    date: '',
    title: 'LYTNet: A Convolutional Neural Network for Real-Time Pedestrian Traffic Lights and Zebra Crossing Recognition for the Visually Impaired',
    description: 'Exploring isomorphism classes of S-decorated simple graphs.',
    categories: ['Artificial Intelligence'],
    link: 'LYTNetv1'
  },
  {
    date: '',
    title: 'Street Crossing Aid Using Light-weight CNNs for the Visually Impaired',
    description: 'An overview of my self-hosting setup and the tools I use.',
    categories: ['Artificial Intelligence'],
    link: 'LYTNetv2'
  }
];

const categories = [
  { name: 'All', id: 'all', color: '#f56565' },
  { name: 'Artificial Intelligence', id: 'artificial-intelligence', color: '#ecc94b' },
  { name: 'Math', id: 'math', color: '#9f7aea' },
  { name: 'Theoretical CS', id: 'theoretical-cs', color: '#4299e1' },
  { name: 'Miscellaneous', id: 'miscellaneous', color: '#48bb78' }
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category') || 'all';
    setSelectedCategory(category);
  }, [location]);

  const filteredPosts = selectedCategory === 'all'
    ? posts
    : posts.filter(post => post.categories.map(cat => cat.toLowerCase().replace(' ', '-')).includes(selectedCategory));

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
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <div className="flex flex-wrap space-x-2 space-y-2 mb-4">
            {categories.map(category => (
              <Link
                key={category.id}
                to={`/blog?category=${category.id}`}
                className="px-4 py-2 rounded-full text-white"
                style={{
                  backgroundColor: selectedCategory === category.id ? category.color : '#B0BEC5',
                }}
              >
                {category.name}
              </Link>
            ))}
          </div>
          {filteredPosts.map(post => (
            <div key={post.title} className="border-2 border-blue-700 rounded-lg p-4 mb-4 w-full max-w-7xl">
              <p className="text-sm">{post.date}</p>
              <Link to={post.link}>
                <h2 className="text-2xl font-bold mb-2" style={{ color: '#183F7C' }}>{post.title}</h2>
              </Link>
              <p className="mb-2">{post.description}</p>
              <div className="flex space-x-2">
                {post.categories.map(category => (
                  <span key={category} className="px-2 py-1 rounded-full text-white" style={{ backgroundColor: categories.find(cat => cat.name.toLowerCase().replace(' ', '-') === category.toLowerCase().replace(' ', '-')).color }}>
                    {category}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
