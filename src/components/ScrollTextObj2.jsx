import React , { useEffect , useState } from 'react';
import './InfLoop.css';

const ScrollTextObj2 = () => {

  const [posData, setPosData] = useState([]);

  // useEffect(() => {
  //   console.log('useEffect loop')
  //   const interval = setInterval(() => {
  //     console.log('This will run every second!');
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [])

  const s2 = 8;
  const direction = "reverse";
  return (
    <>
    <div class="ticker">
      <div class="ticker-title">
        <span class="s-text">Breaking News</span>
        <span>Breaking News</span>
        <span>Breaking News</span>
        <span>Breaking News</span>
        <span>Breaking News</span>
        <span>Breaking News</span>
        <span>Breaking News</span>
        <span>Breaking News</span>
        <span>Breaking News</span>
        <span>Breaking News</span>
      </div>
      <div class="ticker-news">
        <span>
          <span class="s-text">Criminals attempt brazen robbery at downtown bank...</span>
          <span class="s-text">Citizens are encouraged to use alternate routes during rush hour...</span>
        </span>
      </div>
      <div class="ticker-third">
          <span class="v-text" >REACTJS PYTHON JAVASCRIPT HTML CSS SOLIDITY SQL...</span>
          <span >REACTJS PYTHON JAVASCRIPT HTML CSS SOLIDITY SQL...</span>
      </div>
    </div>
    </>    
  )
  
}


export default ScrollTextObj2