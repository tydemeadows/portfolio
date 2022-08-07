import React, {useRef, useEffect} from 'react'
import Skills from "./Skills";
import ExpText from "./ExpText";
const Slide_2 = () => {
  const style_prop = {
    display: "block",
    textAlign: "start",
    position: "relative",
    transform: "translate3d(0px, 0px, 0px)",
    backgroundColor: "#cecece"
  }

  const scrollevt = useRef(null);

  useEffect( () => {
    const se = scrollevt.current;
    console.log(se);
    const sel = document.querySelector('.scrolling-wrapper')
    console.log(sel)
    // const handleScroll = event => {
    // console.log('window.scrollY', window.scrollY)};
    se.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        se.scrollLeft += evt.deltaY;
    });
    // se.addEventListener('scroll', handleScroll);
    // return () => {
    //   se.removeEventListener('scroll', handleScroll);
    // };
    // const handleScroll = event => {
    //   console.log('window.scrollY', window.scrollY)
    // };
    // window.addEventListener('scroll', handleScroll);
    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  },[])

  return (
    <div href="page2" id="slide-2" class="hero-new__slide">
      <div class='hero-new__slide__shadow'></div>
         <div class="scrolling-wrapper" ref={scrollevt}>
            <section>
              <ExpText/>
              <Skills/>
            </section>
            <section>
              <h1>MDA</h1>
            </section>
            <section>
              <h1>FARO</h1>
            </section>
            <section>
              <h1>K-SCIENCES</h1>
            </section>
          </div>
        <div id="graphic-slide-2" cladd="video hero-new__video-frame fadeout"></div>
      </div>
  )
}


export default Slide_2