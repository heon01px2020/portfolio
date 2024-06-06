import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// const posts = [
//   {
//     date: 'May 15 2024',
//     title: 'Proving Graph 3–Coloring with Go and Zero–Knowledge Proofs',
//     description: 'A deep dive into proving graph 3-coloring using Go and zero-knowledge proofs.',
//     categories: ['Math', 'Networks'],
//     link: '/blog/zero-knowledge-proof-for-graph-3-coloring-in-go',
//   },
//   // Other posts...
// ];

const posts = [
  {
    date: 'May 15 2024',
    title: 'Proving Graph 3–Coloring with Go and Zero–Knowledge Proofs',
    description: 'A deep dive into proving graph 3-coloring using Go and zero-knowledge proofs.',
    categories: ['Math', 'Networks'],
    link: '/blog/zero-knowledge-proof-for-graph-3-coloring-in-go'
  },
  {
    date: 'Mar 20 2024',
    title: 'Isomorphism Classes of S–Decorated Simple Graphs',
    description: 'Exploring isomorphism classes of S-decorated simple graphs.',
    categories: ['Math'],
    link: '/blog/isomorphism-classes-of-s-decorated-simple-graphs'
  },
  {
    date: 'Aug 13 2023',
    title: 'A Glimpse into my Self–Hosting Setup',
    description: 'An overview of my self-hosting setup and the tools I use.',
    categories: ['Networks'],
    link: '/blog/self-hosting-setup'
  },
  {
    date: 'May 10 2023',
    title: 'Associating Finite Groups with Cayley Color Graphs',
    description: 'Understanding finite groups through Cayley color graphs.',
    categories: ['Math'],
    link: '/blog/finite-groups-and-cayley-color-graphs'
  },
  {
    date: 'Dec 26 2022',
    title: 'The Representability of Graphic Matroids as Vector Matroids',
    description: 'Exploring the representability of graphic matroids as vector matroids.',
    categories: ['Math'],
    link: '/blog/representability-of-graphic-matroids'
  },
  {
    date: 'Jun 03 2022',
    title: 'How to Tunnel Traffic With WireGuard Forwarding',
    description: 'A tutorial on tunneling traffic with WireGuard forwarding.',
    categories: ['Networks'],
    link: '/blog/wireguard-forwarding'
  },
  {
    date: 'May 24 2022',
    title: 'Self–Host Your Color Schemes',
    description: 'A tutorial on self-hosting your color schemes.',
    categories: ['Linux', 'Networks', 'Rust'],
    link: '/blog/self-host-color-schemes'
  },
  {
    date: 'Mar 16 2022',
    title: 'Bevy Jam #1: Beeline',
    description: 'A report on Bevy Jam #1: Beeline.',
    categories: ['Game Dev', 'Rust'],
    link: '/blog/bevy-jam-1-beeline'
  },
  {
    date: 'Feb 04 2022',
    title: 'Planes: altitude, roll, and collisions',
    description: 'A discussion on planes: altitude, roll, and collisions.',
    categories: ['Game Dev', 'Rust'],
    link: '/blog/planes-altitude-roll-collisions'
  },
  {
    date: 'Dec 19 2021',
    title: 'Spatial Hash Structures for Fast XY Search',
    description: 'An exploration of spatial hash structures for fast XY search.',
    categories: ['Networks'],
    link: '/blog/spatial-hash-structures-xy-search'
  }
];

const categories = [
  { name: 'All', id: 'all', color: '#f56565' },
  { name: 'Game Dev', id: 'game-dev', color: '#ecc94b' },
  { name: 'Linux', id: 'linux', color: '#4299e1' },
  { name: 'Math', id: 'math', color: '#9f7aea' },
  { name: 'Networks', id: 'networks', color: '#48bb78' },
  { name: 'Rust', id: 'rust', color: '#ed8936' },
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
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <div className="flex space-x-2 mb-4">
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
                  <span key={category} className="px-2 py-1 rounded-full text-white" style={{ backgroundColor: categories.find(cat => cat.name === category).color }}>
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
