import './Slide_1.css';
import React, { Component } from 'react';
import {Card, Button, Form} from 'react-bootstrap';
// import hive_img from "./hive_fab_screenshot.png";
import hive_img from "./Screenshot hivefab.png";

const HiveCard = () => {
  return (
    <>
    <div id="pci" className="card bg-black text-white h_card">
      <div id='hive_img_1'>
          <a href="https://hivefab.com/" target="_blank">
          <img src={hive_img} id="hive_bg_img" className="pastbg" />
          </a>
        </div>
    </div>  
  </>    
  )
  
}


export default HiveCard

// https://hive-fire-app.firebaseapp.com/home

// https://hive-fire-pro.web.app/