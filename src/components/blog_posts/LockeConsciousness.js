import React from 'react';
import 'katex/dist/katex.min.css';
// import { BlockMath, InlineMath } from 'react-katex';
import BlogPostLayout from '../blog_posts/BlogPostLayout';

import { Helmet } from 'react-helmet';
import '../blog_posts/LatexDocument.css';

const LockeConsciousness = () => {
    const selectedCategories = ['Miscellaneous'];
    return (
        <BlogPostLayout selectedCategories={selectedCategories}>
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="generator" content="pandoc" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
            <meta name="author" content="Heon Lee" />
            <title>Sameness of Consciousness as Necessary and Sufficient Conditions for Personal Identity</title>
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
            Sameness of Consciousness as Necessary and Sufficient Conditions for Personal Identity
            </h1>
            <p className="author">Heon Lee</p>
        </header>
        <p>In <i>An Essay Concerning Human Understanding</i>, John Locke aims to build a foundation for 
        personal identity. According to Locke, personal identity is defined not by the substance of 
        the body or soul but by the sameness of consciousness – the recollection of past experiences 
        and thoughts. In this paper, I will reconstruct Locke's necessary and sufficient conditions 
        for personal identity by analyzing the structure and reasoning of his thought experiments. 
        I will begin by defining and clarifying necessary terminology, including what he means by person, 
        consciousness, and relations. Next, I will examine his thought experiments to establish the sameness 
        of consciousness as a necessary and sufficient condition for personal identity. Finally, I will 
        evaluate the tenability of the sameness of consciousness by considering its epistemological emphasis
        in the context of Locke’s framework.</p>

        <p>First, I will define and clarify the terms required to understand personal identity.</p>
        <p>	Living organisms are understood in biological terms, relating to the physical body and its life processes. The idea of a living organism “differs from a mass of matter” in that the former is the continued organization of parts required for sustaining the life of the living being while the latter is a “disposition of them as constitutes the parts” (II.xxvii.4). This mechanical definition of human beings enables Locke to draw a clear line between the physical continuity of a human being in contrast to the person. </p>
        <p>	A person, on the other hand, is defined by consciousness: to “remember is to perceive anything with memory, or with a consciousness, that it was known or perceived before” (I.iv.20). Consciousness, then, is the awareness of one's mental processes, including the recognition of past experiences. </p>

        <p>	Locke defines relations as the result of mental processes in which the mind perceives a comparison between ideas “in respect of extent, degrees, time, place, or any other circumstances” (II.xi.4). </p>

        <p>	An identity relation refers to a relation depending on the unchanging nature of the ideas associated with that substance from its recognition to its present consideration (II.xxvii.1). </p>

        <p>	By characterizing relations as links between ideas and the identity relation as a specific type of relation, Locke concentrates on the defining idea of a person. This definition allows him to focus on the connections between concepts that influence self-perception, ultimately implying that identity is about the consistency of the perceived characteristics of an entity/being throughout time. Identity is then established through connections formed in the mind based on perception rather than physical resemblance. As such, Locke combines his definition of identity with his idea of a person to propose the following criterion for personal identity:</p>

        <p><b>Necessary and Sufficient Conditions for Personal Identity:</b> A person establishes personal identity if and only if they possess the sameness of consciousness – the recollection and identification of past thoughts and behaviors as their own.</p>

        <p>	Locke uses thought experiments to explore substance as an alternative condition for personal identity and to conclude that the sameness of consciousness is a necessary and sufficient condition. </p>

        <p>	Locke first demonstrates that the sameness of substance – the soul or body – is not enough to establish personal identity. To do so, Locke considers rebirth and the potential persistence of the soul. He asks whether a soul that has lost all memory of a previous life may be treated as the same person when reincarnated into a different body. According to him, “personal identity reaching no farther than consciousness reaches, a pre-existent spirit not having continued so many ages in a state of silence, must needs make different persons” (II.xxvii.14). Locke leverages this principle to support his claim that if a soul does not have memories from its prior incarnations, it cannot maintain a personal identity between lifetimes. Locke further claims that the essence of a person is a “thinking intelligent being that has reason and reflection, and can consider itself as itself, the same thinking thing in different times and places” (II.xxvii.8). In other words, he implies that in the absence of continuity of consciousness – memories, self-awareness, and the capacity to consider one's past – a soul reincarnated into a new body lacks the fundamental components that establish individual identity. As a result, a person's identity cannot be dependent on their body or soul.</p>

        <p>	To then build an account of personal identity, Locke breaks down the components – soul, body, and consciousness – at play through the Prince and Cobbler thought experiment. Consider the scenario in which the soul of a prince, carrying his consciousness, enters the body of a cobbler. If the consciousness of the prince, with all his memories and experiences, inhibits the cobbler’s body, who is this new individual? Locke argues that this person would be the prince because he has the prince’s consciousness. Suppose we are to hold the prince accountable for his past actions. Then responsibility must fall on the person now inhabiting the cobbler's body, as it is this individual who retains the memories of those actions for which we seek to hold accountable (II.xxvii.15). Locke uses this example to underline that personal identity is fundamentally a matter of perception. It is consciousness that retains personal identity, not the physical body or, as shown before, the sameness of the soul. Hence, Locke uses the idea of accountability of individuals to illustrate consciousness as the defining characteristic of personal identity.</p>

        <p>	I will now discuss the tenability of Locke’s conditions for personal identity. At first glance, Locke’s personal identity seems to fail key aspects of being an identity relation. The key aspects of an identity relation are defined in math as an equivalence relation, which requires reflexivity, transitivity, and symmetry. Locke’s theory does not satisfy the latter two conditions. Transitivity in personal identity would mean that if a person at time T1 is the same as at T2, and T2 is the same as at T3, then T1 should be the same as T3. This property is challenged by Reid’s “Brave Officer” example, in which a boy who is flogged for theft grows up to become an officer. This officer later becomes a general who retains the officer's memories of successfully taking a standard from the enemy but has no recollection of the flogging he experienced as a boy. Despite the officer’s memory of the flogging and the general’s memory of taking the standard, the general does not remember the flogging. Thus, the chain of identity is broken and the example does not fulfill the criterion of transitivity (March 4 Slide 11). Additionally, Locke’s theory fails to be symmetric. Symmetry is the condition that if A is equivalent to B, then B is equivalent to A. The past self’s inability to remember the future self – despite vice versa – leads to a temporal asymmetry. The failure of personal identity to be an equivalence relation challenges consciousness as a criterion for personal identity.</p>

        <p>	To address concerns about whether sameness of consciousness is a definitive criterion for personal identity, we must reevaluate the use of equivalence relations in Locke’s framework. Locke's exploration of personal identity is not primarily concerned with establishing whether two instances of a person are identical in the ordinary sense. Rather, he focuses on the essence of a person, which entails self-recognition over time. This focus centers on the epistemological recognition of identification; it concerns whether a person is aware that they are the same person over time since consciousness – a person's awareness and perception of their thoughts – is the essence of a person. Thus, personal identity depends on this knowledge and self-awareness over time.</p>

        <p>	We can explore Locke’s example of the drunk versus a sober person to see that Locke's discussion is epistemological. In this scenario, Locke questions whether a sober man who is unable to remember his drunken behavior may still be considered the same person as his drunken self. He argues, “The selfsame person was no longer in that man” (II.xxvii.20). Here, the critical aspect is not whether the drunk and the sober states are identical in all respects but whether the sober man recognizes or is consciously aware of the actions performed in his drunken state. Locke clarifies this further by stating, "Person, as I take it, is the name for this self,” pointing out that the person is the self-aware identity that an individual perceives as themselves (II.xxvii.26). Locke's framework for personal identity, then, is fundamentally concerned with the individual’s ability to identify themselves over time using memory and consciousness to connect various states of being. This perspective moves the discussion of what it means to be the same person over time. His objective is centered around understanding personal identity through an epistemological lens, focusing on what we would think of as knowledge of personal identity rather than personal identity, which requires the mathematical properties of an equivalence relation. Therefore, in Locke's conception of the person and relations, the sameness of consciousness is tenable as a necessary and sufficient condition for personal identity.</p>
        
        <h1 id="bibliography">Bibliography</h1>
        <div className="thebibliography">
            Locke, John. An Essay Concerning Human Understanding. Edited by Kenneth P. Winkler, Hackett, 1996.
        </div>
        </BlogPostLayout>
    );
};

export default LockeConsciousness;
