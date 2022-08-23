import './Slide_3.css';
import React, { Component } from 'react'
import {Card, Button, Form} from 'react-bootstrap';
const KsciCard = () => {
  return (
    <>
    <div className="card bg-black text-white exp-card">
      <div className="card-header">
        <h1>K Sciences</h1>
        <h2>Software Developer / Project Manager</h2>
      </div>
      <div className="card-body">
        <div className="icard">
          <div className="card-body">
            <h1>Project Highlights:</h1>
            <h4>Python Desktop Applications (5+)</h4>
            <h5>Data Vision System for GeneCapture with imaging Analytics</h5>
            <h5>Magnetic Field Sensor Application</h5>
            <h5>Blood Velocity Sensor Application</h5>
          </div>
        </div>
      </div>
    </div>  
  </>    
  )
  
}


export default KsciCard