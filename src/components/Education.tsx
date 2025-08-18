import React, { Component } from 'react';
import { Element } from 'react-scroll';
import AnimateOnScroll from './AnimateOnScroll';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default class Education extends Component {
  render() {
    return (
      <Element name="education">
        <section className="portfolio-education" data-section="education">
          <div className="portfolio-narrow-content">
            <AnimateOnScroll animation="fadeInLeft">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3">
                  <span className="heading-meta">Education</span>
                  <h2 className="portfolio-heading">Education</h2>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeInLeft">
              <Card>
                <CardHeader>
                  <CardTitle>Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Master Degree Graphic Design</AccordionTrigger>
                      <AccordionContent>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                          <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Bachelor Degree of Computer Science</AccordionTrigger>
                      <AccordionContent>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                        <ul className="list-disc pl-5"><li>Separated they live in Bookmarksgrove right</li><li>Separated they live in Bookmarksgrove right</li></ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Diploma in Information Technology</AccordionTrigger>
                      <AccordionContent>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>High School Secondary Education</AccordionTrigger>
                      <AccordionContent>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          </div>
        </section>
      </Element>
    );
  }
}
