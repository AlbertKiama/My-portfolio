import React, { Component } from 'react';
import { Element } from 'react-scroll';
import CountUp from 'react-countup';
import { InView } from 'react-intersection-observer';

export default class Counter extends Component {
  render() {
    return (
      <Element name="counter">
        <div id="portfolio-counter" className="portfolio-counters" style={{backgroundImage: 'url(images/cover_bg_1.jpg)'}} data-stellar-background-ratio="0.5">
          <div className="overlay"></div>
          <div className="portfolio-narrow-content">
            <div className="row">
            </div>
            <div className="row">
              <div className="col-md-3 text-center animate-box">
                <InView triggerOnce>
                  {({ inView, ref }) => (
                    <span ref={ref} className="portfolio-counter">
                      {inView ? <CountUp start={0} end={309} duration={5} /> : null}
                    </span>
                  )}
                </InView>
                <span className="portfolio-counter-label">Cups of coffee</span>
              </div>
              <div className="col-md-3 text-center animate-box">
                <InView triggerOnce>
                  {({ inView, ref }) => (
                    <span ref={ref} className="portfolio-counter">
                      {inView ? <CountUp start={0} end={356} duration={5} /> : null}
                    </span>
                  )}
                </InView>
                <span className="portfolio-counter-label">Projects</span>
              </div>
              <div className="col-md-3 text-center animate-box">
                <InView triggerOnce>
                  {({ inView, ref }) => (
                    <span ref={ref} className="portfolio-counter">
                      {inView ? <CountUp start={0} end={30} duration={5} /> : null}
                    </span>
                  )}
                </InView>
                <span className="portfolio-counter-label">Clients</span>
              </div>
              <div className="col-md-3 text-center animate-box">
                <InView triggerOnce>
                  {({ inView, ref }) => (
                    <span ref={ref} className="portfolio-counter">
                      {inView ? <CountUp start={0} end={10} duration={5} /> : null}
                    </span>
                  )}
                </InView>
                <span className="portfolio-counter-label">Partners</span>
              </div>
            </div>
          </div>
        </div>
      </Element>
    );
  }
}
