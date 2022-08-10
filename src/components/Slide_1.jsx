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
    // const handleScroll = event => {
    // console.log('window.scrollY', window.scrollY)};
    // window.addEventListener('scroll', handleScroll);
    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
    // console.log(se);
    // se.addEventListener("wheel", (evt) => {
    //   console.log(evt.deltaY);
    //   evt.preventDefault();
    //   if (evt.deltaY < 0 ){
    //     console.log('in y')
    //     window.scrollTo({
    //         top: 0,
    //         behavior: "smooth",
    //     });
    //   }
    // });
  },[])

  const getWindowSize = () => {
    const {innerWidth, innerHeight} = window;
    setWindowWidth(innerWidth);
    setWindowHeight(innerHeight);
    return {innerWidth, innerHeight};
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