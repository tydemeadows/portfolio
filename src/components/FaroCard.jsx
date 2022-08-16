import './Slide_4.css';
import React, { Component } from 'react'
import {Card, Button, Form} from 'react-bootstrap';
const FaroCard = () => {
  return (
    <>
    <div className="card bg-black text-white exp-card">
      <div className="card-header">
        <h1>FARO</h1>
        <h1>Account Manager</h1>
      </div>
      <div className="card-body">
        <div className="icard">
          <div className="card-body">
            <h1>Skills:</h1>
            <h4>Business to Business Sales</h4>
            <h4>Communicating Customer Needs</h4>
            <h4>Metrology</h4>
            <h4>Time Management</h4>
            <h4>Self Discipline</h4>
            <h4>Intentional Tasking</h4>
          </div>
        </div>
      </div>
    </div>  
  </>    
  )
  
}


export default FaroCard