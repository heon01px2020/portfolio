import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import BlogPostLayout from './BlogPostLayout';
import 'katex/dist/katex.min.css';

const LindemannWeierstrass = () => {
  const selectedCategories = ['Math', 'Networks'];

  return (
    <BlogPostLayout selectedCategories={selectedCategories}>
      <h1 className="text-4xl font-bold mb-4" style={{ color: '#183F7C' }}>
        Lindemann Weierstrass Theorem
      </h1>
      <div className="prose prose-lg">
        <p>In this blog post, we will explore the concept of zero-knowledge proofs applied to graph 3-coloring using the Go programming language.</p>
        <p>Here is an example of a LaTeX inline formula: <InlineMath math="a^2 + b^2 = c^2\sum_{i=1}^n i^2" />.</p>
        <p>And here is a block formula:</p>
        <BlockMath math="\int_0^\infty x^2 dx" />
      </div>
    </BlogPostLayout>
  );
};

export default LindemannWeierstrass;