import React, { Component } from 'react';
import { Element } from 'react-scroll';
import AnimateOnScroll from './AnimateOnScroll';

export default class Services extends Component {
  render() {
    return (
      <Element name="services">
        <section className="portfolio-services" data-section="services">
          <div className="portfolio-narrow-content">
            <AnimateOnScroll animation="fadeInLeft">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3">
                  <span className="heading-meta">What I do?</span>
                  <h2 className="portfolio-heading">Here are some of my expertise</h2>
                </div>
              </div>
            </AnimateOnScroll>
            <div className="row row-pt-md">
              <AnimateOnScroll animation="fadeInLeft">
                <div className="col-md-4 text-center">
                  <div className="services color-1">
                    <span className="icon">
                      <i className="icon-bulb"></i>
                    </span>
                    <div className="desc">
                      <h3>Innovative Ideas</h3>
                      <p>Creative thinker, problem solver, adaptable, visionary, dynamic & collaborative.</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeInLeft">
                <div className="col-md-4 text-center">
                  <div className="services color-2">
                    <span className="icon">
                      <i className="icon-globe-outline"></i>
                    </span>
                    <div className="desc">
                      <h3>Web Design</h3>
                      <p>Design, develop, test, and maintain software solutions to solve problems.</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeInLeft">
                <div className="col-md-4 text-center">
                  <div className="services color-3">
                    <span className="icon">
                      <i className="icon-phone3"></i>
                    </span>
                    <div className="desc">
                      <h3>Application</h3>
                      <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeInLeft">
                <div className="col-md-4 text-center">
                  <div className="services color-4">
                    <span className="icon">
                      <i className="icon-layers2"></i>
                    </span>
                    <div className="desc">
                      <h3>Graphic Design</h3>
                      <p>"Creative graphic designer skilled in branding, illustration, and digital art."</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeInLeft">
                <div className="col-md-4 text-center">
                  <div className="services color-5">
                    <span className="icon">
                      <i className="icon-data"></i>
                    </span>
                    <div className="desc">
                      <h3>Software</h3>
                      <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeInLeft">
                <div className="col-md-4 text-center">
                  <div className="services color-6">
                    <span className="icon">
                      <i className="icon-phone3"></i>
                    </span>
                    <div className="desc">
                      <h3>Application</h3>
                      <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
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
