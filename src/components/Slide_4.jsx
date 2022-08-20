import './Slide_4.css';
import React, {useRef, useEffect, useState} from 'react'
import FaroCard from "./FaroCard";
import NasaMdaCard from "./NasaMdaCard";
import faro_img from "./FARO_transparent_bg_w700px.png";
import nasa_img from "./nasa-logo-white_fill.png";

const Slide_4 = () => {
  return (
    <div id="slide-4" className="slideobj">
      <div id='inlay'>
      <div id='job_img_1'>
          <a href="https://www.faro.com/en" target="_blank">
          <img src={faro_img} id="faro_bg_img" className="pastbg" />
          </a>
        </div>
      <div id='job_img_2'>
          <a href="https://www.nasa.gov/" target="_blank">
          <img src={nasa_img} id="nasa_bg_img" className="pastbg" />
          </a>
        </div>
        <div id='pro-id' className="pro-holder">
          <FaroCard/>
          <NasaMdaCard/>
        </div>
      </div>
    </div>
  )
}


export default Slide_4