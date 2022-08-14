import './Slide_2.css'; 
import React, {useRef, useEffect, useState} from 'react'
import Skills from "./Skills";
import ExpText from "./ExpText";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

const Slide_2 = () => {
  const panels = useRef([]);
  const panelsContainer = useRef();

  const createPanelsRefs = (panel, index) => {
    panels.current[index] = panel;
  };

  // useEffect(() => {
  //   const totalPanels = panels.current.length;

  //   gsap.to(panels.current, {
  //     xPercent: -100 * (totalPanels - 1),
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: panelsContainer.current,
  //       pin: true,
  //       scrub: 1,
  //       snap: 1 / (totalPanels - 1),
  //       // base vertical scrolling on how wide the container is so it feels more natural.
  //       end: () => "+=" + panelsContainer.current.offsetWidth
  //     }
  //   });
  // }, []);
  // let maxWidth = 0;

  // const getMaxWidth = () => {
  //   maxWidth = 0;
  //   sections.forEach((section) => {
  //     maxWidth += section.offsetWidth;
  //   });
  // };
  // getMaxWidth();
  // let sections = gsap.utils.toArray(".horz_panel");

  // gsap.to(sections, {
  //   xPercent: -100 * (sections.length - 1),
  //   ease: "none",
  //   scrollTrigger: {
  //     trigger: ".container",
  //     pin: true,
  //     scrub: 1,
  //     snap:{
  //       snapTo: 1 / (sections.length - 1),
  //       inertia: false,
  //       duration: {min: 0.1, max: 0.1}
  //     },
  //     // base vertical scrolling on how wide the container is so it feels more natural.
  //     end: "+=3500",
  //   }
  // });

  // ScrollTrigger.create({
  //   snap: 1/2// snap whole page to the closest section!
  // });
  return (
    <div href="page2" id="slide-2" className="slideobj container" ref={panelsContainer}>
      <div className="horz_scroll" >
        <section className="horz_panel" ref={(e) => createPanelsRefs(e, 0)}>
          <ExpText/>
          <Skills/>
          </section>
        <section className="horz_panel" ref={(e) => createPanelsRefs(e, 1)}>
          <h1>K-SCIENCES</h1>
          </section>
        <section className="horz_panel" ref={(e) => createPanelsRefs(e, 2)}>
          <h1>FARO</h1>
          </section>
        <section className="horz_panel" ref={(e) => createPanelsRefs(e, 3)}>
          <h1>NASA / MDA</h1>
          </section>
        </div>
      </div>
  )
}


export default Slide_2