import './Slide_1.css';
import React, { Component } from 'react';
import {Card, Button, Form} from 'react-bootstrap';
import hive_img from "./hive_fab_screenshot.png";
const HiveCard = () => {
  return (
    <>
    <div id="pci" className="card bg-black text-white h_card">
      <div id='hive_img_1'>
          <a href="https://hive-fire-pro.web.app/" target="_blank">
          <img src={hive_img} id="hive_bg_img" className="pastbg" />
          </a>
        </div>
    </div>  
  </>    
  )
  
}


export default HiveCard