import React, { Component } from 'react';
import { Element } from 'react-scroll';
import AnimateOnScroll from './AnimateOnScroll';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export default class Skills extends Component {
  render() {
    return (
      <Element name="skills">
        <section className="portfolio-skills" data-section="skills">
          <div className="portfolio-narrow-content">
            <AnimateOnScroll animation="fadeInLeft">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3">
                  <span className="heading-meta">My Specialty</span>
                  <h2 className="portfolio-heading">My Skills</h2>
                </div>
              </div>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                { name: 'Photoshop', value: 75 },
                { name: 'jQuery', value: 60 },
                { name: 'HTML5', value: 85 },
                { name: 'CSS3', value: 90 },
                { name: 'WordPress', value: 70 },
                { name: 'SEO', value: 80 },
              ].map((skill) => (
                <AnimateOnScroll animation="fadeInLeft" key={skill.name}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">{skill.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Progress value={skill.value} />
                      <div className="mt-2 text-right text-sm text-muted-foreground">{skill.value}%</div>
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
