import React, { useEffect } from 'react';
import './mainhome.css';

import SplitType from 'split-type';
import gsap from 'gsap';

function mainhome() {
  useEffect(()=>{

    const mytext =new SplitType('#intro')

    gsap.to('.char',{
      y:0,
      stagger:0.05,
      delay:0.2,
      duration:0.1
    })
  })
  return (
    <div>
         <canvas id="canvas1"></canvas>
      <div id="overlay1">
        <div id='intro'>
          <p className='home'>Hi, </p>
          <p className='home'> my name is Saloni!</p>
          <br></br>
          </div>
          
        
      </div>
   
    </div>
  )
}

export default mainhome