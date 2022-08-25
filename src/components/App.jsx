import React, { Component } from 'react'
import {Link, BrowserRouter as Router, Route, Routes, Outlet, useLocation} from 'react-router-dom'
import './App.css';
import Navbar from "./Navbar";
import Content from "./Content";

class App extends Component {

  render() {
    return (
      <div id="__nuxt">
        <div id="__layout">
          <div className="theme-dark">
           {/* <Navbar />*/}
            <div class="preloader disabled"></div>
            <div>
              <Router>
                <Routes>
                  <Route path="/" element={<Content />}/>
                  <Route path="/slide" element={<Content />}/>
                </Routes>
              </Router>
            </div>
          </div>
        </div>
      </div>
          
    );
  }
}



export default App

