import React, { useState, useEffect } from 'react';
import 'katex/dist/katex.min.css';
// import { BlockMath, InlineMath } from 'react-katex';
// import figure1 from './figure1.png';
// import figure2 from './figure2.png';
// import figure3 from './figure3.png';
// import figure4 from './figure4.png';
// import figure5 from './figure5.png';
import BlogPostLayout from '../../blog_posts/BlogPostLayout';

import { Helmet } from 'react-helmet';
import 'katex/dist/katex.min.css';
import '../LatexDocument.css'; // Import your custom styles

const LYTNetv1 = () => {
    const selectedCategories = ['Artificial Intelligence'];
    return (
        <BlogPostLayout selectedCategories={selectedCategories}>
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="generator" content="pandoc" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
            <meta name="author" content="Samuel Yu" />
            <meta name="author" content="Heon Lee" />
            <meta name="author" content="John Kim" />
            <title>LYTNet: A Convolutional Neural Network for Real-Time Pedestrian Traffic Lights and Zebra Crossing Recognition for the Visually Impaired</title>
            <style>{`
            html {
                line-height: 1.5;
                font-family: Georgia, serif;
                font-size: 20px;
                color: #1a1a1a;
                background-color: #fdfdfd;
            }
            body {
                margin: 0 auto;
                max-width: 100%;
                hyphens: auto;
                overflow-wrap: break-word;
                text-rendering: optimizeLegibility;
                font-kerning: normal;
            }
            @media (max-width: 600px) {
                body {
                font-size: 0.9em;
                padding: 1em;
                }
                h1 {
                font-size: 1.8em;
                }
            }
            @media print {
                body {
                background-color: transparent;
                color: black;
                font-size: 12pt;
                }
                p, h2, h3 {
                orphans: 3;
                widows: 3;
                }
                h2, h3, h4 {
                page-break-after: avoid;
                }
            }
            p {
                margin: 1em 0;
            }
            a {
                color: #1a1a1a;
            }
            a:visited {
                color: #1a1a1a;
            }
            img {
                max-width: 100%;
            }
            h1, h2, h3, h4, h5, h6 {
                margin-top: 1.4em;
            }
            h5, h6 {
                font-size: 1em;
                font-style: italic;
            }
            h6 {
                font-weight: normal;
            }
            ol, ul {
                padding-left: 1.7em;
                margin-top: 1em;
            }
            li > ol, li > ul {
                margin-top: 0;
            }
            blockquote {
                margin: 1em 0 1em 1.7em;
                padding-left: 1em;
                border-left: 2px solid #e6e6e6;
                color: #606060;
            }
            div.abstract {
                margin: 2em 2em 2em 2em;
                text-align: left;
                font-size: 85%;
            }
            div.abstract-title {
                font-weight: bold;
                text-align: center;
                padding: 0;
                margin-bottom: 0.5em;
            }
            code {
                font-family: Menlo, Monaco, 'Lucida Console', Consolas, monospace;
                font-size: 85%;
                margin: 0;
            }
            pre {
                margin: 1em 0;
                overflow: auto;
            }
            pre code {
                padding: 0;
                overflow: visible;
                overflow-wrap: normal;
            }
            .sourceCode {
            background-color: transparent;
            overflow: visible;
            }
            hr {
                background-color: #1a1a1a;
                border: none;
                height: 1px;
                margin: 1em 0;
            }
            table {
                margin: 1em 0;
                border-collapse: collapse;
                width: 100%;
                overflow-x: auto;
                display: block;
                font-variant-numeric: lining-nums tabular-nums;
            }
            table caption {
                margin-bottom: 0.75em;
            }
            tbody {
                margin-top: 0.5em;
                border-top: 1px solid #1a1a1a;
                border-bottom: 1px solid #1a1a1a;
            }
            th {
                border-top: 1px solid #1a1a1a;
                padding: 0.25em 0.5em 0.25em 0.5em;
            }
            td {
                padding: 0.125em 0.5em 0.25em 0.5em;
            }
            header {
                margin-bottom: 4em;
                text-align: center;
            }
            #TOC li {
                list-style: none;
            }
            #TOC ul {
                padding-left: 1.3em;
            }
            #TOC > ul {
                padding-left: 0;
            }
            #TOC a:not(:hover) {
                text-decoration: none;
            }
            code{white-space: pre-wrap;}
            span.smallcaps{font-variant: small-caps;}
            div.columns{display: flex; gap: min(4vw, 1.5em);}
            div.column{flex: auto; overflow-x: auto;}
            div.hanging-indent{margin-left: 1.5em; text-indent: -1.5em;}
            ul.task-list{list-style: none;}
            ul.task-list li input[type="checkbox"] {
                width: 0.8em;
                margin: 0 0.8em 0.2em -1.6em;
                vertical-align: middle;
            }
            `}</style>
        </Helmet>
        <header id="title-block-header">
            <h1 className="title">
            LYTNet: A Convolutional Neural Network for Real-Time Pedestrian Traffic Lights and Zebra Crossing Recognition for the Visually Impaired
            {/* <InlineMath math="a" /> */}
            </h1>
            <p className="author">Samuel Yu</p>
            <p className="author">Heon Lee</p>
            <p className="author">John Kim</p>
            <div className="abstract">
            <div className="abstract-title">Abstract</div>
            <p>
                Currently, the visually impaired rely on either a sighted human,
                guide dog, or white cane to safely navigate. However, the training of
                guide dogs is extremely expensive, and canes cannot provide essential
                information regarding the color of traffic lights and direction of
                crosswalks. In this paper, we propose a deep learning based solution
                that provides information regarding the traffic light mode and the
                position of the zebra crossing. Previous solutions that utilize machine
                learning only provide one piece of information and are mostly binary:
                only detecting red or green lights. The proposed convolutional neural
                network, LYTNet, is designed for comprehensiveness, accuracy, and
                computational efficiency. LYTNet delivers both of the two most important
                pieces of information for the visually impaired to cross the road. We
                provide five classes of pedestrian traffic lights rather than the
                commonly seen three or four, and a direction vector representing the
                midline of the zebra crossing that is converted from the 2D image plane
                to real-world positions. We created our own dataset of pedestrian
                traffic lights containing over 5000 photos taken at hundreds of
                intersections in Shanghai. The experiments carried out achieve a
                classification accuracy of 94%, average angle error of 6.35, with a
                frame rate of 20 frames per second when testing the network on an iPhone
                7 with additional post-processing steps.
            </p>
            </div>
        </header>
        <h1 id="introduction">Introduction</h1>
        <p>
            The primary issue that the visually impaired face is not with
            obstacles, which can be detected by their cane, but with information
            that requires the ability to see. When we interviewed numerous visually
            impaired people, there was a shared concern regarding safely crossing
            the road when traveling alone. The reason for this concern is that the
            visually impaired cannot be informed of the color of pedestrian traffic
            lights and the direction in which they should cross the road to stay on
            the pedestrian zebra crossing. When interviewed, they reached a
            consensus that the information stated above is the most essential for
            crossing roads.
        </p>
        <p>
            To solve this problem, some hardware products have been developed
            <span className="citation" data-cites="1"></span>. However, they are too
            financially burdening due to both the cost of the product itself and
            possible reliance on external servers to run the algorithm. The
            financial concern is especially important for the visually impaired
            community in developing countries, such as the people we interviewed who
            live in China. Accordingly, our paper addresses this issue by discussing
            LYTNet that can later be deployed on a mobile phone, both ios and
            android, and run locally. This method would be a cheap, comprehensive,
            and easily accessible alternative that supplements white-canes for the
            visually impaired community.
        </p>
        <p>
            We propose LYTNet, an image classifier, to classify whether or not
            there is a traffic light in the image, and if so, what color/mode it is
            in. We also implement a zebra crossing detector in LYTNet that outputs
            coordinates for the midline of the zebra crossing.
        </p>
        <p>The main contributions of our work are as follows:</p>
        <ul>
            <li>
            <p>
                To the best of our knowledge, we are the first to create a
                convolutional neural network (LYTNet) that outputs both the mode of the
                pedestrian traffic light and midline of the zebra crossing
            </p>
            </li>
            <li>
            <p>
                We create and publish the largest pedestrian traffic light
                dataset, consisting of 5059 photos with labels of both the mode of
                traffic lights and the direction vector of the zebra crossing<span
                className="citation" data-cites="2"></span>
            </p>
            </li>
            <li>
            <p>
                We design a lightweight deep learning model (LYTNet) that can be
                deployed efficiently on a mobile phone application and is able to run at
                20 frames per second (FPS)
            </p>
            </li>
            <li>
            <p>
                We train a unique deep learning model (LYTNet) that uses one-step
                image classification instead of multiple steps, and matches previous
                attempts that only focus on traffic light detection
            </p>
            </li>
        </ul>
        <p>
            The rest of the paper is organized in the following manner: Section
            II discusses previous work and contributions made to the development and
            advancements in the detection of pedestrian traffic light detectors and
            zebra crossings; Section III describes the proposed method of pedestrian
            traffic light and zebra crossing classifier; Section IV provides
            experiment results and comparisons against a published method; Section V
            concludes the paper and explores possible future work.
        </p>
        </BlogPostLayout>
    );
};

// const LYTNet = () => {
//     const selectedCategories = ['Artificial Intelligence'];
//     const [htmlContent, setHtmlContent] = useState('');

//     useEffect(() => {
//         fetch('/blog_posts/lytnetv1/lytnetv1.html')
//             .then(response => response.text())
//             .then(data => setHtmlContent(data))
//             .catch(error => console.error('Error fetching HTML:', error));
//     }, []);

//     return (
//         <BlogPostLayout selectedCategories={selectedCategories}>
//             {/* <h1 className="text-4xl font-bold mb-4" style={{ color: '#183F7C' }}>
//                 Proving Graph 3–Coloring with Go and Zero–Knowledge Proofs
//             </h1>
//             <div className="prose prose-lg">
//                 <p>In this blog post, we will explore the concept of zero-knowledge proofs applied to graph 3-coloring using the Go programming language.</p>
//                 <p>Here is an example of a LaTeX inline formula: <InlineMath math="a^2 + b^2 = c^2\sum_{i=1}^n i^2" />.</p>
//                 <p>And here is a block formula:</p>
//                 <BlockMath math="\int_0^\infty x^2 dx" />
//             </div> */}
//             <div className="content" dangerouslySetInnerHTML={{ __html: htmlContent }} />
//             {/* <h1 className="text-4xl font-bold mb-4" style={{ color: '#183F7C' }}>
//             LYTNet: A Convolutional Neural Network for Real-Time Pedestrian Traffic Lights and Zebra Crossing Recognition for the Visually Impaired
//             </h1>
//             <h1 className="text-2xl font-bold mb-4" style={{ color: '#183F7C' }}>
//             Samuel Yu, Heon Lee, John Kim
//             </h1> */}
//             {/* <div className="content"> */}
//         </BlogPostLayout>
//     );
// }

export default LYTNetv1;
