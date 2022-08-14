import React , { useEffect , useState } from 'react';
import './InfLoop.css';

const ScrollTextObj = (props, data) => {
  const speed = 9;
  const s2 = 5;
  const direction = "right";
  const [opac, setOpacity] = useState("0.0");
  const style_prop = {
    opacity: opac
  }

  useEffect(() => {
    loop()
    // let opv = "0.0"
    // for (let i = 0; i < 8; i++) {
    //   setOpacity(opv)
    //   opv = (parseFloat(opv) + 0.02).toPrecision(2).toString()
    //   console.log(opv)
    // }    
  }, [])

  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))

  const loop = async () => {
    let opv = "0.0"
    for (let i = 0; i < 8; i++) {
      setOpacity(opv)
      opv = (parseFloat(opv) + 0.02).toPrecision(2).toString()
      await wait(300)
    }
  }

  return (
    <>
    <div className="v-text" style={style_prop}>
      <span class="s-text">CSS</span>
      <br/>
      <span class="s-text">SQL</span>
      <br/>
      <span class="s-text">HTML</span>
      <br/>
      <span class="s-text">NODEJS</span>
      <br/>
      <span class="s-text">WEB3.JS</span>
      <br/>
      <span class="s-text">PYTHON</span>
      <br/>
      <span class="s-text">REACTJS</span>
      <br/>
      <span class="s-text">SOLIDITY</span>
      <br/>
      <span class="s-text">JAVASCRIPT</span>
      <br/>
    </div>
    {/*<div id="s-1-vert-text" className="looper__text"
      style={{
              animationDuration: `${s2}s`,
              animationDirection: direction === "right" ? "reverse" : "normal",
            }}>
      <h1>SQL</h1>
      <h1>WEB3.0, SOLIDITY</h1>
      <h1>BACKEND</h1>
      <h1>FRONTEND</h1>
    </div>*/}
    </>    
  )
  
}


export default ScrollTextObj







// <div className="looper">
//       <div className="looper-one">
//         <span class="s-text">PYTHON</span>
//         <span class="s-text">REACTJS</span>
//         <span class="s-text">JAVASCRIPT</span>
//       </div>
//       <div className="looper-two">
//         <span class="s-text">SOLIDITY</span>
//         <span class="s-text">WEB3 STORAGE</span>
//         <span class="s-text">WEB3.js</span>
//       </div>
//       <div className="looper-three">
//         <span class="s-text">SQL</span>
//         <span class="s-text">HTML</span>
//         <span class="s-text">CSS</span>
//       </div>
//     </div>