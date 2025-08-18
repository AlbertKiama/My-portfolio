import React, { Component } from 'react';
import { Element } from 'react-scroll';
import AnimateOnScroll from './AnimateOnScroll';

export default class Contact extends Component {
  render() {
    return (
      <Element name="contact">
        <section className="portfolio-contact" data-section="contact">
          <div className="portfolio-narrow-content">
            <AnimateOnScroll animation="fadeInLeft">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3">
                  <span className="heading-meta">Get in Touch</span>
                  <h2 className="portfolio-heading">Contact</h2>
                </div>
              </div>
            </AnimateOnScroll>
            <div className="row">
              <div className="col-md-5">
                <AnimateOnScroll animation="fadeInLeft">
                  <div className="portfolio-feature portfolio-feature-sm">
                    <div className="portfolio-icon">
                      <i className="icon-globe-outline"></i>
                    </div>
                    <div className="portfolio-text">
                      <p><a href="mailto:info@yourdomain.com">info@yourdomain.com</a></p>
                    </div>
                  </div>
                </AnimateOnScroll>
                <AnimateOnScroll animation="fadeInLeft">
                  <div className="portfolio-feature portfolio-feature-sm">
                    <div className="portfolio-icon">
                      <i className="icon-map"></i>
                    </div>
                    <div className="portfolio-text">
                      <p>211 - Central Park Mlolongo, MSA Road</p>
                    </div>
                  </div>
                </AnimateOnScroll>
                <AnimateOnScroll animation="fadeInLeft">
                  <div className="portfolio-feature portfolio-feature-sm">
                    <div className="portfolio-icon">
                      <i className="icon-phone"></i>
                    </div>
                    <div className="portfolio-text">
                      <p><a href="tel://">+254 71844 8798</a></p>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
              <div className="col-md-7 col-md-push-1">
                <AnimateOnScroll animation="fadeInRight">
                  <div className="row">
                    <div className="col-md-10 col-md-offset-1 col-md-pull-1">
                      <form action="">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Name" />
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Email" />
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Subject" />
                        </div>
                        <div className="form-group">
                          <textarea name="" id="message" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
                        </div>
                        <div className="form-group">
                          <input type="submit" className="btn btn-primary btn-send-message" value="Send Message" />
                        </div>
                      </form>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>
      </Element>
    );
  }
}
