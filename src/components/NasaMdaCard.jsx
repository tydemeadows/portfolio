import './Slide_4.css';
import React, { Component } from 'react'
import {Card, Button, Form} from 'react-bootstrap';
const NasaMdaCard = () => {
  return (
    <>
    <div className="card bg-black text-white exp-card">
      <div className="card-header ch4">
        <h1>NASA / MDA</h1>
        <h2>Engineer</h2>
      </div>
      <div className="card-body cb4">
        <h1>Skills:</h1>
        <h4>Advanced Data Analytics</h4>
        <h4>Hardware Test Planning & Execution</h4>
        <h4>Advanced Instrumentation</h4>
        <h4>Large Data Analytics via Matlab / Python</h4>
      </div>
    </div>  
  </>    
  )
  
}


export default NasaMdaCard