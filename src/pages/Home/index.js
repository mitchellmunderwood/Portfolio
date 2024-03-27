/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './index.css';
import Body from '../../components/Body/index';

function Home() {
  return (
    <Body>
      <h1 className="home-title">Mitchell Underwood</h1>
      <p className="home-desc">
        Hello, I'm Mitchell Underwood, a driven software engineer based in Raleigh, NC, with a proven track record of
        delivering impactful solutions. At Shopify, I spearheaded the development of RESTful API microservices
        leveraging TypeScript and Node.js, resulting in significant reductions in order fulfillment time for our
        clients. My meticulous approach to project scoping and scheduling ensured seamless collaboration with
        stakeholders, enhancing product requirements refinement and development efficiency. Additionally, my tenure at
        ResolveX honed my full-stack expertise, where I fortified frontend and backend systems for robust security and
        user experience. I led a dynamic team in crafting PolitiCandid, a cutting-edge political opinion matching
        application, showcasing my leadership and technical prowess. Let's connect to discuss how my comprehensive skill
        set, spanning from JavaScript and React to Docker and GCP, can drive success for your team.
      </p>
    </Body>
  );
}

export default Home;
