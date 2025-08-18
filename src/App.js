import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Counter from './components/Counter';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Work from './components/Work';
import Blog from './components/Blog';
import Contact from './components/Contact';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  }

  render() {
    return (
      <div id="portfolio-page" className={this.state.isMenuOpen ? 'offcanvas' : ''}>
        <div className="container-wrap">
          <a href="#" className="js-portfolio-nav-toggle portfolio-nav-toggle" onClick={this.toggleMenu}><i></i></a>
          <Sidebar></Sidebar>
          <div id="portfolio-main">
            <Home></Home>
            <About></About>
            <Services></Services>
            <Counter></Counter>
            <Skills></Skills>
            <Education></Education>
            <Experience></Experience>
            <Work></Work>
            <Blog></Blog>
            <Contact></Contact>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
