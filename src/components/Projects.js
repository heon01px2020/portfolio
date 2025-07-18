// src/components/Projects.js
import React from 'react';
import Layout from './Layout';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import 'katex/dist/katex.min.css';

// Importing images from assets directory
import erdosRenyiImage from '../assets/images/projects/erdos_renyi.png';
import lshImage from '../assets/images/projects/lsh.png';
import worldMarImage from '../assets/images/projects/worldmar.jpg';
import datathonImage from '../assets/images/projects/datathon.png';
import tendamImage from '../assets/images/projects/tendam.jpg';
import imvisibleImage from '../assets/images/projects/imvisible.jpg';
import internationalFairImage from '../assets/images/projects/international_fair.jpg';
import motovisImage from '../assets/images/projects/motovis.jpg';

// Project data
const projects = [
  {
    title: "When LSH Breaks",
    date: "Feb 2025 - May 2025",
    description: [
      'Studied natural generalizations of the cross-polytope LSH to $\\ell_p$-spheres via scaled-rotation and symmetry.',
      'Proved that neither scheme yields an $(r, cr)$-sensitive LSH for $p\\neq2$, establishing impossibility.'
    ],
    repoLink: null,
    paperLinks: [
      { label: "Paper", link: "documents/when_lsh_breaks.pdf"}
    ],
    image: lshImage,
    imageStyle: {}
  },
  {
    title: "WorldMAR",
    date: "Feb 2025 - May 2025",
    description: [
      'A fast, action-conditioned next-frame generator for Minecraft, inspired by Oasis and the MAR framework for image generation.',
      'Designed for model-based control, it enables ~4x faster sampling than full-frame diffusion methods.'
    ],
    repoLink: "https://github.com/nwrousell/world-mar",
    paperLinks: [
      { label: "Paper", link: "documents/worldmar.pdf"}
    ],
    image: worldMarImage,
    imageStyle: {}
  },
  {
    title: "Robust Estimation for the Erdős-Rényi Model",
    date: "Oct 2024 - Dec 2024",
    description: [
      '**Awarded Top Project** in <span style="color: blue;"><a href="https://cs.brown.edu/people/ycheng79/csci2952qf24.html" target="_blank" rel="noopener noreferrer">Robust Algorithms for Machine Learning</a></span> for developing novel algorithms to estimate edge probability in adversarially perturbed Erdős-Rényi graphs.',
      "Introduced the $O(q,\\varepsilon)$-adversarial model, and designed and implemented three novel robust algorithms",
      "Conducted theoretical and empirical analysis to establish error bounds and runtime guarantees"
    ],
    repoLink: null,
    paperLinks: [
      { label: "Paper", link: "https://cs.brown.edu/people/ycheng79/csci2952qf24/Top_Project_2_Heon%20Lee_George%20Chemmala_Arjan%20Chakravarthy_Robust%20Estimation%20for%20the%20Erdo%CC%8Bs-Re%CC%81nyi%20Model.pdf" }
    ],
    image: erdosRenyiImage,
    imageStyle: {}
  },
  {
    title: "Quantitative Analysis on the Socioeconomic Factors for Obesity",
    date: "Aug 2024 - Aug 2024",
    description: [
      "Participated in the **Citadel Invitational Datathon 2024**",
      "Conducted a **predictive analysis** on fast food access, socioeconomic factors, and obesity across U.S. states and counties",
      "Developed and evaluated predictive models (e.g., Linear Regression, Random Forest, LSTM), identifying key obesity drivers using SHAP and LIME analysis",
      // "Developed and evaluated multiple machine learning models, including Linear Regression, Random Forest, XGBoost, Autoregressive (AR) models, LSTM, and Jump-Diffusion models, to predict obesity rates based on fast food density, grocery store accessibility, and socio-economic indicators.",
      // "Performed feature importance analysis using SHAP and LIME to identify key drivers of obesity, such as fast food density, education levels, and poverty rates, providing actionable insights for public health interventions.",
    ],
    repoLink: null,
    paperLinks: [
      { label: "Report", link: "documents/fast_food_socioeconomics_and_obesity.pdf" }
    ],
    image: datathonImage,
    imageStyle: {}
  },
  {
    title: "Tendam: A Friend-matching Platform",
    date: "Mar 2021 - May 2021",
    description: [
      "Built a **friend-matching website** prioritizing matches based on personality using feedback from over 20 users",
      "Designed a **matching algorithm** and wrote a Blackjack mini-game with function to describe risk-adverseness of user",
      "Engineered with a team of 5 using **React** and **Java**"
    ],
    repoLink: "https://github.com/heon01px2020/tendam",
    paperLinks: [
      { label: "Website", link: "https://tendam-cs0320-2021.firebaseapp.com"}
    ],
    image: tendamImage,
    imageStyle: {}
  },
  {
    title: "ImVisible/LYTNet (Publication)",
    date: "Aug 2018 - Mar 2020",
    description: [
      "Designed and trained a novel **lightweight CNN**, LYTNet, to detect pedestrian traffic lights and position of zebra crossings",
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
      "Developed a WeChat **Mini Applet** to digitalize and centralize information for the SAS carnival",
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
      "Implemented a **semantic segmentation** model in PyTorch for accurate detection of traffic lanes",
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
                  {/* {project.description.map((desc, i) => (
                    <li key={i} style={{ listStylePosition: 'inside' }}>
                      <ReactMarkdown
                        children={desc}
                        components={{
                          // Override paragraphs to render inline
                          p: ({ node, ...props }) => (
                            <p {...props} style={{ display: 'inline', margin: -10 }} />
                          ),
                        }}
                        remarkPlugins={[remarkMath]}
                        rehypePlugins={[rehypeKatex]}
                      />
                    </li>
                  ))} */}
                  {project.description.map((desc, i) => (
                    <li key={i} style={{ listStylePosition: 'inside' }}>
                      <ReactMarkdown
                        children={desc}
                        components={{
                          // Override paragraphs to render inline with no extra margin
                          p: ({ node, ...props }) => (
                            <p {...props} style={{ display: 'inline', margin: 0 }} />
                          ),
                        }}
                        remarkPlugins={[remarkMath]}
                        rehypePlugins={[rehypeKatex, rehypeRaw]}
                      />
                    </li>
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
