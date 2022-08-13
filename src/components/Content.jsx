import React, { Component } from 'react';
import './Content.css';
import './root.css'; 
import Slide_0 from "./Slide_0";
import Slide_1 from "./Slide_1";
import Slide_2 from "./Slide_2";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

const Content = () => {
  gsap.utils.toArray(".panel").forEach((panel, i) => {
    ScrollTrigger.create({
      trigger: panel,
      start: "top top", 
      pin: true, 
      pinSpacing: false 
    });
  });

  ScrollTrigger.create({
    snap: 1/2// snap whole page to the closest section!
  });
  return (
    <div  className="page home-page">
      <Slide_0/>
      <section class="panel">
        <Slide_1/>
      </section>
      <section class="panel">
        <Slide_2/>
      </section>
    </div>
  )
}


export default Content