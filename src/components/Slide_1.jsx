import React, {useRef, useEffect, useState} from 'react'
import ProjectCard from "./ProjectCard";

const Slide_1 = () => {
  return (
    <div id="slide-1" class="slideobj">
      <div id='pro-id' className="pro-holder">
       <ProjectCard/>
       <ProjectCard/>
       <ProjectCard/>
       </div>
      </div>
  )
}


export default Slide_1