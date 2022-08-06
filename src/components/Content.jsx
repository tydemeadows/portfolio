import React, { Component } from 'react';
// import { HashLink } from 'react-router-hash-link';
import './Content.css';
import './root.css'; 
import Slide_0 from "./Slide_0";
import Slide_1 from "./Slide_1";
import Slide_2 from "./Slide_2";


class Content extends Component {

  render() {
    return (
      <div  className="page home-page">
        <div className="hero-new hero-sticky">
          <div className="hero-new__slides">
              <Slide_0/>
              <Slide_1/>
              <Slide_2/>
          </div>
        </div>
      </div>
    )
  }
}


export default Content