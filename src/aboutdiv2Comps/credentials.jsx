import React from 'react';
import './credentials.css'; // Import the CSS file where your animation is defined

function Credentials() {
  return (
    
    <div className='grades'>
      <p className="credential">Class X [2018]      : <span className="reveal"> 93%</span></p>
      <p className="credential">Class XII [2020]    : <span className="reveal"> 93%</span></p>
      <p className="credential">BTech [2021-2025]   : <span className="reveal">9.15 (cgpa)[over all]</span></p>
      <p className="credential">5th Semester[recent]: <span className="reveal">9.53 (cgpa)</span></p>
    </div>
  );
}

export default Credentials;
