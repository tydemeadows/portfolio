import React, {useRef, useEffect, useState} from 'react'
import ProjectCard from "./ProjectCard";

const Slide_1 = () => {
  const style_prop = {
    display: "block",
    textAlign: "start",
    position: "relative",
    transform: "translate3d(0px, 0px, 0px)",
    backgroundColor: "#cecece"
  }

  const [windowHeight, setWindowHeight] = useState([])
  const [windowWidth, setWindowWidth] = useState([])
  const ref = useRef(null);
  console.log(ref.current);
  useEffect( () => {
    const element = ref.current;
    console.log(element);
    const windowSize = getWindowSize();
    console.log(windowSize);
  },[])

  const getWindowSize = () => {
    const {innerWidth, innerHeight} = window;
    setWindowWidth(innerWidth);
    setWindowHeight(innerHeight);
    return {innerWidth, innerHeight};
  }

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