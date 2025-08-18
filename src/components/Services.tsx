import React, { Component } from 'react';
import { Element } from 'react-scroll';
import AnimateOnScroll from './AnimateOnScroll';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Lightbulb, Globe, Smartphone, Layers3, Database, Monitor } from 'lucide-react';

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
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Lightbulb, title: 'Innovative Ideas', desc: 'Creative thinker, problem solver, adaptable, visionary, dynamic & collaborative.' },
                { icon: Globe, title: 'Web Design', desc: 'Design, develop, test, and maintain software solutions to solve problems.' },
                { icon: Smartphone, title: 'Application', desc: 'Separated they live in Bookmarksgrove right at the coast of the Semantics' },
                { icon: Layers3, title: 'Graphic Design', desc: 'Creative graphic designer skilled in branding, illustration, and digital art.' },
                { icon: Database, title: 'Software', desc: 'Reliable backends with robust data models and APIs.' },
                { icon: Monitor, title: 'Frontend Engineering', desc: 'Accessible, responsive and fast user interfaces.' },
              ].map((s) => (
                <AnimateOnScroll animation="fadeInLeft" key={s.title}>
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <s.icon className="h-6 w-6 text-primary" />
                        <CardTitle>{s.title}</CardTitle>
                      </div>
                      <CardDescription>{s.desc}</CardDescription>
                    </CardHeader>
                    <CardContent></CardContent>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      </Element>
    );
  }
}
