import React, { useState } from 'react';
import './aboutdiv2.css';
import creds from "../images/credentials.png";
import skills from "../images/skills.png";
import volun from "../images/volunteer.png";
import Credentials from '../aboutdiv2Comps/credentials';
import Skills from '../aboutdiv2Comps/skills';
import Volunteering from '../aboutdiv2Comps/volunteering';

function AboutDiv2() {
  const [selected, setSelected] = useState('skills');

  const handleImageClick = (section) => {
    setSelected(section);
  };

  const renderContent = () => {
    switch (selected) {
      case 'credentials':
        return (
          <div id="con" className="content-block">
            <Credentials />
          </div>
        );
      case 'skills':
        return (
          <div id="con" className="content-block">
            <Skills />
          </div>
        );
      case 'volunteering':
        return (
          <div id="con" className="content-block">
            <Volunteering />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className='about-div second'>
      <div className='clicks'>
        <div
          className={`img-containerabt ${selected === 'credentials' ? 'selected' : ''}`}
          onClick={() => handleImageClick('credentials')}
        >
          <img src={creds} className='picabt' alt="Credentials" />
          <h6>credentials</h6>
        </div>
        <div
          className={`img-containerabt ${selected === 'skills' ? 'selected' : ''}`}
          onClick={() => handleImageClick('skills')}
        >
          <img src={skills} className='picabt' alt="Skills" />
          <h6>skills</h6>
        </div>
        <div
          className={`img-containerabt ${selected === 'volunteering' ? 'selected' : ''}`}
          onClick={() => handleImageClick('volunteering')}
        >
          <img src={volun} className='picabt' alt="Volunteering" />
          <h6>volunteering</h6>
        </div>
      </div>
      <div className='content2'>
        {renderContent()}
      </div>
    </div>
  );
}

export default AboutDiv2;
