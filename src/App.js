// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Blog from './components/Blog';
import AboutMe from './components/AboutMe';
import ZeroKnowledgeProof from './components/blog_posts/ZeroKnowledgeProof';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/zero-knowledge-proof-for-graph-3-coloring-in-go" element={<ZeroKnowledgeProof />} />
      </Routes>
    </Router>
  );
}

export default App;
