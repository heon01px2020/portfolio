// import React, { useState, useEffect } from 'react';
import React from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';
import figure1 from './figure1.png';
import figure2 from './figure2.png';
import figure3 from './figure3.png';
import figure4 from './figure4.png';
import figure5 from './figure5.png';
import BlogPostLayout from '../../blog_posts/BlogPostLayout';

import { Helmet } from 'react-helmet';
import '../LatexDocument.css';

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
                font-size: 1.5em;
                margin-top: 1.4em;
                text-align: center;
                font-weight: bold;
            }
            h5, h6 {
                font-size: 1em;
                font-style: italic;
            }
            h6 {
                font-weight: normal;
            } 
            ol {
                padding-left: 1.7em;
                margin-top: 1em;
                list-style: decimal; /* Ensure numbers are shown */
            }
            ul {
                padding-left: 1.7em;
                margin-top: 1em;
                list-style: disc;
            }
            li {
                margin-bottom: 0.5em; /* Add margin between list items for better readability */
                list-style-position: outside; /* Ensure list markers are outside the list item */
            }
            li > ol, li > ul {
                margin-top: 0;
                list-style-type: lower-alpha; /* Ensures nested lists have a different style */
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
            </h1>
            <p className="author">Samuel Yu, Heon Lee, John Kim</p>
            <p><b>Paper can be found on <a href='https://www.arxiv.org/abs/1907.09706' target='_blank' rel="noopener noreferrer" style={{color: 'blue'}}>arXiv</a></b></p>
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
            To solve this problem, some hardware products have been developed [1]. However, they are too
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
                traffic lights and the direction vector of the zebra crossing [2]
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
        <h1 id="related-works">Related Works</h1>
        <p>Some industrialized countries have developed acoustic pedestrian
        traffic lights that produce sound when the light is green, and is used
        as a signal for the visually impaired to know when to cross the street [3-5]. However, for less
        economically developed countries, crossing streets is still a problem
        for the blind, and acoustic pedestrian traffic lights are not ubiquitous
        even in developed nations [3].</p>
        <p>The task of detecting traffic light for autonomous driving has been
        explored by many and has developed over the years [6-9]. Behrendt et al. [10] created a model that is able to detect traffic
        lights as small as <InlineMath math="3\times 10"/> pixels and with relatively high accuracy. 
        Though most models for traffic
        lights have a high precision and recall rate of nearly 100% and show
        practical usage, the same cannot be said for pedestrian traffic lights.
        Pedestrian traffic lights differ because they are complex shaped and
        usually differ based on the region in which the pedestrian traffic light
        is placed. Traffic lights, on the other hand, are simple circles in
        nearly all countries.</p>
        <p>Shioyama et al. [11] were
        one of the first to develop an algorithm to detect pedestrian traffic
        lights and the length of the zebra-crossing. Others such as Mascetti et
        al. and Charette et al. [3, 15]
        both developed an analytic image processing algorithm, which undergoes
        candidate extraction, candidate recognition, and candidate
        classification. Cheng et al. [5] proposed a more robust real-time pedestrian
        traffic lights detection algorithm, which gets rid of the analytic image
        processing method and uses candidate extraction and a concise machine
        learning scheme.</p>
        <p>A limitation that many attempts faced was the speed of hardware.
        Thus, Ivanchenko et al. [12]
        created an algorithm specifically for mobile devices with an accelerator
        to detect pedestrian traffic lights in real time. Angin et al. [13] incorporated external servers
        to remove the limitation of hardware and provide more accurate
        information. Though the external servers are able to run deeper models
        than phones, it requires fast and stable internet connection at all
        times. Moreover, the advancement of efficient neural networks such as
        MobileNet v2 enable a deep-learning approach to be implemented on a
        mobile device [14].</p>
        <p>Direction is another factor to consider when helping the visually
        impaired cross the street. Though the visually impaired can have a good
        sense of the general direction to cross the road in familiar
        environments, relying on one’s memory has its limitations [16]. Therefore, solutions to
        provide specific direction have also been devised. Other than detecting
        the color of pedestrian traffic lights, Ivanchenko et al. [16] also created an algorithm for
        detecting zebra crossings. The system obtains information of how much of
        the zebra-crossing is visible to help the visually impaired know whether
        or not they are generally facing in the correct direction, but it does
        not provide the specific location of the zebra crossing. Poggi et al.,
        Lausser et al., and Banich [17-19] also use deep learning neural network
        within computer vision to detect zebra crossings to help the visually
        impaired cross streets. However, no deep learning method is able to
        output both traffic light and zebra crossing information
        simultaneously.</p>
        <h1 id="proposed-method">Proposed Method</h1>
        <p>Our method is performed on our labeled test-set. The training, test,
        and validation sets do not overlap.</p>
        <figure>
        <img src={figure1} alt="figure1"/>
        {/* alt="Sample images taken in different weather and lighting conditions. Other pedestrian traffic lights or vehicle/bicycle traffic lights can be seen in the images. The two endpoints of the zebra crossing are labelled as seen on the images." /> */}
        <figcaption aria-hidden="true"><b>Fig. 1.</b> Sample images taken in different weather
        and lighting conditions. Other pedestrian traffic lights or
        vehicle/bicycle traffic lights can be seen in the images. The two
        endpoints of the zebra crossing are labelled as seen on the
        images.</figcaption>
        </figure>
        <h2 id="dataset-collection-and-pre-processing">Dataset Collection and
        Pre-Processing</h2>
        <p>Our data consists of images of street intersection scenes in
        Shanghai, China in varying weather and lighting conditions. Images were
        captured with two different cameras, an iPhone 7 and iPhone 6s at a
        resolution of <InlineMath math="4032\times 3024"/> [2]. The camera was positioned
        at varying heights and angles around the vertical and transverse axes,
        but the angle around the longitudinal axis was kept relatively constant
        under the assumption that the visually impaired are able to keep the
        phone in a horizontal orientation. At an intersection, images were
        captured at varying positions relative to the center of the crosswalk,
        and at different positions on the crosswalk. Images may contain multiple
        pedestrian traffic lights, or other traffic lights such as vehicle and
        bicycle traffic lights.</p>
        <p>The final dataset consists of 5059 images [2]. Each image was labelled with a ground truth
        class for traffic lights: red, green, countdown_green, countdown_blank,
        and none. Sample images are shown in Figure 1. Images were also labelled
        with 2 image coordinates <InlineMath math="(x,y)"/> representing 
        the endpoints of the zebra crossing as pictured on the
        image. The image coordinates define the midline of the zebra crossing.
        In a significant number of the images, the mid-line of the zebra
        crossing was obstructed by pedestrians, cars, bicycles, or motorcycles.
        Statistics regarding the labelled images are shown in Table 1.</p>
        <p>Prior to training, each image was re-sized to a resolution of <InlineMath math="876\times 657"/>. During each epoch, a
        random crop of size <InlineMath math="768\times 576"/>
        and a random horizontal flip was applied to each image to prevent
        over-fitting. The training dataset was partitioned into 5 equal groups
        and 5-fold cross validation was performed. Images used in the validation
        dataset were directly re-sized from <InlineMath math="4032\times 3024"/> to <InlineMath math="768\times 576"/> without any transformations applied.</p>        
        <div id="tab1" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <table style={{ width: '50%', borderCollapse: 'collapse' }}>  {/* Adjusted the table width to 80% */}
                <caption style={{ fontWeight: 'bold', textAlign: 'center' }}>Table 1. Composition of Dataset</caption>
                <thead>
                <tr>
                    <th></th>
                    <th>Red</th>
                    <th>Green</th>
                    <th>CD Green</th>
                    <th>CD Blank</th>
                    <th>None</th>
                    <th>Total</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Number of Images</td>
                    <td>1477</td>
                    <td>1303</td>
                    <td>963</td>
                    <td>904</td>
                    <td>412</td>
                    <td>5059</td>
                </tr>
                <tr>
                    <td>Percentage of Dataset</td>
                    <td>29.2%</td>
                    <td>25.8%</td>
                    <td>19.0%</td>
                    <td>17.9%</td>
                    <td>8.1%</td>
                    <td>100.0%</td>
                </tr>
                </tbody>
            </table>
        </div>

        <h2 id="classification-and-regression-algorithm">Classification and
        Regression Algorithm</h2>
        <p>Our neural network, LYTNet, follows the framework of MobileNet v2, a
        lightweight neural network designed to operate on mobile phones.
        MobileNet v2 primarily uses depthwise separable convolutions. In a
        depthwise separable convolution, a "depthwise" convolution is first
        performed: the channels of the input image are separated and different
        filters are used for every convolution over each channel. Then, a
        pointwise convolution (regular convolution of kernel size <InlineMath math="1\times1"/> is used to collapse the
        channels to a depth of 1. For an input of dimensions <InlineMath math="h_i\cdot w_i\cdot d_i"/> convolved with
        stride 1 with a kernel of size <InlineMath math="k\cdot k"/> and <InlineMath math="d_j"/> output channels,
        the cost of a standard convolution is <InlineMath math="h_i\cdot w_i\cdot k^2\cdot d_i\cdot d_j"/> while the cost of a
        depthwise separable convolution is <InlineMath math="h_i\cdot w_i\cdot d_i\cdot(k^2+d_j)"/> [14]. Thus, the total cost of a depthwise separable
        convolution is <InlineMath math="\frac{k^2 \cdot d_j}{k^2+d_j}"/> times less than a standard convolution while
        having similar performance  [14]. Each "bottleneck" block consists of a <InlineMath math="1\times 1"/> convolution to expand the
        number of channels by a factor of <InlineMath math="t"/>, and a depthwise separable convolution
        of stride <InlineMath math="s"/> and output channels <InlineMath math="c"/>. 
        Multiple fully connected layers
        were used to achieve the two desired outputs of the network: the
        classification and the endpoints of the zebra crossing. Compared to
        MobileNet v2, LYTNet was adapted for a larger input of <InlineMath math="768\times 576\times 3"/> in order for the
        pedestrian traffic lights to retain a certain degree of clarity. We used
        a <InlineMath math="2\times 2"/> max-pool layer after
        the first convolution to decrease the size of the output and thus
        increase the speed of the network. LYTNet also features significantly
        fewer bottleneck layers (10 vs 17) compared to MobileNet v2 [14]. Table 2 shows the detailed
        structure of our network.</p>
        <p>During training, we used the Adam optimizer with momentum <InlineMath math="0.9"/> and initial learning rate of <InlineMath math="0.001"/>. The learning rate was decreased by
        a factor of 10 at 150, 400, and 650 epochs, with the network converging
        at around 800 epochs. We used a combination of cross-entropy loss (for
        image classification to calculate the loss for classification) and
        mean-squared-error loss (for regression to calculate the loss for
        direction) function is defined as: <BlockMath math="L = \omega \cdot MSE + (1-\omega) \cdot CE + \lambda \cdot R(W)"/> in
        which <InlineMath math='R(W)'/> is L-2 regularization.
        We used the value <InlineMath math='\omega=0.5'/> during training.</p>
        <div id="tab2" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <table style={{ width: '33%', borderCollapse: 'collapse' }}> {/* Adjusted the table width to 80% */}
            <caption style={{ fontWeight: 'bold', textAlign: 'center' }}>Table 2. Structure of Our Network</caption>
            <tbody>
                <tr className="odd">
                <td style={{ textAlign: 'center' }}>Input</td>
                <td style={{ textAlign: 'center' }}>Operator</td>
                <td style={{ textAlign: 'center' }}><InlineMath math="t" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="c" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="n" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="s" /></td>
                </tr>
                <tr className="even">
                <td style={{ textAlign: 'center' }}><InlineMath math="768 \times 576 \times 3" /></td>
                <td style={{ textAlign: 'center' }}>conv2d <InlineMath math="3 \times 3" /></td>
                <td style={{ textAlign: 'center' }}>-</td>
                <td style={{ textAlign: 'center' }}><InlineMath math="32" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="1" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="2" /></td>
                </tr>
                <tr className="odd">
                <td style={{ textAlign: 'center' }}><InlineMath math="384 \times 288 \times 32" /></td>
                <td style={{ textAlign: 'center' }}>maxpool <InlineMath math="2 \times 2" /></td>
                <td style={{ textAlign: 'center' }}>-</td>
                <td style={{ textAlign: 'center' }}>-</td>
                <td style={{ textAlign: 'center' }}><InlineMath math="1" /></td>
                <td style={{ textAlign: 'center' }}>-</td>
                </tr>
                <tr className="even">
                <td style={{ textAlign: 'center' }}><InlineMath math="192 \times 144 \times 32" /></td>
                <td style={{ textAlign: 'center' }}>Bottleneck</td>
                <td style={{ textAlign: 'center' }}><InlineMath math="1" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="16" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="1" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="1" /></td>
                </tr>
                <tr className="odd">
                <td style={{ textAlign: 'center' }}><InlineMath math="192 \times 144 \times 16" /></td>
                <td style={{ textAlign: 'center' }}>Bottleneck</td>
                <td style={{ textAlign: 'center' }}><InlineMath math="6" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="24" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="1" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="2" /></td>
                </tr>
                <tr className="even">
                <td style={{ textAlign: 'center' }}><InlineMath math="96 \times 72 \times 24" /></td>
                <td style={{ textAlign: 'center' }}>Bottleneck</td>
                <td style={{ textAlign: 'center' }}><InlineMath math="6" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="24" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="2" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="1" /></td>
                </tr>
                <tr className="odd">
                <td style={{ textAlign: 'center' }}><InlineMath math="96 \times 72 \times 24" /></td>
                <td style={{ textAlign: 'center' }}>Bottleneck</td>
                <td style={{ textAlign: 'center' }}><InlineMath math="6" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="32" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="1" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="2" /></td>
                </tr>
                <tr className="even">
                <td style={{ textAlign: 'center' }}><InlineMath math="48 \times 36 \times 32" /></td>
                <td style={{ textAlign: 'center' }}>Bottleneck</td>
                <td style={{ textAlign: 'center' }}><InlineMath math="6" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="64" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="1" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="2" /></td>
                </tr>
                <tr className="odd">
                <td style={{ textAlign: 'center' }}><InlineMath math="24 \times 18 \times 64" /></td>
                <td style={{ textAlign: 'center' }}>Bottleneck</td>
                <td style={{ textAlign: 'center' }}><InlineMath math="6" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="64" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="2" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="1" /></td>
                </tr>
                <tr className="even">
                <td style={{ textAlign: 'center' }}><InlineMath math="24 \times 18 \times 64" /></td>
                <td style={{ textAlign: 'center' }}>Bottleneck</td>
                <td style={{ textAlign: 'center' }}><InlineMath math="6" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="96" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="1" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="1" /></td>
                </tr>
                <tr className="odd">
                <td style={{ textAlign: 'center' }}><InlineMath math="12 \times 9 \times 160" /></td>
                <td style={{ textAlign: 'center' }}>Bottleneck</td>
                <td style={{ textAlign: 'center' }}><InlineMath math="6" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="160" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="2" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="1" /></td>
                </tr>
                <tr className="even">
                <td style={{ textAlign: 'center' }}><InlineMath math="12 \times 9 \times 160" /></td>
                <td style={{ textAlign: 'center' }}>Bottleneck</td>
                <td style={{ textAlign: 'center' }}><InlineMath math="6" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="320" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="1" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="1" /></td>
                </tr>
                <tr className="odd">
                <td style={{ textAlign: 'center' }}><InlineMath math="12 \times 9 \times 320" /></td>
                <td style={{ textAlign: 'center' }}>conv2d <InlineMath math="1 \times 1" /></td>
                <td style={{ textAlign: 'center' }}>-</td>
                <td style={{ textAlign: 'center' }}><InlineMath math="1280" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="1" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="1" /></td>
                </tr>
                <tr className="even">
                <td style={{ textAlign: 'center' }}><InlineMath math="12 \times 9 \times 1280" /></td>
                <td style={{ textAlign: 'center' }}>avgpool <InlineMath math="12 \times 9" /></td>
                <td style={{ textAlign: 'center' }}>-</td>
                <td style={{ textAlign: 'center' }}><InlineMath math="1280" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="1" /></td>
                <td style={{ textAlign: 'center' }}>-</td>
                </tr>
                <tr className="odd">
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}>FC</td>
                <td style={{ textAlign: 'center' }}>-</td>
                <td style={{ textAlign: 'center' }}><InlineMath math="160" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="1" /></td>
                <td style={{ textAlign: 'center' }}>-</td>
                </tr>
                <tr className="even">
                <td style={{ textAlign: 'center' }}><InlineMath math="160" /></td>
                <td style={{ textAlign: 'center' }}>FC</td>
                <td style={{ textAlign: 'center' }}>-</td>
                <td style={{ textAlign: 'center' }}><InlineMath math="5" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="1" /></td>
                <td style={{ textAlign: 'center' }}>-</td>
                </tr>
                <tr className="odd">
                <td style={{ textAlign: 'center' }}><InlineMath math="1280" /></td>
                <td style={{ textAlign: 'center' }}>FC</td>
                <td style={{ textAlign: 'center' }}>-</td>
                <td style={{ textAlign: 'center' }}><InlineMath math="80" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="1" /></td>
                <td style={{ textAlign: 'center' }}>-</td>
                </tr>
                <tr className="even">
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}>FC</td>
                <td style={{ textAlign: 'center' }}>-</td>
                <td style={{ textAlign: 'center' }}><InlineMath math="4" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="1" /></td>
                <td style={{ textAlign: 'center' }}>-</td>
                </tr>
                <tr className="odd">
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}></td>
                </tr>
            </tbody>
            </table>
        </div>

        <h2
        id="conversion-of-2d-image-coordinates-to-3d-world-coordinates">Conversion
        of 2D Image Coordinates to 3D World Coordinates</h2>
        <p>The predicted endpoints output from the network are assumed to be 
        accurate in regards to the 2D image. However, the appearance of objects 
        and the zebra crossing in the image plane is an incorrect representation 
        of the position of objects in the 3D world. Since the desired object, 
        the zebra crossing, is on the ground, it has a fixed <InlineMath math="z" />-value of <InlineMath math="z=1" />, enabling 
        the conversion of a 2D image to a 2D birds-eye perspective image to achieve the desired 
        3D real-world information of the zebra crossing.</p>
        <p>
        On our base image in Figure 2, we define four points: <InlineMath math="(1671,1440)" />, <InlineMath math="(2361,1440)" />, <InlineMath math="(4032,2171)" />, <InlineMath math="(0,2171)" /> and four corresponding points in the real world: <InlineMath math="(1671,212)" />, <InlineMath math="(2361,212)" />, <InlineMath math="(2361,2812)" />, <InlineMath math="(1671,2812)" />, with the points defined on the xy-plane such that <InlineMath math="0 \leq x < 4032" /> and <InlineMath math="0 \leq y < 3024" />. The matrix 
        <BlockMath math="\begin{bmatrix} -1.17079727\cdot10^{-1} & -1.56391162\cdot10^{0} & 2.25203273\cdot10^{3}\\ 0 & -2.59783431\cdot10^{0} & 3.71606050\cdot10^{3}\\ 0 & -7.75749810\cdot10^{-4} & 1.00000000\cdot10^{0} \end{bmatrix}" /> 
        maps each point on the image <InlineMath math="(x,y,1)" /> to its corresponding point in the real-world. Assuming a fixed height, and a fixed angle around the transverse and longitudinal axes, the matrix will perfectly map each point on the image to the correct birds-eye-view point. Though this is not the case due to varying heights and angles around the transverse axis, the matrix provides the rough position of zebra crossing in the real world, which is sufficient for the purposes of guiding the visually impaired to a correct orientation.
        </p>
        <figure>
        <img src={figure2} alt="figure2"/>
        {/* alt="The image on the left is the base image that was taken perpendicular to the zebra crossing and positioned in the center of the crossing, at a camera height of 1.4 m. Using our matrix, each point in the base image is mapped to a new point, creating the birds-eye image on the right. We can see that the zebra crossing is bounded by a rectangle with a midline centered and perpendicular to the x-axis." /> */}
        <figcaption aria-hidden="true"><b>Fig. 2.</b> The image on the left is the base image
        that was taken perpendicular to the zebra crossing and positioned in the
        center of the crossing, at a camera height of 1.4 m. Using our matrix,
        each point in the base image is mapped to a new point, creating the
        birds-eye image on the right. We can see that the zebra crossing is
        bounded by a rectangle with a midline centered and perpendicular to the
        x-axis.</figcaption>
        </figure>


        {/* STOP HERE */}
        <h2 id="mobile-application">Mobile Application</h2>
        <p>As a proof of concept, an application was created using Swift. LYTNet
        is deployed in the application. Additional post-processing steps are
        implemented in the application to increase safety and convert zebra
        crossing data into information for the visually impaired. Accordingly,
        the softmax probabilities of each class is stored in phone memory, and
        the probabilities are averaged over five consecutive frames. Since
        countdown_blank and countdown_green represent the same mode of traffic
        light - a green light that has numbers counting down - the probabilities
        of either class are added together. A probability threshold of 0.8 is
        set for the application to output a decision. This is used to prevent a
        decision from being made before or after the pedestrian traffic light
        changes color. If one frame of the five frame average is different, the
        probability threshold would not be reached. Users will be alerted by a
        choice of beeps or vibrations whenever the five-frame average changes to
        a different traffic light mode. The average of the endpoint coordinates
        is also taken over five consecutive frames to provide more stable
        instructions for the user. The direction is retrieved from the angle of
        the direction vector in the birds-eye perspective.</p>
        <p>A threshold of <InlineMath math="10\degree"/> was set
        for <InlineMath math="\Delta\theta"/> before
        instructions are output to the user. If <InlineMath math="\Delta\theta < -10\degree"/> then an
        instruction for the user to rotate left is output, and if <InlineMath math="\Delta\theta > -10\degree"/> an
        instruction for the user to rotate right is output. The <InlineMath math="x"/>-intercept of the line through the start
        and end-points is calculated with: <BlockMath math="x_{int}=\frac{x_1y_2-x_2y_1}{y_2-y_1}."/>
        For an image with width <InlineMath math='w'/> and
        midline at <InlineMath math='(w-1)/2'/>, if <InlineMath math='x_{int} > (w-1)/2 + w\cdot0.085'/>,
        instructions are given to move left, and if <InlineMath math='x_{int} < (w-1)/2 - w\cdot0.085'/>, instructions are given to move
        right. In our defined area of the zebra crossing in transformed base
        image, the edges of the zebra crossing are within <InlineMath math='8.5\%'/> of the midline. With a constant
        width for the zebra crossing, if <InlineMath math='x_{int}'/> is outside of the <InlineMath math='8.5\%'/> range, the user will be outside of
        the zebra crossing. Refer to Figure 3 for a flow chart of the demo
        application and Figure 4 for a screenshot of our demo application.</p>
        <figure>
        <img src={figure3} alt="figure3"/>
        {/* alt="Our application continuously iterates through this flow chart at 20fps." /> */}
        <figcaption aria-hidden="true"><b>Fig. 3.</b> Our application continuously iterates
        through this flow chart at 20fps.</figcaption>
        </figure>
        <figure>
        <img src={figure4} alt="figure4"/>
        {/* alt="Sample screenshots from our demo application. In order from top to bottom is the: position instruction, orientation instruction, 5-frame average class, delay, frame rate, and current detected class. The blue line is the direction vector for the specific frame , and the red line is the five-frame average direction vector." /> */}
        <figcaption aria-hidden="true"><b>Fig. 4.</b> Sample screenshots from our demo
        application. In order from top to bottom is the: position instruction,
        orientation instruction, 5-frame average class, delay, frame rate, and
        current detected class. The blue line is the direction vector for the
        specific frame , and the red line is the five-frame average direction
        vector.</figcaption>
        </figure>

        <h1 id="experiments">Experiments</h1>
        <p>We trained our network using 3456 images from our dataset and 864
        images for validation [2]. Our
        testing dataset consists of 739 images. The width multiplier changes the
        number of output channels at each layer. A smaller width multiplier
        decreases the number of channels and makes the network less
        computationally expensive, but sacrifices accuracy. As seen in Table 3,
        networks using a higher width multiplier also have a lower accuracy due
        to overfitting. We performed further testing using the network with
        width multiplier 1.0, as it achieves the highest accuracy while
        maintaining near real-time speed when tested on an iPhone 7. The
        precisions and recalls of countdown_blank and none are the lowest out of
        all classes, which may be due to the limited number of training
        samples for those two classes (Table 4). However, the precision and recall of
        red traffic lights, the most important class, is greater than 96%.</p>
        
        <div id="tab3" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <table style={{ width: '50%', borderCollapse: 'collapse' }}>
            <caption style={{ fontWeight: 'bold', textAlign: 'center' }}>Table 3. Comparison of Different Network Widths</caption>
            <tbody>
                <tr className="odd">
                <td style={{ textAlign: 'center' }}>Width</td>
                <td style={{ textAlign: 'center' }}>Accuracy (%)</td>
                <td style={{ textAlign: 'center' }}>Angle Error (degrees)</td>
                <td style={{ textAlign: 'center' }}>Start-point Error</td>
                <td style={{ textAlign: 'center' }}>Frame Rate (fps)</td>
                <td style={{ textAlign: 'center' }}></td>
                </tr>
                <tr className="even">
                <td style={{ textAlign: 'center' }}><InlineMath math="1.4" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="93.50" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="6.80" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="0.0805" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="15.69" /></td>
                <td style={{ textAlign: 'center' }}></td>
                </tr>
                <tr className="odd">
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="92.96" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="6.73" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="0.0810" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="17.19" /></td>
                <td style={{ textAlign: 'center' }}></td>
                </tr>
                <tr className="even">
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="94.18" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="6.27" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="0.0763" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="20.32" /></td>
                <td style={{ textAlign: 'center' }}></td>
                </tr>
                <tr className="odd">
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="93.50" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="6.44" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="0.0768" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="21.69" /></td>
                <td style={{ textAlign: 'center' }}></td>
                </tr>
                <tr className="even">
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="93.23" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="7.08" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="0.0854" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="23.41" /></td>
                <td style={{ textAlign: 'center' }}></td>
                </tr>
                <tr className="odd">
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="92.96" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="7.16" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="0.0825" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="24.33" /></td>
                <td style={{ textAlign: 'center' }}></td>
                </tr>
                <tr className="even">
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="89.99" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="7.19" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="0.0853" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="28.30" /></td>
                <td style={{ textAlign: 'center' }}></td>
                </tr>
                <tr className="odd">
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}></td>
                </tr>
            </tbody>
            </table>
        </div>

        <div id="tab4" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <table style={{ width: '40%', borderCollapse: 'collapse' }}>
            <caption style={{ fontWeight: 'bold', textAlign: 'center' }}>Table 4. Precision and Recalls by Class</caption>
            <tbody>
                <tr className="odd">
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}>Red</td>
                <td style={{ textAlign: 'center' }}>Green</td>
                <td style={{ textAlign: 'center' }}>Countdown Green</td>
                <td style={{ textAlign: 'center' }}>Countdown Blank</td>
                <td style={{ textAlign: 'center' }}>None</td>
                </tr>
                <tr className="even">
                <td style={{ textAlign: 'center' }}>Precision</td>
                <td style={{ textAlign: 'center' }}><InlineMath math="0.97" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="0.94" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="0.99" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="0.86" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="0.92" /></td>
                </tr>
                <tr className="odd">
                <td style={{ textAlign: 'center' }}>Recall</td>
                <td style={{ textAlign: 'center' }}><InlineMath math="0.96" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="0.94" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="0.96" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="0.92" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="0.87" /></td>
                </tr>
                <tr className="even">
                <td style={{ textAlign: 'center' }}>F1 Score</td>
                <td style={{ textAlign: 'center' }}><InlineMath math="0.96" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="0.94" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="0.97" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="0.89" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="0.89" /></td>
                </tr>
                <tr className="odd">
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}></td>
                </tr>
            </tbody>
            </table>
        </div>

        <p>When the zebra crossing is clear/unblocked, the angle error,
        startpoint, and endpoint errors are significantly better than when it is
        obstructed (Table 5). For an obstructed zebra crossing, insufficient
        information is provided in the image for the network to output precise
        endpoints.</p>
        <div id="tab5" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <table style={{ width: '50%', borderCollapse: 'collapse' }}>
            <caption style={{ fontWeight: 'bold', textAlign: 'center' }}>
                Table 5. Comparison of Network Performance on Clear and Obstructed Zebra Crossings
            </caption>
            <tbody>
                <tr className="odd">
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}>Number of Images</td>
                <td style={{ textAlign: 'center' }}>Angle Error</td>
                <td style={{ textAlign: 'center' }}>Startpoint Error</td>
                <td style={{ textAlign: 'center' }}>Endpoint Error</td>
                <td style={{ textAlign: 'center' }}></td>
                </tr>
                <tr className="even">
                <td style={{ textAlign: 'center' }}>Clear</td>
                <td style={{ textAlign: 'center' }}><InlineMath math="594" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="5.86" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="0.0725" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="0.476" /></td>
                <td style={{ textAlign: 'center' }}></td>
                </tr>
                <tr className="odd">
                <td style={{ textAlign: 'center' }}>Obstructed</td>
                <td style={{ textAlign: 'center' }}><InlineMath math="154" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="7.97" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="0.0918" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="0.0649" /></td>
                <td style={{ textAlign: 'center' }}></td>
                </tr>
                <tr className="even">
                <td style={{ textAlign: 'center' }}>All</td>
                <td style={{ textAlign: 'center' }}><InlineMath math="739" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="6.27" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="0.0763" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="0.0510" /></td>
                <td style={{ textAlign: 'center' }}></td>
                </tr>
                <tr className="odd">
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}></td>
                </tr>
            </tbody>
            </table>
        </div>
        <p>Figure 5 shows various outputs of our network. In (A), the network
        correctly predicts no traffic light despite two green car traffic lights
        taking a prominent place in the background, and is able to somewhat
        accurately predict the coordinates despite the zebra crossing appearing
        faint. In (B), the model correctly predicted the class despite the
        symbol being underexposed by the camera. (C) and (D) show examples of
        the model correctly predicting the traffic light despite rainy and snowy
        weather. (B), (C), and (D) all show the network predicting coordinates
        close to the ground truth.</p>
        <figure>
        <img src={figure5} alt="figure5"/>
        {/* alt="Example correct outputs from our neural network. The class is labelled on top of each image. Blue dots are ground truth coordinates and red dots are predicted coordinates." /> */}
        <figcaption aria-hidden="true"><b>Fig. 5.</b> Example correct outputs from our neural
        network. The class is labelled on top of each image. Blue dots are
        ground truth coordinates and red dots are predicted
        coordinates.</figcaption>
        </figure>
        <p>To prove the effectiveness of LYTNet, we retrained it using only red,
        green, and none class pictures from our own dataset and tested it on the
        PTLR dataset [5]. Due to the
        small size of the PTLR training dataset, we were unable to perform
        further training or fine-tuning using the dataset without significant
        overfitting. Using the China portion of the PTLR dataset, we compared
        our algorithm with Cheng et al.’s algorithm, which is the most recent
        attempt for pedestrian traffic light detection to our knowledge.</p>
        <p>LYTNet was able to outperform their algorithm in regards to the F1
        score, despite the disadvantage of insufficient training data from the
        PTLR dataset to train our network (Table 6). Furthermore, LYTNet
        provides additional information about the direction of the zebra
        crossing, giving the visually impaired a more comprehensive set of
        information for crossing the street, and outputs information regarding 4
        different modes of traffic lights rather than only 2. We also achieve a
        similar frame rate to Cheng et al.’s algorithm, which achieved a frame
        rate of 21, albeit on a different mobile device.</p>
        <div id="tab6" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <table style={{ width: '37%', borderCollapse: 'collapse' }}>
            <caption style={{ fontWeight: 'bold', textAlign: 'center' }}>
                Table 6. Precision and Recall of Our Network and Cheng et al.’s Algorithm
            </caption>
            <tbody>
                <tr className="odd">
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}>Our Network</td>
                <td style={{ textAlign: 'center' }}>Cheng et al.’s Algorithm</td>
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}></td>
                </tr>
                <tr className="even">
                <td style={{ textAlign: 'center' }}>Red</td>
                <td style={{ textAlign: 'center' }}>Recall</td>
                <td style={{ textAlign: 'center' }}><InlineMath math="\textbf{92.23}" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="86.43" /></td>
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}></td>
                </tr>
                <tr className="odd">
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}>Precision</td>
                <td style={{ textAlign: 'center' }}><InlineMath math="96.24" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="\textbf{96.67}" /></td>
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}></td>
                </tr>
                <tr className="even">
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}>F1 Score</td>
                <td style={{ textAlign: 'center' }}><InlineMath math="\textbf{94.19}" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="91.26" /></td>
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}></td>
                </tr>
                <tr className="odd">
                <td style={{ textAlign: 'center' }}>Green</td>
                <td style={{ textAlign: 'center' }}>Recall</td>
                <td style={{ textAlign: 'center' }}><InlineMath math="\textbf{92.15}" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="91.30" /></td>
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}></td>
                </tr>
                <tr className="even">
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}>Precision</td>
                <td style={{ textAlign: 'center' }}><InlineMath math="\textbf{98.83}" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="98.03" /></td>
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}></td>
                </tr>
                <tr className="odd">
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}>F1 Score</td>
                <td style={{ textAlign: 'center' }}><InlineMath math="\textbf{95.37}" /></td>
                <td style={{ textAlign: 'center' }}><InlineMath math="94.55" /></td>
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}></td>
                </tr>
                <tr className="even">
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'center' }}></td>
                </tr>
            </tbody>
            </table>
        </div>


        <h1 id="conclusion">Conclusion</h1>
        <p>In this paper, we proposed LYTNet, a convolutional neural network
        that uses image classification to detect the color of pedestrian traffic
        lights and to provide the direction and position of the zebra crossing
        to assist the visually impaired in crossing the street. LYTNet uses
        techniques taken from MobileNet v2,and was trained on our dataset, which
        is one of the largest pedestrian traffic light datasets in the world [2]. Images were captured at
        hundreds of traffic intersections within Shanghai at a variety of
        different heights, angles, and positions relative to the zebra
        crossing.</p>
        <p>Unlike previous methods that use multiple steps like detecting
        candidate areas, LYTNet uses image classification, a one-step approach.
        Since the network can learn features from an entire image rather than
        only detecting the pedestrian traffic light symbol, it has the advantage
        of being more robust in cases such as images with multiple pedestrian
        traffic lights. With sufficient training data, the network can draw
        clues from the context of an image along with the traffic light color to
        reach the correct prediction.</p>
        <p>Additionally, LYTNet provides the advantage of being more
        comprehensive than previous methods as it classifies the traffic light
        between five total classes compared to 3 or 4 in previous attempts.
        Furthermore, our network is also capable of outputting zebra crossing
        information, which other methods do not provide. Thus, LYTNet elegantly combines the two most needed pieces
        of information without requiring two separate algorithms. Furthermore,
        our network is able to match the performance of the algorithm proposed
        by Cheng et al.</p>
        <p>In the future, we will improve the robustness of our deep learning
        model through the expansion of our dataset, for further generalization.
        For the two classes with the least data, none and countdown_blank,
        additional data can greatly improve the precisions and recalls. Data
        from other areas around the world can also be collected to separately
        train the network to perform optimally in another region with pedestrian
        traffic lights with differently shaped symbols. Our demonstration mobile
        application will be further developed into a working application that
        converts the output into auditory and sensory information for the
        visually impaired.</p>
        <h1 id="acknowledgements">Acknowledgements</h1>
        <p>We would like to express our sincerest gratitude to Professor Chunhua
        Shen, Dr. Facheng Li, and Dr. Rongyi Lan for their insight and expertise
        when helping us in our research.</p>


        <div className="thebibliography">
            <ol>
            <li>Blaauw, F., Krieke, L., Emerencia, A., Aiello, M., Jonge, P.: Personalized advice for enhancing well-being using automated impulse response analysis – aira (06 2017)</li>
            <li>Samuel, Y., Heon, L., John, K.: Ptl-dataset. <a href="https://github.com/samuelyu2002/PTL-Dataset" className="uri">https://github.com/samuelyu2002/PTL-Dataset</a> (04 2019)</li>
            <li>Mascetti, S., Ahmetovic, D., Gerino, A., Bernareggi, C., Busso, M., Rizzi, A.: Robust traffic lights detection on mobile devices for pedestrians with visual impairment. Computer Vision and Image Understanding <strong>148</strong> (12 2015)</li>
            <li>Barlow, J., Bentzen, B., Tabor, L.: Accessible Pedestrian Signals. National Cooperative Highway Research Program (2003)</li>
            <li>Cheng, R., Wang, K., Yang, K., Long, N., Bai, J., Liu, D.: Real-time pedestrian crossing lights detection algorithm for the visually impaired. Multimedia Tools and Applications <strong>77</strong> (12 2017)</li>
            <li>Almeida, T., Macedo, H., Matos, L.: A Traffic Light Recognition Device, pp. 369-375. Springer International Publishing, Cham (2018)</li>
            <li>Omachi, M., Omachi, S.: Traffic light detection with color and edge information. In: 2009 2nd IEEE International Conference on Computer Science and Information Technology. pp. 284–287 (2009)</li>
            <li>Gong, J., Jiang, Y., Xiong, G., Guan, C., Tao, G., Chen, H.: The recognition and tracking of traffic lights based on color segmentation and camshift for intelligent vehicles. In: 2010 IEEE Intelligent Vehicles Symposium. pp. 431–435 (2010)</li>
            <li>Varan, S., Singh, S., Kunte, R.S., Sudhaker, S., Philip, B.: A road traffic signal recognition system based on template matching employing tree classifier. In: International Conference on Computational Intelligence and Multimedia Applications (ICCIMA 2007). vol. 3, pp. 360-365 (2008)</li>
            <li>Behrendt, K., Novak, L., Botros, R.: A deep learning approach to traffic lights: Detection, tracking, and classification. In: 2017 IEEE International Conference on Robotics and Automation (ICRA). pp. 1370-1377 (2017)</li>
            <li>Shioyama, T., Wu, H., Nakamura, N., Kitawaki, S.: Measurement of the length of pedestrian crossings and detection of traffic lights from image data. Meas. Sci. Technol <strong>13</strong>, 1450-1457 (09 2002)</li>
            <li>Ash, R., Ofri, D., Brokman, J., Friedman, I., Moshe, Y.: Real-time pedestrian traffic light detection. In: 2018 IEEE International Conference on the Science of Electrical Engineering in Israel (ICSEE). pp. 1-5 (2018)</li>
            <li>Angin, P., Bhargava, B., Helal, S.: A mobile-cloud collaborative traffic lights detector for blind navigation. In: 2010 Eleventh International Conference on Mobile Data Management. pp. 396-401 (2010)</li>
            <li>Sandler, M., Howard, A., Zhu, M., Zhmoginov, A., Chen, L.C.: Mobilenetv2: Inverted residuals and linear bottlenecks. In: 2018 IEEE/CVF Conference on Computer Vision and Pattern Recognition. pp. 4510-4520 (06 2018)</li>
            <li>de Charette, R., Nashashibi, F.: Traffic light recognition using image processing compared to learning processes. In: 2009 IEEE/RSJ International Conference on Intelligent Robots and Systems. pp. 333-338 (2009)</li>
            <li>Ivanchenko, V., Coughlan, J., Shen, H.: Crosswatch: A camera phone system for orienting visually impaired pedestrians at traffic intersections. In: Lecture Notes in Computer Science. vol. 5105, pp. 1122-1128. Springer Berlin Heidelberg (2008)</li>
            <li>Poggi, M., Nanni, L., Mattoccia, S.: Crosswalk recognition through point-cloud processing and deep-learning suited to a wearable mobility aid for the visually impaired. In: New Trends in Image Analysis and Processing – ICIAP 2015 Workshops. vol. 9281, pp. 282–289. Springer International Publishing (09 2015)</li>
            <li>Lausser, L., Schwenker, F., Palm, G.: Detecting zebra crossings utilizing adaboost. In: ESANN. pp. 535-540 (2008)</li>
            <li>David Banich, J.: Zebra Crosswalk Detection Assisted By Neural Networks. Master’s thesis, California Polytechnic State University (2016)</li>
            </ol>
        </div>
        </BlogPostLayout>
    );
};

export default LYTNetv1;
