import './Slide_3.css';
import React, {useRef, useEffect, useState} from 'react'
import ProjectCard from "./ProjectCard";
import KsciCard from "./KsciCard";
import ksci_img from "./ksci_clean.png";
import s3_bg_img from "./image-from-rawpixel-id-3848333-original.png"

const Slide_3 = () => {
  return (
    <div id="slide-3" className="slideobj">
      <div id="bg3">
        <img src={s3_bg_img} id="3_bg_img"  />
      </div>
      <div id='job_img_3'>
        <a href="http://www.k-sciences.com/" target="_blank">
          <img src={ksci_img} id="ksci_bg_img"  />
        </a>
        </div>
      <div id='k_header'>
        <h2>Software Developer / Project Manager</h2>
        </div>
    <KsciCard/>
    <ProjectCard/>
    </div>
  )
}


export default Slide_3