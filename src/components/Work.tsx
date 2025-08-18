import React, { Component } from 'react';
import { Element } from 'react-scroll';
import AnimateOnScroll from './AnimateOnScroll';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                { title: 'Work 01', tag: 'Website', img: 'images/Work 01.jpg' },
                { title: 'Work 02', tag: 'Animation', img: 'images/Work 02.jpg' },
                { title: 'Work 03', tag: 'Illustration', img: 'images/Work 03.jpg' },
                { title: 'Work 04', tag: 'Application', img: 'images/Work 04.jpg' },
                { title: 'Work 05', tag: 'Graphic, Logo', img: 'images/Work 02.jpg' },
                { title: 'Work 06', tag: 'Web Design', img: 'images/Work 01.jpg' },
              ].map((p) => (
                <AnimateOnScroll animation="fadeInLeft" key={p.title}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>{p.title}</span>
                        <Badge variant="secondary">{p.tag}</Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video w-full overflow-hidden rounded-md border">
                        <img src={p.img} alt={p.title} className="h-full w-full object-cover" />
                      </div>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>
            <AnimateOnScroll animation="fadeInLeft">
              <div className="mt-6 text-center text-sm text-muted-foreground">More projects coming soon.</div>
            </AnimateOnScroll>
          </div>
        </section>
      </Element>
    );
  }
}
