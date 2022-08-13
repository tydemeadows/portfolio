import React, {useRef, useEffect, useState} from 'react'
import Skills from "./Skills";
import ExpText from "./ExpText";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

const Slide_2 = () => {
  let sections = gsap.utils.toArray(".horz_panel");

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".container",
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      // base vertical scrolling on how wide the container is so it feels more natural.
      end: "+=3500",
    }
  });

  ScrollTrigger.create({
    snap: 1/2// snap whole page to the closest section!
  });
  return (
    <div href="page2" id="slide-2" class="slideobj container">
      <div class="horz_scroll" >
        <section class="horz_panel">
          <ExpText/>
          <Skills/>
          </section>
        <section class="horz_panel">
          <h1>K-SCIENCES</h1>
          </section>
        <section class="horz_panel">
          <h1>FARO</h1>
          </section>
        <section class="horz_panel">
          <h1>NASA / MDA</h1>
          </section>
        </div>
      </div>
  )
}


export default Slide_2