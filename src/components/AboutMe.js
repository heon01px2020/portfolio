// src/components/AboutMe.js
import React from 'react';
import Layout from './Layout';

const AboutMe = () => {
  return (
    <Layout>
      <div className="p-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-xl mb-4">
          Hello! I am Heon! I am a rising junior at Brown University studying Computer Science and Mathematics. Originally from Seoul, Korea, I grew up in Shanghai, China, and am currently studying in Providence. With a unique cultural perspective, I communicate effectively and thrive in various environments, making me an excellent team player. Furthermore, I am adaptable, a quick learner, and always eager to learn new things.
        </p>
        <p className="text-xl mb-4">
          My main interests lie in machine learning, operations research, and mathematical analysis, but I am also interested in algebra, probability, mathematical education, quantitative finance, game theory, and theoretical computer science.
        </p>
        <p className="text-xl mb-4">
          At Brown, I have been involved with the Outreach Committee under the Undergraduate Student Council and will be introducing Brown to incoming first-years as a Meiklejohn. I have also been a TA for Graph Theory (MATH1230) and Fairness in Automated Decision Making (CSCI1951z) and will be a TA for Design and Analysis of Algorithms (CSCI1570) this fall (2024). I am also researching with Professor Pedro Felzenszwalb on clustering algorithms using iterated linear optimization and semidefinite programming.
        </p>
        <p className="text-xl mb-4">
          Pursuing computer science and math has always been driven by my passion for tackling complex problems. I often find myself solving math problems I come across on YouTube or those my friends send me, simply for the fun of it. The structured, axiomatic settings in math fascinate me, offering a clear and logical foundation upon which complex theories and applications are built. I am particularly captivated by the elegance and rigor of mathematical frameworks, which is why I am excited to participate in a math directed reading program on Descriptive Set Theory this summer. This area of study delves into the properties and classifications of sets in the context of topology and logic, aligning perfectly with my interest in exploring and manipulating axiomatic structures. Beyond these structured settings, I enjoy experimenting with axioms and discovering hidden patterns within mathematical structures and objects.
        </p>
        <p className="text-xl mb-4">
          Beyond theoretical pursuits, I love applying math and CS to real-world challenges. For instance, my friends and I developed and published a paper on LYTNet, a lightweight CNN architecture designed to assist the visually impaired in crossing intersections. In another project, when our high school wanted to digitalize the annual carnival 'International Fair,' I teamed up with friends to build an app for that. Additionally, recognizing the limitations of dating apps that rely on collaborative filtering, my team and I created a web platform that matches people based on personality traits.
        </p>
        <p className="text-xl mb-4">
          I'm also socially conscious about the impact of technology, especially AI, in current times. As a TA for the course Fairness in Automated Decision Making, I've contributed to developing assignments that adopt algorithmic and mathematical approaches to assess and mitigate biases. One such assignment involves implementing prejudice remover—a regularization approach applicable to any prediction algorithm with probabilistic discriminative models—from the paper by Toshihiro Kamishima et al. I've also helped design a new final project where students audit an AI system modeling a real-world situation.
        </p>
        {/* <p className="text-xl mb-4">
          Some of my personal projects never make it to the public eye, but there is a certain beauty in that too. However, those that I'm keen to share can be found on my <a href="https://github.com/heon01px2020" style={{ color: '#183F7C', fontWeight: 'bold' }}>GitHub</a>.
        </p> */}
        <p className="text-xl">
          Feel free to connect via email (heon_lee at brown.edu).
        </p>
      </div>
    </Layout>
  );
}

export default AboutMe;
