import React, { Component } from 'react';
import { Element } from 'react-scroll';
import AnimateOnScroll from './AnimateOnScroll';

export default class About extends Component {
  render() {
    return (
      <Element name="about">
        <section className="portfolio-about" data-section="about">
          <div className="portfolio-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <AnimateOnScroll animation="fadeInLeft">
                  <div className="row row-bottom-padded-sm">
                    <div className="col-md-12">
                      <div className="about-desc">
                        <span className="heading-meta">About Me</span>
                        <h2 className="portfolio-heading">Who Am I?</h2>
                        <p><strong>Hi, I'm Albert Kariuki</strong>, I'm highly skilled full-stack developer, proficient in both front-end and back-end technologies, with the ability to design, develop, and maintain web applications. With expertise in a wide range of programming languages, frameworks, and tools, I seamlessly bridge the gap between user experience and server-side functionality to deliver efficient, scalable solutions.</p>
                        <p>Whether building responsive user interfaces or optimizing database queries, I'm dedicated to writing clean, maintainable code and continuously improving processes.</p>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
                <div className="row">
                  <AnimateOnScroll animation="fadeInLeft">
                    <div className="col-md-3">
                      <div className="services color-1">
                        <span className="icon2"><i className="fa-regular fa-lightbulb"></i></span>
                        <h3>Graphic Design</h3>
                      </div>
                    </div>
                  </AnimateOnScroll>
                  <AnimateOnScroll animation="fadeInRight">
                    <div className="col-md-3">
                      <div className="services color-2">
                        <span className="icon2"><i className="fa-solid fa-globe"></i></span>
                        <h3>Web Design</h3>
                      </div>
                    </div>
                  </AnimateOnScroll>
                  <AnimateOnScroll animation="fadeInTop">
                    <div className="col-md-3">
                      <div className="services color-3">
                        <span className="icon2"><i className="fa-brands fa-react"></i></span>
                        <h3>Software</h3>
                      </div>
                    </div>
                  </AnimateOnScroll>
                  <AnimateOnScroll animation="fadeInBottom">
                    <div className="col-md-3">
                      <div className="services color-4">
                        <span className="icon2"><i className="fa-solid fa-mobile-screen-button"></i></span>
                        <h3>Application</h3>
                      </div>
                    </div>
                  </AnimateOnScroll>
                </div>
                <div className="row">
                  <AnimateOnScroll animation="fadeInLeft">
                    <div className="col-md-12">
                      <div className="hire">
                        <h2>I am happy to know you <br/>that 300+ projects done sucessfully!</h2>
                        <a href="#" className="btn-hire">Hire me</a>
                      </div>
                    </div>
                  </AnimateOnScroll>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>
    );
  }
}
