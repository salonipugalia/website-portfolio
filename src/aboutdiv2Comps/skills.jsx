import React from 'react';
import './skills.css';
import { useEffect } from 'react';
function Skills() {
  useEffect(() => {
    const texts = [
      `JAVA`,
      `HTML`,
      `CSS`,
      `JavaScript`,
      `React`,
      `NodeJS`,
      `Express`,
      `MongoDB`,
      `MySQL`,
      `Python`
    ];
  
    const elements = document.querySelectorAll('.sk');
  
    let textIndex = 0;
  
    const typeNextWord = () => {
      if (textIndex < texts.length) {
        const currentElement = elements[textIndex];
        const currentText = texts[textIndex];
        currentElement.innerHTML = currentText; // Show the entire word at once
        textIndex++;
        setTimeout(typeNextWord, 500); // Adjust delay between words here
      }
    };
  
    typeNextWord(); // Start showing the first word
  
  }, []);





  return (
    <div className='skillsec'>
      <div id="circle-orbit-container">
        <div id="inner-orbit">
          <div className="inner-orbit-circles">
            <div className="skill-planet skill-planet1">
              <span><img id="express" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="express" /></span>
            </div>
            <div className="skill-planet skill-planet2">
              <span><img id="nodejs" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" alt="nodejs" /></span>
            </div>
            <div className="skill-planet skill-planet3">
              <span><img id="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" /></span>
            </div>
            <div className="skill-planet skill-planet4">
              <span><img id="mongodb" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" /></span>
            </div>
           
          </div>
        </div>
        
        <div id="middle-orbit">
          <div className="middle-orbit-circles">
            <div className="skill-planet skill-planet6">
              <span><img id="html5" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="html5" /></span>
            </div>
            <div className="skill-planet skill-planet7">
              <span><img id="css3" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="css3" /></span>
            </div>
            <div className="skill-planet skill-planet8">
              <span><img id="javascript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript" /></span>
            </div>
            <div className="skill-planet skill-planet9">
              <span><img id="typescript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="typescript" /></span>
            </div>
           
            <div className="skill-planet skill-planet11">
              <span><img id="sass" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="sass" /></span>
            </div>
          </div>
        </div>

        <div id="outer-orbit">
          <div className="outer-orbit-circles">
            <div className="skill-planet skill-planet12">
              <span><img id="python" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="python" /></span>
            </div>
            <div className="skill-planet skill-planet13">
              <span><img id="django" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-original.svg" alt="django" /></span>
            </div>
            <div className="skill-planet skill-planet14">
              <span><img id="mysql-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="mysql" /></span>
            </div>
            <div className="skill-planet skill-planet15">
              <span><img id="Java" src="https://img.icons8.com/?size=256&id=13679&format=png" alt="java" /></span>
            </div>
            
          </div>
        </div>
      </div>
      <div className='skillwr'>
        <p className='tex1 sk'></p>
        <p className='tex2 sk'></p>
        <p className='tex3 sk'></p>
        <p className='tex4 sk'></p>
        <p className='tex5 sk'></p>
        <p className='tex6 sk'></p>
        <p className='tex7 sk'></p>
        <p className='tex8 sk'></p>
        <p className='tex9 sk'></p>
        <p className='tex10 sk'></p>

      </div>
    </div>
  );
}

export default Skills;
