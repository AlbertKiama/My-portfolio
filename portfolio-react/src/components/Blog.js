import React, { Component } from 'react';
import { Element } from 'react-scroll';
import AnimateOnScroll from './AnimateOnScroll';

export default class Blog extends Component {
  render() {
    return (
      <Element name="blog">
        <section className="portfolio-blog" data-section="blog">
          <div className="portfolio-narrow-content">
            <AnimateOnScroll animation="fadeInLeft">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3">
                  <span className="heading-meta">Read</span>
                  <h2 className="portfolio-heading">Recent Blog</h2>
                </div>
              </div>
            </AnimateOnScroll>
            <div className="row">
              <AnimateOnScroll animation="fadeInLeft">
                <div className="col-md-4 col-sm-6">
                  <div className="blog-entry">
                    <a href="blog.html" className="blog-img"><img src="images/Blog 01.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by portfolio.com" /></a>
                    <div className="desc">
                      <span><small>April 14, 2018 </small> | <small> Graphics Design </small> | <small> <i className="icon-bubble3"></i> 4</small></span>
                      <h3><a href="blog.html">Adobe illustrator for Beginners</a></h3>
                      <p>Tools for design are many and intensively developed. This is all that you need to become the best graphic artist...</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeInRight">
                <div className="col-md-4 col-sm-6">
                  <div className="blog-entry">
                    <a href="blog.html" className="blog-img"><img src="images/Blog 02.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by portfolio.com" /></a>
                    <div className="desc">
                      <span><small>April 14, 2018 </small> | <small> Web Design </small> | <small> <i className="icon-bubble3"></i> 4</small></span>
                      <h3><a href="blog.html">Wordpress for a Beginner</a></h3>
                      <p>Web development just got easier, we can all now agree that it is much simplified thus simple to desing..</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeInLeft">
                <div className="col-md-4 col-sm-6">
                  <div className="blog-entry">
                    <a href="blog.html" className="blog-img"><img src="images/Blog 03.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by portfolio.com" /></a>
                    <div className="desc">
                      <span><small>April 14, 2018 </small> | <small> Inspiration </small> | <small> <i className="icon-bubble3"></i> 4</small></span>
                      <h3><a href="blog.html">Make website from scratch</a></h3>
                      <p>Creation same as development starts from as small as one line of code, It all starts by one step at a time...</p>
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
