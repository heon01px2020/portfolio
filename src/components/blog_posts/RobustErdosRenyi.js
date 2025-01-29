import React from 'react';
import 'katex/dist/katex.min.css';
// import { BlockMath, InlineMath } from 'react-katex';
import BlogPostLayout from '../blog_posts/BlogPostLayout';

import { Helmet } from 'react-helmet';
import '../blog_posts/LatexDocument.css';

const RobustErdosRenyi = () => {
    const selectedCategories = ['Math', 'Theoretical CS'];
    return (
        <BlogPostLayout selectedCategories={selectedCategories}>
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="generator" content="pandoc" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
            <meta name="author" content="Heon Lee" />
            <meta name="author" content="George Chemmala" />
            <meta name="author" content="Arjan Chakravarthy" />
            <title>Robust Estimation for the Erdős-Rényi Model</title>
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
            Robust Estimation for the Erdős-Rényi Model
            </h1>
            <p className="author">Heon Lee, George Chemmala, Arjan Chakravarthy</p>
            <p><b>Paper can be found on <a href='https://cs.brown.edu/people/ycheng79/csci2952qf24/Top_Project_3_Heon%20Lee_George%20Chemmala_Arjan%20Chakravarthy_Robust%20Estimation%20for%20the%20Erdo%CC%8Bs-Re%CC%81nyi%20Model.pdf' target='_blank' rel="noopener noreferrer" style={{color: 'blue'}}>Brown</a></b></p>
            <p><b>Full paper to be uploaded here later</b></p>
        </header>
        </BlogPostLayout>
    );
};

export default RobustErdosRenyi;
