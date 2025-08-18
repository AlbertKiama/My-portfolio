import React, { Component } from 'react';
import { Element } from 'react-scroll';
import AnimateOnScroll from './AnimateOnScroll';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Code, Globe, Lightbulb, Smartphone } from 'lucide-react';

export default class About extends Component {
  render() {
    return (
      <Element name="about">
        <section className="portfolio-about" data-section="about">
          <div className="portfolio-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <AnimateOnScroll animation="fadeInLeft">
                  <div className="row row-bottom-padded-sm">
                    <div className="col-md-12">
                      <div className="about-desc">
                        <span className="heading-meta">About Me</span>
                        <h2 className="portfolio-heading">Who Am I?</h2>
                        <p><strong>Hi, I'm Albert Kariuki</strong>, I'm highly skilled full-stack developer, proficient in both front-end and back-end technologies, with the ability to design, develop, and maintain web applications. With expertise in a wide range of programming languages, frameworks, and tools, I seamlessly bridge the gap between user experience and server-side functionality to deliver efficient, scalable solutions.</p>
                        <p>Whether building responsive user interfaces or optimizing database queries, I'm dedicated to writing clean, maintainable code and continuously improving processes.</p>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <AnimateOnScroll animation="fadeInLeft">
                    <Card>
                      <CardHeader>
                        <Lightbulb className="h-6 w-6 text-primary" />
                        <CardTitle>Graphic Design</CardTitle>
                        <CardDescription>Visual identities and assets that speak.</CardDescription>
                      </CardHeader>
                    </Card>
                  </AnimateOnScroll>
                  <AnimateOnScroll animation="fadeInRight">
                    <Card>
                      <CardHeader>
                        <Globe className="h-6 w-6 text-primary" />
                        <CardTitle>Web Design</CardTitle>
                        <CardDescription>Accessible, responsive user experiences.</CardDescription>
                      </CardHeader>
                    </Card>
                  </AnimateOnScroll>
                  <AnimateOnScroll animation="fadeInTop">
                    <Card>
                      <CardHeader>
                        <Code className="h-6 w-6 text-primary" />
                        <CardTitle>Software</CardTitle>
                        <CardDescription>Robust, scalable engineering.</CardDescription>
                      </CardHeader>
                    </Card>
                  </AnimateOnScroll>
                  <AnimateOnScroll animation="fadeInBottom">
                    <Card>
                      <CardHeader>
                        <Smartphone className="h-6 w-6 text-primary" />
                        <CardTitle>Application</CardTitle>
                        <CardDescription>Native-feel mobile and web apps.</CardDescription>
                      </CardHeader>
                    </Card>
                  </AnimateOnScroll>
                </div>
                <div className="mt-8">
                  <AnimateOnScroll animation="fadeInLeft">
                    <Card>
                      <CardContent className="pt-6">
                        <Tabs defaultValue="skills">
                          <TabsList>
                            <TabsTrigger value="skills">Skills</TabsTrigger>
                            <TabsTrigger value="stack">Stack</TabsTrigger>
                            <TabsTrigger value="values">Values</TabsTrigger>
                          </TabsList>
                          <TabsContent value="skills" className="space-x-2 space-y-2">
                            <Badge>Full-stack</Badge>
                            <Badge variant="secondary">Performance</Badge>
                            <Badge variant="outline">Accessibility</Badge>
                          </TabsContent>
                          <TabsContent value="stack" className="space-x-2 space-y-2">
                            <Badge>React</Badge>
                            <Badge>TypeScript</Badge>
                            <Badge>Node.js</Badge>
                          </TabsContent>
                          <TabsContent value="values" className="space-x-2 space-y-2">
                            <Badge>Clean Code</Badge>
                            <Badge>DX</Badge>
                            <Badge>Resilience</Badge>
                          </TabsContent>
                        </Tabs>
                      </CardContent>
                    </Card>
                  </AnimateOnScroll>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>
    );
  }
}
