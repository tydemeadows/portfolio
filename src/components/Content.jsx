import React, { Component, useEffect, useRef } from 'react';
import './Content.css';
import './root.css'; 
import Slide_0 from "./Slide_0";
import Slide_1 from "./Slide_1";
import Slide_2 from "./Slide_2";
import Slide_3 from "./Slide_3";
import Slide_4 from "./Slide_4";
import Slide_5 from "./Slide_5";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

const Content = () => {

  useEffect(() =>{
    let panels = gsap.utils.toArray(".panel"),
    scrollTween;

    function goToSection(i) {
      scrollTween = gsap.to(window, {
        scrollTo: {y: i * window.innerHeight, autoKill: false},
        duration: 0.75,
        onComplete: () => scrollTween = null,
        overwrite: true
      });
    }

    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top bottom",
        end: "+=200%",
        onToggle: self => self.isActive && !scrollTween && goToSection(i)
      });
    });

    // just in case the user forces the scroll to an inbetween spot (like a momentum scroll on a Mac that ends AFTER the scrollTo tween finishes):
    ScrollTrigger.create({
      start: 0, 
      end: "max",
      snap: 1 / (panels.length - 1)
    })
  })
  
  return (
    <>
    <section className="panel" >
      <Slide_0/>
    </section>
    <section className="panel" >
      <Slide_1/>
    </section>
    <section className="panel" >
      <Slide_2/>
    </section>
    <section className="panel" >
      <Slide_3/>
    </section>
    <section className="panel" >
      <Slide_4/>
    </section>
    </>
  )
}


export default Content