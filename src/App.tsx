import React, { Component } from 'react';
import { ThemeProvider, useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import Sidebar from './components/Sidebar';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
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
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type AppState = {
  isMenuOpen: boolean;
};

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const next = theme === 'dark' ? 'light' : 'dark';
  return (
    <Button variant="outline" size="sm" onClick={() => setTheme(next)}>
      Toggle {next}
    </Button>
  );
}

class AppContent extends Component<Record<string, never>, AppState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  }

  render() {
    return (
      <div id="portfolio-page" className={this.state.isMenuOpen ? 'offcanvas' : ''}>
        <div className="container-wrap">
          <Navbar />
          <a href="#" className="js-portfolio-nav-toggle portfolio-nav-toggle" onClick={this.toggleMenu}><i></i></a>
          <div className="px-4 py-2 md:flex md:items-start md:gap-8">
            <Sidebar></Sidebar>
            <div className="ml-auto hidden md:block">
              <ThemeToggle />
            </div>
          </div>
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
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default function App() {
  return (
    <ThemeProvider>
      <SEO />
      <AppContent />
    </ThemeProvider>
  );
}

