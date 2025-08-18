import React, { Component } from 'react';
import { Element } from 'react-scroll';
import AnimateOnScroll from './AnimateOnScroll';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: 'Adobe illustrator for Beginners', date: 'April 14, 2018', tag: 'Graphics Design', img: 'images/Blog 01.jpg', excerpt: 'Tools for design are many and intensively developed. This is all that you need to become the best graphic artist...' },
                { title: 'Wordpress for a Beginner', date: 'April 14, 2018', tag: 'Web Design', img: 'images/Blog 02.jpg', excerpt: 'Web development just got easier, we can all now agree that it is much simplified thus simple to design..' },
                { title: 'Make website from scratch', date: 'April 14, 2018', tag: 'Inspiration', img: 'images/Blog 03.jpg', excerpt: 'Creation same as development starts from as small as one line of code, It all starts by one step at a time...' },
              ].map((post) => (
                <AnimateOnScroll animation="fadeInLeft" key={post.title}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>{post.title}</span>
                        <Badge variant="secondary">{post.tag}</Badge>
                      </CardTitle>
                      <CardDescription>{post.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video w-full overflow-hidden rounded-md border">
                        <img src={post.img} alt={post.title} className="h-full w-full object-cover" />
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
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
