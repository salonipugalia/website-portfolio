import { useEffect } from 'react';
import Nav from '../components/sidenav';
import { motion } from 'framer-motion';
import './Projects.css';
import Card from '../components/cards';

export default function Projects() {
  useEffect(() => {
    const canvas = document.getElementById('project-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    let particlesArray;

    const mouse = {
      x: null,
      y: null,
      radius: (canvas.height / 80) * (canvas.width / 80),
    };

    const handleMousemove = (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };

    const handleResize = () => {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
      mouse.radius = (canvas.height / 80) * (canvas.width / 80);
      init();
    };

    const handleMouseout = () => {
      mouse.x = undefined;
      mouse.y = undefined;
    };

    window.addEventListener('mousemove', handleMousemove);
    window.addEventListener('resize', handleResize);
    window.addEventListener('mouseout', handleMouseout);

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = 'white';
        ctx.fill();
      }

      update() {
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius + this.size) {
          if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
            this.x += 10;
          }
          if (mouse.x > this.x && this.x > this.size * 10) {
            this.x -= 10;
          }
          if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
            this.y += 10;
          }
          if (mouse.y > this.y && this.y > this.size * 10) {
            this.y -= 10;
          }
        }

        this.x += this.directionX * 0.2;
        this.y += this.directionY * 0.2;
        this.draw();
      }
    }

    function init() {
      particlesArray = [];
      const numberOfParticles = (canvas.height * canvas.width) / 9000;
      for (let i = 0; i < numberOfParticles * 0.7; i++) {
        const size = Math.random() * 5 + 1;
        const x = Math.random() * (innerWidth - size * 2) + size * 2;
        const y = Math.random() * (innerHeight - size * 2) + size * 2;
        const directionX = Math.random() * 5 - 2.5;
        const directionY = Math.random() * 5 - 2.5;
        const color = '#AF8260';

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, innerWidth, innerHeight);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
    }

    init();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMousemove);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mouseout', handleMouseout);
    };
  }, []);

  return (
    <motion.div
      className="project-container"
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
    >
      <canvas id="project-canvas"></canvas>
      <h5>Saloni Pugalia</h5>
      <div className="all">
      <div className="cards">
      <Card title="React Tutorial" content="Learn React from scratch" />
      <Card title="React Hooks" content="Explore the power of React Hooks" />
      <Card title="React Tutorial" content="Learn React from scratch" />
      <Card title="React Hooks" content="Explore the power of React Hooks" />
      </div>
     <div className="nav">
     <Nav />
     </div>
     </div>

     
    </motion.div>
  );
}
