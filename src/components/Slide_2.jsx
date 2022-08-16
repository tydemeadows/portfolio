import './Slide_2.css'; 
import React, {useRef, useEffect, useState} from 'react'
import Skills from "./Skills";
import ExpText from "./ExpText";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

const Slide_2 = () => {
  const h_panels = useRef([]);
  const panelsContainer = useRef();

  const createPanelsRefs = (panel, index) => {
    h_panels.current[index] = panel;
  };

  useEffect(() => {
    // let sections = gsap.utils.toArray(".horz_panel");

    // gsap.to(sections, {
    //   xPercent: -100 * (sections.length - 1),
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: ".container",
    //     pin: true,
    //     scrub: 1,
    //     snap: 1 / (sections.length - 1),
    //     // base vertical scrolling on how wide the container is so it feels more natural.
    //     end: "+=3500",
    //   }
    // });
  }, []);

  return (
    <div href="page2" id="slide-2" className="slideobj container" ref={panelsContainer}>

        <section className="horz_panel" ref={(e) => createPanelsRefs(e, 0)}>
          <ExpText/>
          <Skills/>
          </section>
        {/*<section className="horz_panel" ref={(e) => createPanelsRefs(e, 1)}>
          <h1>K-SCIENCES</h1>
          </section>
        <section className="horz_panel" ref={(e) => createPanelsRefs(e, 2)}>
          <h1>FARO</h1>
          </section>
        <section className="horz_panel" ref={(e) => createPanelsRefs(e, 3)}>
          <h1>NASA / MDA</h1>
          </section>*/}
        </div>

  )
}


export default Slide_2