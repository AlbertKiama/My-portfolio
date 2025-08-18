import React, { Component } from 'react';
import { Element } from 'react-scroll';
import AnimateOnScroll from './AnimateOnScroll';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

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
                      <form action="#" className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input id="name" name="name" placeholder="Your name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" name="email" type="email" placeholder="you@example.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Input id="subject" name="subject" placeholder="Subject" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea id="message" name="message" rows={7} placeholder="Write your message..." />
                        </div>
                        <div>
                          <Button type="submit">Send Message</Button>
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
