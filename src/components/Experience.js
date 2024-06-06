import React from 'react';
import Layout from './Layout';

// Importing images from assets directory
import brownLogo from '../assets/images/experience/brown.jpg';
// import brownCSLogo from '../assets/images/experience/brown_cs.jpg';
import rokaLogo from '../assets/images/experience/roka.jpg';
import motovisLogo from '../assets/images/experience/motovis.jpg';

const Experience = () => {
  return (
    <Layout>
      <div className="flex-1 bg-gradient-to-br from-custom-white to-custom-blue p-8 w-full flex flex-col items-center">
        <div className="w-full max-w-7xl">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#183F7C' }}>Experience</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-2" style={{ color: '#183F7C' }}>Education</h2>
            <div className="flex items-start mb-4">
              <img src={brownLogo} alt="Brown University" className="w-12 h-12 mr-4 rounded-lg"/>
              <div>
                <h3 className="text-xl font-semibold">Brown University <span className="text-gray-600">Providence, RI</span></h3>
                <p className="text-lg">Bachelor of Science in Computer Science and Mathematics</p>
                <p className="text-gray-600">August 2022 to May 2026</p>
                <p><strong>Relevant Courses:</strong> Deep Learning, Recent Applications of Probability and Statistics, Convex Analysis and Optimization Algorithms, Design and Analysis of Algorithms, Analysis on Manifolds I/II, Computer Systems, Graph Theory, Discrete Math, Statistical Inference, Fairness in Automated Decision Making, Ordinary Differential Equations, Abstract Algebra I/II, Number Theory, Honors Linear Algebra, Honors Multivariable Calculus</p>
                <p><strong>Teaching Assistant:</strong></p>
                <ul className="list-disc list-inside">
                  <li>Design and Analysis of Algorithms (UTA, Fall 2024)</li>
                  <li>Fairness in Automated Decision Making (UTA, Spring 2024)</li>
                  <li>Graph Theory (UTA, Spring 2024)</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-2" style={{ color: '#183F7C' }}>Work</h2>
            {/* WORK EXPERIENCE HERE */}
            <div className="flex items-start mb-4">
              <img src={brownLogo} alt="Brown University" className="w-12 h-12 mr-4 rounded-lg"/>
              <div>
                <h3 className="text-xl font-semibold">Brown Undergraduate Researcher <span className="text-gray-600">Providence, RI</span></h3>
                <p className="text-lg">Researcher</p>
                <p className="text-gray-600">September 2023 to Present</p>
                <p>Collaborating with Prof. Pedro Felzenszwalb to research clustering using iterated linear optimization and semidefinite programming.</p>
              </div>
            </div>
            <div className="flex items-start mb-4">
              <img src={rokaLogo} alt="Republic of Korea Army" className="w-12 h-12 mr-4 rounded-lg"/>
              <div>
                <h3 className="text-xl font-semibold">Republic of Korea Army <span className="text-gray-600">Yeoncheon, South Korea</span></h3>
                <p className="text-lg">Combat Engineer / Sergeant</p>
                <p className="text-gray-600">May 2021 to November 2022</p>
                <p>Led a team of six on various mine clearance operations.</p>
              </div>
            </div>
            <div className="flex items-start mb-4">
              <img src={motovisLogo} alt="Motovis" className="w-12 h-12 mr-4 rounded-lg"/>
              <div>
                <h3 className="text-xl font-semibold">Motovis <span className="text-gray-600">Shanghai, China</span></h3>
                <p className="text-lg">Artificial Intelligence Intern</p>
                <p className="text-gray-600">June 2019 to July 2019</p>
                <p>Implemented CNN to detect traffic lanes.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Experience;
