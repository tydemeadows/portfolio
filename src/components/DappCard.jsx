import './Slide_1.css';
import React, { Component } from 'react';
import {Card, Button, Form} from 'react-bootstrap';
import dapp_img from "./dapp_2.png";
const DappCard = () => {
  return (
    <>
    <div id="dci" className="card bg-black text-white h_card">
      <div id='dapp_img_1'>
          <a href="https://github.com/tydemeadows/dapp-capstone/tree/main/blockchain-developer-bootcamp" target="_blank">
          <img src={dapp_img} id="dapp_bg_img" className="pastbg" />
          </a>
        </div>
    </div>  
  </>    
  )
  
}


export default DappCard