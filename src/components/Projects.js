// src/components/Projects.js
import React from 'react';
import Layout from './Layout';

// Importing images from assets directory
import tendamImage from '../assets/images/projects/tendam.jpg';
import imvisibleImage from '../assets/images/projects/imvisible.jpg';
import internationalFairImage from '../assets/images/projects/international_fair.jpg';
import motovisImage from '../assets/images/projects/motovis.jpg';

// Project data
const projects = [
  {
    title: "Tendam: A Friend-matching Platform",
    date: "Mar 2021 - May 2021",
    description: [
      "Built a friend-matching website prioritizing matches based on personality using feedback from over 20 users",
      "Designed a matching algorithm and wrote a Blackjack mini-game with function to describe risk-adverseness of user",
      "Engineered with a team of 5 using React and Java"
    ],
    repoLink: "https://github.com/heon01px2020/tendam",
    image: tendamImage,
    imageStyle: {}
  },
  {
    title: "ImVisible/LYTNet (Publication)",
    date: "Aug 2018 - Mar 2020",
    description: [
      "Designed and trained a novel lightweight CNN, LYTNet, to detect pedestrian traffic lights and position of zebra crossings",
      "Achieved 30% lower error rate compared to existing methods (96% accuracy; angle error rate of 6.15), while running at similar inference speeds (16.34 frames/sec)",
      "Coauthored 2 papers; keynote presentation at CAIP 2019 and poster presentation at ICCV workshop 2020"
    ],
    repoLink: "https://github.com/heon01px2020/ImVisible",
    paperLinks: [
      { label: "LYTNetv1 arXiv", link: "https://arxiv.org/abs/1907.09706" },
      { label: "LYTNetv2 arXiv", link: "https://arxiv.org/abs/1909.09598" }
    ],
    image: imvisibleImage
  },
  {
    title: "International Fair Applet",
    date: "May 2019 - Oct 2019",
    description: [
      "Developed a WeChat Mini Applet to digitalize and centralize information for the SAS carnival",
      "Resulted in ~2200 users (~1000 concurrent) and processed transactions worth over $35k of revenue for school",
      "Cut down post-analysis time including time spent counting tickets by 90%",
      "Hosted school assemblies for announcing logistics and advertisement as the President of Executive Student Council"
    ],
    repoLink: null, // No repo link for this project
    image: internationalFairImage,
    imageStyle: {}
  },
  {
    title: "Motovis: Artificial Intelligence Intern",
    date: "Jun 2019 - Jul 2019",
    description: [
      "Implemented a semantic segmentation model in PyTorch for accurate detection of traffic lanes",
      "Fit the lanes to the nearest cubic polynomials using regression analysis"
    ],
    repoLink: null, // No repo link for this project
    image: motovisImage,
    imageStyle: {}
  }
];

const Projects = () => {
  return (
    <Layout>
      <div className="p-8 max-w-6xl">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white border-2 rounded-2xl shadow-lg overflow-hidden" style={{ borderColor: '#183F7C' }}>
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" style={project.imageStyle} />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.date}</p>
                <ul className="list-disc list-inside mb-4">
                  {project.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                {project.repoLink && (
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="font-bold" style={{ color: '#183F7C' }}>
                    Repo
                  </a>
                )}
                {project.paperLinks && project.paperLinks.map((paper, i) => (
                  <a key={i} href={paper.link} target="_blank" rel="noopener noreferrer" className="ml-4 font-bold" style={{ color: '#183F7C' }}>
                    {paper.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Projects;
