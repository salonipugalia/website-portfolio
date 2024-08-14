import React, { useEffect } from 'react';
import './aboutdiv1.css';

function AboutDiv1() {

    useEffect(() => {
        const texts = [
            `<Dedicated, third year B.Tech student, pursuing Information Technology with a strong foundation in Frontend Web development and programming languages with active learning in Python and SQL. Skilled in Java./>`,
            `<Committed to refining skills and embracing emerging technologies to excel in the IT industry. Demonstrated project experience combining HTML, CSS, JavaScript, and React to create engaging web solutions./>`,
            `<Eager to contribute innovative ideas and enthusiasm to drive real-world results./>`
        ];

        const ids = ['firstp', 'secondp', 'thirdp'];

        let textIndex = 0;
        let charIndex = 0;

        let timeoutId;

        const typeNextCharacter = () => {
            if (textIndex < texts.length) {
                const currentElement = document.getElementById(ids[textIndex]);
                const currentText = texts[textIndex];

                if (charIndex === 0) {
                    currentElement.innerHTML = ''; // Clear the content at the beginning
                }

                if (charIndex < currentText.length) {
                    currentElement.innerHTML += currentText[charIndex];
                    charIndex++;
                    timeoutId = setTimeout(typeNextCharacter, 10); // Continue typing the current text
                } else {
                    charIndex = 0; // Reset character index for the next text
                    textIndex++;
                    timeoutId = setTimeout(typeNextCharacter, 20); // Delay before starting the next text
                }
            }
        };

        typeNextCharacter(); // Start typing the first text

        return () => {
            clearTimeout(timeoutId); // Cleanup function to clear the timeout when the component unmounts
        };

    }, []);

    return (
        <div className='about-div first'>
            <div className="icon"></div>
            <div className="content"> 
                <p id='firstp'></p>
                <p id='secondp'></p>  
                <p id='thirdp'></p>
            </div>
        </div>
    );
}

export default AboutDiv1;
