import React, { useState, useEffect, useRef, useCallback } from 'react'
import './InfLoop.css';

const InfiniteLooper = (speed, direction, children) =>  {
  const [looperInstances, setLooperInstances] = useState(1);
  const outerRef = useRef<HTMLDivElement>(null);
  console.log(outerRef)
  const innerRef = useRef<HTMLDivElement>(null);

  const resetAnimation = () => {
    if (innerRef?.current) {
      innerRef.current.setAttribute("data-animate", "false");

      setTimeout(() => {
        if (innerRef?.current) {
          innerRef.current.setAttribute("data-animate", "true");
        }
      }, 10);
    }
  }

  const setupInstances = useCallback(() => {
    if (!innerRef?.current || !outerRef?.current) return;

    const { width } = innerRef.current.getBoundingClientRect();

    const { width: parentWidth } = outerRef.current.getBoundingClientRect();

    const widthDeficit = parentWidth - width;

    const instanceWidth = width / innerRef.current.children.length;

    if (widthDeficit) {
      setLooperInstances(
        looperInstances + Math.ceil(widthDeficit / instanceWidth) + 1
      );
    }

    resetAnimation();
  }, [looperInstances]);
  
  
  /*
    6 instances, 200 each = 1200
    parent = 1700
  */

  useEffect(() => setupInstances(), [setupInstances]);

  useEffect(() => {
    window.addEventListener("resize", setupInstances);

    return () => {
      window.removeEventListener("resize", setupInstances);
    };
  }, [looperInstances, setupInstances]);

  return (
    <div className="looper" ref={outerRef}>
      <div className="looper__innerList" ref={innerRef} data-animate="true">
        {[...Array(looperInstances)].map((_, ind) => (
          <div
            key={ind}
            className="looper__listInstance"
            style={{
              animationDuration: `${speed}s`,
              animationDirection: direction === "right" ? "reverse" : "normal",
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
    );
}



const InfLoopText = () => {
  return (
    <>
      <InfiniteLooper speed="4" direction="right">
        <div id="s-0-vert-text">
          <h1>PYTHON</h1>
          <h1>HTML, CSS</h1>
          <h1>JAVA SCRIPT</h1>
          <h1>SQL</h1>
          <h1>WEB3.0, SOLIDITY</h1>
          <h1>BACKEND</h1>
          <h1>FRONTEND</h1>
        </div>
      </InfiniteLooper>
    </>
    )
}

export default InfLoopText
// ReactDOM.render(<App />, document.getElementById("root"));
