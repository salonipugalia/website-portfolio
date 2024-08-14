import React, { useEffect } from 'react'
import './aboutcirc.css'


function aboutcirc() {

useEffect(()=>{
    const text =document.querySelector('.text h3');
    text.innerHTML = text.innerText.split("").map(
        (char ,i)=>
            `<span style="transform:rotate(${i*5.5}deg)">${char}</span>`
    ).join("")
})


  return (
    <div className='circ'>
        <div className='circle'>
            <div className="logo"></div>
            <div className="text">
                <h3>AboutMe-AboutMe-AboutMe-AboutMe-</h3>
            </div>

        </div>

    </div>
  )
}

export default aboutcirc