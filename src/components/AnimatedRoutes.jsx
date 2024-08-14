import React from 'react'
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';
import Projects from '../pages/Projects';
import {Routes, Route ,useLocation} from 'react-router-dom';

import {AnimatePresence} from 'framer-motion'

function AnimatedRoutes() {
    const location= useLocation();
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes