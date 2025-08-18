import React, { Component } from 'react';
import { Element } from 'react-scroll';
import AnimateOnScroll from './AnimateOnScroll';

export default class Experience extends Component {
  render() {
    return (
      <Element name="experience">
        <section className="portfolio-experience" data-section="experience">
          <div className="portfolio-narrow-content">
            <AnimateOnScroll animation="fadeInLeft">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3">
                  <span className="heading-meta">Experience</span>
                  <h2 className="portfolio-heading">Work Experience</h2>
                </div>
              </div>
            </AnimateOnScroll>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <AnimateOnScroll animation="fadeInLeft">
                    <article className="timeline-entry">
                      <div className="timeline-entry-inner">
                        <div className="timeline-icon color-1">
                          <i className="icon-pen2"></i>
                        </div>
                        <div className="timeline-label">
                          <h2><a href="#">Full Stack Developer</a> <span>2017-2018</span></h2>
                          <p>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
                        </div>
                      </div>
                    </article>
                  </AnimateOnScroll>
                  <AnimateOnScroll animation="fadeInRight">
                    <article className="timeline-entry">
                      <div className="timeline-entry-inner">
                        <div className="timeline-icon color-2">
                          <i className="icon-pen2"></i>
                        </div>
                        <div className="timeline-label">
                          <h2><a href="#">Front End Developer at Google Company</a> <span>2017-2018</span></h2>
                          <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                        </div>
                      </div>
                    </article>
                  </AnimateOnScroll>
                  <AnimateOnScroll animation="fadeInLeft">
                    <article className="timeline-entry">
                      <div className="timeline-entry-inner">
                        <div className="timeline-icon color-3">
                          <i className="icon-pen2"></i>
                        </div>
                        <div className="timeline-label">
                          <h2><a href="#">System Analyst</a> <span>2017-2018</span></h2>
                          <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                        </div>
                      </div>
                    </article>
                  </AnimateOnScroll>
                  <AnimateOnScroll animation="fadeInTop">
                    <article className="timeline-entry">
                      <div className="timeline-entry-inner">
                        <div className="timeline-icon color-4">
                          <i className="icon-pen2"></i>
                        </div>
                        <div className="timeline-label">
                          <h2><a href="#">Creative Designer</a> <span>2017-2018</span></h2>
                          <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                        </div>
                      </div>
                    </article>
                  </AnimateOnScroll>
                  <AnimateOnScroll animation="fadeInLeft">
                    <article className="timeline-entry">
                      <div className="timeline-entry-inner">
                        <div className="timeline-icon color-5">
                          <i className="icon-pen2"></i>
                        </div>
                        <div className="timeline-label">
                          <h2><a href="#">UI/UX Designer at Envato</a> <span>2017-2018</span></h2>
                          <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                        </div>
                      </div>
                    </article>
                  </AnimateOnScroll>
                  <AnimateOnScroll animation="fadeInBottom">
                    <article className="timeline-entry begin">
                      <div className="timeline-entry-inner">
                        <div className="timeline-icon color-none">
                        </div>
                      </div>
                    </article>
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
