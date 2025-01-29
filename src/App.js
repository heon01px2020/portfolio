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
import LYTNetv2 from './components/blog_posts/lytnetv2/LYTNetv2';
import StructureTheorem from './components/blog_posts/StructureTheorem';
import VIT from './components/blog_posts/VIT';
import AIExplainability from './components/blog_posts/AIExplainability';
import LockeConsciousness from './components/blog_posts/LockeConsciousness';
import DescartesTruth from './components/blog_posts/DescartesTruth';
import RobustErdosRenyi from './components/blog_posts/RobustErdosRenyi';

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
        <Route path="/blog/LYTNetv2" element={<LYTNetv2 />} />
        <Route path="/blog/structure-theorem" element={<StructureTheorem />} />
        <Route path="/blog/vit-attention" element={<VIT />} />
        <Route path="/blog/ai-explainability" element={<AIExplainability />} />
        <Route path="/blog/locke-consciousness" element={<LockeConsciousness />} />
        <Route path="/blog/descartes-truth" element={<DescartesTruth />} />
        <Route path="/blog/robust-erdos-renyi" element={<RobustErdosRenyi />} />
      </Routes>
    </Router>
  );
}

export default App;
