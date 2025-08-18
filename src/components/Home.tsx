import React, { Component } from 'react';
import { Element } from 'react-scroll';
import Slider from 'react-slick';
import withFullHeight from './withFullHeight';
import { Button } from '@/components/ui/button';

class Home extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    };
    const { height } = this.props;
    return (
      <Element name="home">
        <section id="portfolio-hero" style={{ height: height }} data-section="home">
          <Slider {...settings}>
            <div>
              <div style={{ height: height, backgroundImage: 'url(images/About%201.jpg)'}}>
                <div className="overlay"></div>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>Hi! <br/>I'm Albert</h1>
                          <h2>A versatile full-stack developer with expertise in both
                            front-end and back-end technologies.</h2>
                          <p><Button>Download CV</Button></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div style={{ height: height, backgroundImage: 'url(images/About.JPG)'}}>
                <div className="overlay"></div>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>I am <br/>a Developer</h1>
                          <h2>A versatile full-stack developer with expertise in both
                            front-end and back-end technologies.</h2>
                          <p><Button variant="secondary">View Portfolio</Button></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </section>
      </Element>
    );
  }
}

export default withFullHeight(Home);
