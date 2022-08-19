import './Slide_1.css';
import React, {useRef, useEffect, useState} from 'react'
import ProjectCard from "./ProjectCard";
import ImgCard from "./ImgCard";

const Slide_1 = () => {
  return (
    <div id="slide-1" className="slideobj">
      <div id="s1_bg_img">
        <ImgCard/>
      </div>
      <div id='pro-id' className="pro-holder">
       <ProjectCard/>
       <ProjectCard/>
       <ProjectCard/>
       </div>
      </div>
  )
}


export default Slide_1