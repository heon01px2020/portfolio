// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Blog from './components/Blog';
import AboutMe from './components/AboutMe';
import LindemannWeierstrass from './components/blog_posts/LindemannWeierstrass';
import LYTNetv1 from './components/blog_posts/lytnetv1/LYTNetv1';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/lindemann-weierstrass" element={<LindemannWeierstrass />} />
        <Route path="/blog/LYTNetv1" element={<LYTNetv1 />} />
      </Routes>
    </Router>
  );
}

export default App;
