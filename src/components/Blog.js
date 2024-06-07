import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import heonLogo from '../assets/images/logo.png';

const posts = [
  {
    date: 'April 5, 2024',
    title: 'Understanding the Structure of Abelian Groups (with Modules!)',
    description: 'A Proof of the Structure Theorem (to be updated)',
    categories: ['Math'],
    link: 'structure-theorem'
  },
  {
    date: 'May 12, 2023',
    title: 'Lindemann-Weierstrass Theorem',
    description: 'A Proof of Transcendence of e and pi (to be updated)',
    categories: ['Math'],
    link: 'lindemann-weierstrass'
  },
  {
    date: 'May 10, 2023',
    title: 'Attention Really is All You Need \u{1F440}',
    description: 'An implementation of the ViT model from "An Image is Worth 16X16 Words: Transformers for Image Recognition at Scale" by Dosovitskiy et al. (to be updated)',
    categories: ['Artificial Intelligence'],
    link: 'vit-attention'
  },
  {
    date: 'May 9, 2023',
    title: 'A Rubric on Explanations for Automated Systems',
    description: 'AI model explainability, introducing a detailed rubric for evaluating and improving the transparency of AI models (to be updated)',
    categories: ['Artificial Intelligence'],
    link: 'ai-explainability'
  },
  {
    date: 'September 14, 2019',
    title: 'Street Crossing Aid Using Light-weight CNNs for the Visually Impaired',
    description: 'A mobile app and a deep learning model, LytNetV2, to assist the visually impaired in crossing intersections through real-time auditory and vibration feedback. (to be updated)',
    categories: ['Artificial Intelligence'],
    link: 'LYTNetv2'
  },
  {
    date: 'July 23, 2019',
    title: 'LYTNet: A Convolutional Neural Network for Real-Time Pedestrian Traffic Lights and Zebra Crossing Recognition for the Visually Impaired',
    description: 'A novel CNN architecture, LYTNet, to provide the visually impaired with real-time information on traffic light status and crosswalk direction.',
    categories: ['Artificial Intelligence'],
    link: 'LYTNetv1'
  },
];

const categories = [
  { name: 'All', id: 'all', color: '#f56565' },
  { name: 'Artificial Intelligence', id: 'artificial-intelligence', color: '#ecc94b' },
  { name: 'Math', id: 'math', color: '#9f7aea' },
  // { name: 'Theoretical CS', id: 'theoretical-cs', color: '#4299e1' },
  // { name: 'Miscellaneous', id: 'miscellaneous', color: '#48bb78' }
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
      <nav className="w-full bg-white flex justify-between items-center p-4 mx-2 h-16">
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
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {categories.map(category => (
              <Link
                key={category.id}
                to={`/blog?category=${category.id}`}
                className="px-4 py-2 rounded-full text-white"
                style={{
                  backgroundColor: selectedCategory === category.id ? category.color : '#B0BEC5',
                }}>
                {category.name}
              </Link>
            ))}
          </div>
          {filteredPosts.map(post => (
            <div key={post.title} className="border-2 rounded-lg p-4 mb-4 w-full max-w-7xl" style={{ borderColor: '#183F7C' }}>
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
