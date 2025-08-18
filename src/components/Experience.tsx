import React, { Component } from 'react';
import { Element } from 'react-scroll';
import AnimateOnScroll from './AnimateOnScroll';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
            <div className="grid grid-cols-1 gap-4">
              {[
                { title: 'Full Stack Developer', dates: '2017-2018', desc: 'Built full-stack web apps with a focus on performance and maintainability.' },
                { title: 'Front End Developer at Google Company', dates: '2017-2018', desc: 'Implemented accessible and performant interfaces at scale.' },
                { title: 'System Analyst', dates: '2017-2018', desc: 'Analyzed systems and optimized workflows to improve reliability.' },
                { title: 'Creative Designer', dates: '2017-2018', desc: 'Collaborated on branding and visual identity.' },
                { title: 'UI/UX Designer at Envato', dates: '2017-2018', desc: 'Designed user-centric experiences and prototypes.' },
              ].map((job) => (
                <AnimateOnScroll animation="fadeInLeft" key={job.title}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>{job.title}</span>
                        <Badge variant="secondary">{job.dates}</Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{job.desc}</CardDescription>
                    </CardContent>
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
