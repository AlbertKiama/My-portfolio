import React, { Component } from 'react';
import { Element } from 'react-scroll';
import AnimateOnScroll from './AnimateOnScroll';

export default class Work extends Component {
  render() {
    return (
      <Element name="work">
        <section className="portfolio-work" data-section="work">
          <div className="portfolio-narrow-content">
            <AnimateOnScroll animation="fadeInLeft">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3">
                  <span className="heading-meta">My Work</span>
                  <h2 className="portfolio-heading">Recent Work</h2>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeInLeft">
              <div className="row row-bottom-padded-sm">
                <div className="col-md-12">
                  <p className="work-menu"><span><a href="#" className="active">Graphic Design</a></span> <span><a href="#">Web Design</a></span> <span><a href="#">Software</a></span> <span><a href="#">Apps</a></span></p>
                </div>
              </div>
            </AnimateOnScroll>
            <div className="row">
              <AnimateOnScroll animation="fadeInLeft">
                <div className="col-md-6">
                  <div className="project" style={{backgroundImage: "url(images/Work%2001.jpg)"}}>
                    <div className="desc">
                      <div className="con">
                        <h3><a href="work.html">Work 01</a></h3>
                        <span>Website</span>
                        <p className="icon">
                          <span><a href="#"><i className="icon-share3"></i></a></span>
                          <span><a href="#"><i className="icon-eye"></i> 100</a></span>
                          <span><a href="#"><i className="icon-heart"></i> 49</a></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeInRight">
                <div className="col-md-6">
                  <div className="project" style={{backgroundImage: "url(images/Work%2002.jpg)"}}>
                    <div className="desc">
                      <div className="con">
                        <h3><a href="work.html">Work 02</a></h3>
                        <span>Animation</span>
                        <p className="icon">
                          <span><a href="#"><i className="icon-share3"></i></a></span>
                          <span><a href="#"><i className="icon-eye"></i> 100</a></span>
                          <span><a href="#"><i className="icon-heart"></i> 49</a></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeInTop">
                <div className="col-md-6">
                  <div className="project" style={{backgroundImage: "url(images/Work%2003.jpg)"}}>
                    <div className="desc">
                      <div className="con">
                        <h3><a href="work.html">Work 03</a></h3>
                        <span>Illustration</span>
                        <p className="icon">
                          <span><a href="#"><i className="icon-share3"></i></a></span>
                          <span><a href="#"><i className="icon-eye"></i> 100</a></span>
                          <span><a href="#"><i className="icon-heart"></i> 49</a></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeInBottom">
                <div className="col-md-6">
                  <div className="project" style={{backgroundImage: "url(images/Work%2004.jpg)"}}>
                    <div className="desc">
                      <div className="con">
                        <h3><a href="work.html">Work 04</a></h3>
                        <span>Application</span>
                        <p className="icon">
                          <span><a href="#"><i className="icon-share3"></i></a></span>
                          <span><a href="#"><i className="icon-eye"></i> 100</a></span>
                          <span><a href="#"><i className="icon-heart"></i> 49</a></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeInLeft">
                <div className="col-md-6">
                  <div className="project" style={{backgroundImage: "url(images/Work%2002.jpg)"}}>
                    <div className="desc">
                      <div className="con">
                        <h3><a href="work.html">Work 05</a></h3>
                        <span>Graphic, Logo</span>
                        <p className="icon">
                          <span><a href="#"><i className="icon-share3"></i></a></span>
                          <span><a href="#"><i className="icon-eye"></i> 100</a></span>
                          <span><a href="#"><i className="icon-heart"></i> 49</a></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeInRight">
                <div className="col-md-6">
                  <div className="project" style={{backgroundImage: "url(images/Work%2001.jpg)"}}>
                    <div className="desc">
                      <div className="con">
                        <h3><a href="work.html">Work 06</a></h3>
                        <span>Web Design</span>
                        <p className="icon">
                          <span><a href="#"><i className="icon-share3"></i></a></span>
                          <span><a href="#"><i className="icon-eye"></i> 100</a></span>
                          <span><a href="#"><i className="icon-heart"></i> 49</a></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
            <AnimateOnScroll animation="fadeInLeft">
              <div className="row">
                <div className="col-md-12">
                  <p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload"></i></a></p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </Element>
    );
  }
}
