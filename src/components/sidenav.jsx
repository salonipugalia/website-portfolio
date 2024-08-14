import './sidenav.css';
import home from '../images/home.png';
import about from '../images/about.png';
import projects from '../images/projects.png';
import contact from '../images/contact.png';
import blog from '../images/blog.png';
import {Link} from "react-router-dom";
export default function Nav() {
  return (
    <div id="main">
      <div id="overlay2">
        <div className="img-container">
          
          <span className="tooltip">Home</span>
        <Link to="/"><img src={home} className='pic' alt="Home"/></Link>
        </div>
        <div className="img-container">
        <span className="tooltip">About</span>
        <Link to="/about"><img src={about} className='pic' alt="About"/></Link>
        </div>
        <div className="img-container">
          <span className="tooltip">Projects</span>
          <Link to="/projects">  <img src={projects} className='pic' alt="Projects"/></Link>
        </div>
        <div className="img-container">
          <span className="tooltip">Blog</span>
          <Link to="/blog"> <img src={blog} className='pic' alt="Blog"/></Link>
        </div>
        <div className="img-container">
          <span className="tooltip">Contact</span>
          <Link to="/contact">   <img src={contact} className='pic' alt="Contact"/></Link>
        </div>
      </div>
    </div>
  );
}
