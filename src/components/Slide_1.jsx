import './Slide_1.css';
import React, {useRef, useEffect, useState} from 'react'
import ProjectCard from "./ProjectCard";
import ImgCard from "./ImgCard";

const Slide_1 = () => {
  const [x, setX] = useState()
  const [y, setY] = useState()
  useEffect(() => {
    const update = (e) => {
      var xp = e.x / window.innerWidth;
      var yp = e.y /window.innerHeight;
      
      if (xp >= 0.12 && xp <=0.88 && yp >= 0.3 && yp <=0.7){
        // console.log(xp.toString() + " | " + yp.toString())
        document.getElementById('s1_bg_img').style.zIndex = 1
        document.getElementById('pro-id').style.top="32vh"
        document.getElementById('pci').style.boxShadow="-5px 10px 20px 5px black"
        // document.getElementsByClassName('pro_card').style.boxShadow="-5px 12px 25px 3px black"
      }
      else {
        document.getElementById('s1_bg_img').style.zIndex = 8
        document.getElementById('pro-id').style.top="30vh"
        document.getElementById('pci').style.boxShadow="0px 0px 0px 0px black"
      }
      setX(e.x)
      setY(e.y)
    }
    window.addEventListener('mousemove', update)
    window.addEventListener('touchmove', update)
    return () => {
      window.removeEventListener('mousemove', update)
      window.removeEventListener('touchmove', update)
    }
  },[setX, setY]);

  return (
    <div id="slide-1" className="slideobj">
      <div id="s1_bg_img">
        <ImgCard/>
      </div>
      <div id='pro-id' className="pro-holder-1">
       <ProjectCard/>
       <ProjectCard/>
       <ProjectCard/>
       </div>
      </div>
  )
}


export default Slide_1