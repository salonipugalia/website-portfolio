import React from 'react';
import linkedin from '../images/linkedin.svg';
import github from '../images/github.png';
import leetcode from '../images/leetcode.svg';
import './socials.css'; // Import the CSS for Socials component

function Socials() {
  return (
    <div id="socials">
     <a href='https://www.linkedin.com/in/saloni-pugalia-228559220/'><img src={linkedin} id="pics" alt="LinkedIn" /></a> 
     <a href='https://github.com/salonipugalia'><img src={github} id="pics" alt="GitHub" /></a> 
     <a href='https://leetcode.com/u/saloni_pugalia/'><img src={leetcode} id="pics" alt="LeetCode" /></a> 
    </div>
  );
}

export default Socials;
