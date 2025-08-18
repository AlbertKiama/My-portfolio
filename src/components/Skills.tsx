import React, { Component } from 'react';
import { Element } from 'react-scroll';
import AnimateOnScroll from './AnimateOnScroll';

export default class Skills extends Component {
  render() {
    return (
      <Element name="skills">
        <section className="portfolio-skills" data-section="skills">
          <div className="portfolio-narrow-content">
            <AnimateOnScroll animation="fadeInLeft">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3">
                  <span className="heading-meta">My Specialty</span>
                  <h2 className="portfolio-heading">My Skills</h2>
                </div>
              </div>
            </AnimateOnScroll>
            <div className="row">
              <AnimateOnScroll animation="fadeInLeft">
                <div className="col-md-12">
                  <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeInLeft">
                <div className="col-md-6">
                  <div className="progress-wrap">
                    <h3>Photoshop</h3>
                    <div className="progress">
                      <div className="progress-bar color-1" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width:"75%"}}>
                      <span>75%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeInRight">
                <div className="col-md-6">
                  <div className="progress-wrap">
                    <h3>jQuery</h3>
                    <div className="progress">
                      <div className="progress-bar color-2" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width:"60%"}}>
                      <span>60%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeInLeft">
                <div className="col-md-6">
                  <div className="progress-wrap">
                    <h3>HTML5</h3>
                    <div className="progress">
                      <div className="progress-bar color-3" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width:"85%"}}>
                      <span>85%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeInRight">
                <div className="col-md-6">
                  <div className="progress-wrap">
                    <h3>CSS3</h3>
                    <div className="progress">
                      <div className="progress-bar color-4" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:"90%"}}>
                      <span>90%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeInLeft">
                <div className="col-md-6">
                  <div className="progress-wrap">
                    <h3>WordPress</h3>
                    <div className="progress">
                      <div className="progress-bar color-5" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
                      <span>70%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeInRight">
                <div className="col-md-6">
                  <div className="progress-wrap">
                    <h3>SEO</h3>
                    <div className="progress">
                      <div className="progress-bar color-6" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width:"80%"}}>
                      <span>80%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      </Element>
    );
  }
}
