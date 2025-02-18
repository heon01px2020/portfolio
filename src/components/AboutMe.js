// src/components/AboutMe.js
import React from 'react';
import Layout from './Layout';

const AboutMe = () => {
  return (
    <Layout>
      <div className="p-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-xl mb-4">
        Hello! I'm Heon, a junior at Brown University studying 
        Computer Science and Mathematics. 
        {/* Originally from Seoul, Korea, 
        I grew up in Shanghai, China and am currently studying in Providence. 
        With a unique cultural perspective, I communicate effectively and 
        thrive in various environments, making me an excellent team player. 
        Furthermore, I am adaptable and am always eager to learn new things. */}
        </p>
        <p className="text-xl mb-4">
        My main interests are in theoretical computer science. More 
        specifically, I do machine learning and optimization. I also have 
        a strong interest in related fields such as mathematical analysis, algebra, 
        probability, and topology.
        </p>
        <p className="text-xl mb-4">
        At Brown, I've served on the Outreach Committee and am introducing Brown 
        to incoming first-years as a Meiklejohn. I have also been a head TA 
        for Fairness in Automated Decision Making (CSCI1951z), and a TA for 
        Graph Theory (MATH1230) and Design and Analysis of Algorithms (CSCI1570). 
        Furthermore, I research theoretical algorithms with Professor Pedro Felzenszwalb, 
        focusing on iterated linear optimization and semidefinite programming.
        </p>
        <p className="text-xl mb-4">
        My passion for tackling complex problems drives my pursuit of computer 
        science and mathematics. I love the challenge of diving into difficult 
        math problems, whether I find them online or through friends. Recently, 
        I'm fascinated by the interplay between geometry and algebra, a connection 
        that's become even more exciting as I frequently find it important in 
        my current research!
        </p>
        {/* <p className="text-xl mb-4">
        This summer, I'm excited to participate in a math directed reading program 
        on Geometric Group Theory. This fascinating field explores the hidden 
        connection between abstract groups and geometric objects. By studying how 
        groups act on geometric spaces, geometric group theory helps understand the 
        structural and asymptotic properties of these groups. What truly excites me 
        is the ability to use the geometric properties of these objects to uncover 
        underlying algebraic truths about the groups themselves. It's like analyzing 
        a sculpture to understand the mathematical principles that govern its form!
        </p> */}
        {/* <p className="text-xl mb-4">
        Beyond theoretical pursuits, I love applying math and CS to 
        real-world challenges. For instance, my friends and I developed 
        and published a paper on LYTNet, a lightweight CNN architecture 
        designed to assist the visually impaired in crossing intersections. 
        In another project, when our high school wanted to digitalize the 
        annual carnival 'International Fair,' I teamed up with friends to 
        build an app for that. Additionally, recognizing the limitations of 
        dating apps that rely on collaborative filtering, my team and I 
        created a web platform that matches people based on personality traits.
        </p> */}
        {/* <p className="text-xl mb-4">
        I'm also socially conscious about the impact of technology, especially 
        AI, in current times. As a TA for the course Fairness in Automated 
        Decision Making, I've contributed to developing assignments that adopt 
        algorithmic and mathematical approaches to assess and mitigate biases. 
        One such assignment involves implementing prejudice remover—a 
        regularization approach applicable to any prediction algorithm with 
        probabilistic discriminative models—from the paper by Toshihiro 
        Kamishima et al. I've also helped design a new final project where 
        students audit an AI system modeling a real-world situation.
        </p> */}
        <p className="text-xl">
          Feel free to connect via email (heon_lee at brown.edu).
        </p>
      </div>
    </Layout>
  );
}

export default AboutMe;
