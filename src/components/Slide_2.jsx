import React, {useRef, useEffect, useState} from 'react'
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
  const [windowSize, setWindowSize] = useState(getWindowSize())
  const [scrollTrack, setScrollTrack] = useState(0)
  const [pageLoc, setPageLoc] = useState(0)
  var lastScrollPos = 0;
  const scrollevt = useRef(null);
  useEffect( () => {
    const se = scrollevt.current;
    const sel = document.querySelector('.scrolling-wrapper')
    se.addEventListener("wheel", (evt) => {
      const ws = getWindowSize();
      setPageLoc(window.scrollY);
      console.log(pageLoc);
      setScrollTrack(se.scrollLeft + evt.deltaY);
      console.log(se.scrollLeft);
      console.log(evt.deltaY);
      console.log(scrollTrack);
      evt.preventDefault();
      const pid = Math.round(scrollTrack/ws.innerWidth)
      console.log(pid)
      console.log(se.scrollLeft)
      if (evt.deltaY > 0) {
        console.log('going right')
        if (pid === 0){
          se.scrollLeft += ws.innerWidth/2;
        }
        else {
          se.scrollLeft += ws.innerWidth/2;
        }
      }
      else {
        se.scrollLeft -= ws.innerWidth/2;
        if (evt.deltaY < 0 && se.scrollLeft === 0){
          window.scrollTo({
              top: windowSize.innerHeight,
              behavior: "smooth",
          });
        }
      }
    });

    const handleScroll = event => {
      const ws = getWindowSize();
      const sc = window.scrollY;
      const dir = sc-lastScrollPos;
      const sid = Math.round(sc/ws.innerHeight);
      console.log(sid);
      // se.scrollLeft = pid * ws.innerWidth;
      console.log('window.scrollY', window.scrollY);
      if (sid <= 1){
        console.log('first two pages')
        if (dir > 0){
          const s1value = ws.innerHeight*1 - ws.innerHeight*0.75
          const s2value = ws.innerHeight*2 - ws.innerHeight*0.9
          if (window.scrollY > 0 && window.scrollY < ws.innerWidth*.6){
            if (window.scrollY > (s1value)){
              window.scrollTo({top: ws.innerHeight*1})
            }
          }
          else if (window.scrollY > (s2value)){
            window.scrollTo({top: ws.innerHeight*2,behavior:"smooth"})
          }
          if ((sid*ws.innerHeight) + window.scrollY > ((sid*ws.innerHeight) - ws.innerHeight/2)){
            // window.scrollY += sid * ws.innerHeight
            // window.scrollTo({
            //   top: sid * ws.innerHeight
            // })
          }
        }
        else {
          if (window.scrollY <= ws.innerHeight*0.75){
            window.scrollTo({
              top: 0,
              behavior: "smooth",
          });
          }
        }
      }
      // window.scrollY = ws.innerWidth;
      // if (sc-lastScrollPos) > 0 {

      // }
      // if (window.scrollY > 700) {
        // window.scrollTo({
        //     top: sid * ws.innerHeight,
        //     behavior: "smooth",
        // });
      // }
      lastScrollPos = sc;
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

  return (
    <div href="page2" id="slide-2" class="hero-new__slide">
      <div class='hero-new__slide__shadow'></div>
         <div class="scrolling-wrapper" ref={scrollevt}>
            <section>
              <ExpText/>
              <Skills/>
            </section>
            <section>
              <h1>K-SCIENCES</h1>
            </section>
            <section>
              <h1>FARO</h1>
            </section>
            <section>
              <h1>NASA / MDA</h1>
            </section>
          </div>
        <div id="graphic-slide-2" cladd="video hero-new__video-frame fadeout"></div>
      </div>
  )
}


export default Slide_2