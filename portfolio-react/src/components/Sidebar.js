import React, { Component } from 'react';
import { Link } from 'react-scroll';

export default class Sidebar extends Component {
  render() {
    return (
      <aside id="portfolio-aside" role="complementary" className="border js-fullheight">
        <div className="text-center">
          <div className="author-img" style={{backgroundImage: 'url(images/Profile.JPG)'}}></div>
          <h1 id="portfolio-logo"><a href="index.html">Albert Kariuki</a></h1>
          <span className="position"><a href="#">Full stack Developer</a> in Africa</span>
        </div>
        <nav id="portfolio-main-menu" role="navigation" className="navbar">
          <div id="navbar" className="collapse">
            <ul>
              <li className="active">
                <Link activeClass="active" to="home" spy={true} smooth={true} offset={-55} duration={500}>Home</Link>
              </li>
              <li>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={-55} duration={500}>About</Link>
              </li>
              <li>
                <Link activeClass="active" to="services" spy={true} smooth={true} offset={-55} duration={500}>Services</Link>
              </li>
              <li>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-55} duration={500}>Skills</Link>
              </li>
              <li>
                <Link activeClass="active" to="education" spy={true} smooth={true} offset={-55} duration={500}>Education</Link>
              </li>
              <li>
                <Link activeClass="active" to="experience" spy={true} smooth={true} offset={-55} duration={500}>Experience</Link>
              </li>
              <li>
                <Link activeClass="active" to="work" spy={true} smooth={true} offset={-55} duration={500}>Work</Link>
              </li>
              <li>
                <Link activeClass="active" to="blog" spy={true} smooth={true} offset={-55} duration={500}>Blog</Link>
              </li>
              <li>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-55} duration={500}>Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="portfolio-footer">
          <p><small>© Copyright ©{new Date().getFullYear()} All rights reserved | This website is made with
            <i className="icon-heart" aria-hidden="true"></i> by <a href="https://albertkiama.github.io/Astronet/" target="_blank" rel="noopener noreferrer">Astronet</a>
            <span>Images: <a href="https://www.pexels.com/" target="_blank" rel="noopener noreferrer">pexels.com</a></span></small></p>
          <ul>
            <li><a href="#"><i className="icon-facebook2"></i></a></li>
            <li><a href="#"><i className="icon-twitter2"></i></a></li>
            <li><a href="#"><i className="icon-instagram"></i></a></li>
            <li><a href="#"><i className="icon-linkedin2"></i></a></li>
          </ul>
        </div>
      </aside>
    );
  }
}
