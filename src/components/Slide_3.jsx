import './Slide_3.css';
import React, {useRef, useEffect, useState} from 'react'
import ProjectCard from "./ProjectCard";
import ksci_img from "./ksci_clean.png";

const Slide_3 = () => {
  return (
    <div id="slide-3" className="slideobj">
      <div id='job_img_3'>
          <a href="http://www.k-sciences.com/" target="_blank">
          <img src={ksci_img} id="ksci_bg_img" className="pastbg" />
          </a>
        </div>
      <div id='pro_id_3' className="pro_holder_3">
       <ProjectCard/>
       <ProjectCard/>
       <ProjectCard/>
       </div>
      </div>
  )
}


export default Slide_3