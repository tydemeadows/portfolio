import React, {useRef, useEffect} from 'react'
import { gsap } from 'gsap';
import { TextPlugin } from "gsap/TextPlugin.js";
import './Slide.css';
import ScrollTextObj from "./ScrollTextObj";
import ScrollTextObj2 from "./ScrollTextObj2";
import InfLoopText from "./InfLoopText";

gsap.registerPlugin(TextPlugin);
const Slide_0 = () => {
  const style_prop = {
    display: "block",
    textAlign: "start",
    position: "relative",
    transform: "translate3d(0px, 0px, 0px)",
    fontSize: "5.0rem",
    backgroundColor: "none"
  }

  const textRef1 = useRef();
  const textRef2 = useRef();
  const textRef3 = useRef();

  useEffect( () => {
    // const handleScroll = event => {
    // console.log('window.scrollY', window.scrollY)};
    // window.addEventListener('scroll', handleScroll);
    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
    writeText()
  },[])

  const writeText = async() => {
    await gsap.to(textRef1.current, {duration: .75, text:{value: "DESIGN"}, ease: "none"})
    await gsap.to(textRef2.current, {duration: .75, text:{value: "CREATE"}, ease: "none"});
    await gsap.to(textRef3.current, {duration: .75, text:{value: "INSPIRE"}, ease: "none"});
  }

  return (
    <div url="page1" id="slide-0" class="hero-new__slide">
      <div class='hero-new__slide__shadow'></div>
      <div id="copy-slide-0" class="hero-new__copy sticky-slide">
         <h1 id="s-0-h">
            <div class="parent-line" style={style_prop}>
              <div id="dtag" class="line" style={style_prop} ref={textRef1}></div>
            </div>
            <div class="parent-line" style={style_prop}>
              <div id="ctag" class="line" style={style_prop} ref={textRef2}></div>
            </div>
            <div class="parent-line" style={style_prop}>
              <div id="itag" class="line" style={style_prop} ref={textRef3}></div>
              </div>
          </h1>
        </div>
        <ScrollTextObj/>
      <div id="graphic-slide-0" class="video hero-new__video-frame fadeout"></div>
      </div>
  )
}


export default Slide_0