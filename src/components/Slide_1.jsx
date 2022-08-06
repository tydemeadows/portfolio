import React from 'react'
import {Card, Button, Form} from 'react-bootstrap';
import ProjectCard from "./ProjectCard";
const Slide_1 = () => {
  const style_prop = {
    display: "block",
    textAlign: "start",
    position: "relative",
    transform: "translate3d(0px, 0px, 0px)",
    backgroundColor: "#cecece"
  }

  return (
    <div id="slide-1" class="hero-new__slide">
      <div class='hero-new__slide__shadow'></div>
      <div id="copy-slide-1" class="hero-new__copy sticky-slide">
        <div id='pro-id' className="pro-holder">
         <ProjectCard/>
         <ProjectCard/>
         <ProjectCard/>
         </div>
      </div>
      <div id="graphic-slide-1" cladd="video hero-new__video-frame fadeout"></div>
      </div>
  )
}


export default Slide_1