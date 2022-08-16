import './Slide_4.css';
import React, {useRef, useEffect, useState} from 'react'
import FaroCard from "./FaroCard";
import NasaMdaCard from "./NasaMdaCard";

const Slide_1 = () => {
  return (
    <div id="slide-4" className="slideobj">
      <div id='pro-id' className="pro-holder">
       <FaroCard/>
       <NasaMdaCard/>
       </div>
      </div>
  )
}


export default Slide_1