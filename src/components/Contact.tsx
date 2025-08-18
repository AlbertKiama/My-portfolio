import React, { Component } from 'react';
import { Element } from 'react-scroll';
import AnimateOnScroll from './AnimateOnScroll';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

type ContactState = {
  name: string;
  email: string;
  subject: string;
  message: string;
  errors: Partial<Record<'name' | 'email' | 'subject' | 'message', string>>;
  status: 'idle' | 'submitting' | 'success' | 'error';
};

export default class Contact extends Component<Record<string, never>, ContactState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      errors: {},
      status: 'idle',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    this.setState((prev) => ({ ...prev, [name]: value } as ContactState));
  }

  validate(): Partial<ContactState['errors']> {
    const errors: Partial<ContactState['errors']> = {};
    if (!this.state.name.trim()) errors.name = 'Name is required';
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.state.email);
    if (!emailOk) errors.email = 'Valid email is required';
    if (!this.state.subject.trim()) errors.subject = 'Subject is required';
    if (!this.state.message.trim()) errors.message = 'Message is required';
    return errors;
  }

  async handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const errors = this.validate();
    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return;
    }
    this.setState({ status: 'submitting', errors: {} });
    try {
      const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;
      if (!endpoint) {
        // fallback simulation when no endpoint configured
        await new Promise((resolve) => setTimeout(resolve, 800));
        this.setState({ status: 'success', name: '', email: '', subject: '', message: '' });
        return;
      }
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          subject: this.state.subject,
          message: this.state.message,
        }),
      });
      if (!response.ok) throw new Error('Failed');
      this.setState({ status: 'success', name: '', email: '', subject: '', message: '' });
    } catch (e) {
      this.setState({ status: 'error' });
    }
  }

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
                      <form onSubmit={this.handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input id="name" name="name" placeholder="Your name" value={this.state.name} onChange={this.handleChange} aria-invalid={!!this.state.errors.name} aria-describedby="name-error" />
                          {this.state.errors.name && (
                            <p id="name-error" className="text-sm text-red-600">{this.state.errors.name}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" name="email" type="email" placeholder="you@example.com" value={this.state.email} onChange={this.handleChange} aria-invalid={!!this.state.errors.email} aria-describedby="email-error" />
                          {this.state.errors.email && (
                            <p id="email-error" className="text-sm text-red-600">{this.state.errors.email}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Input id="subject" name="subject" placeholder="Subject" value={this.state.subject} onChange={this.handleChange} aria-invalid={!!this.state.errors.subject} aria-describedby="subject-error" />
                          {this.state.errors.subject && (
                            <p id="subject-error" className="text-sm text-red-600">{this.state.errors.subject}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea id="message" name="message" rows={7} placeholder="Write your message..." value={this.state.message} onChange={this.handleChange} aria-invalid={!!this.state.errors.message} aria-describedby="message-error" />
                          {this.state.errors.message && (
                            <p id="message-error" className="text-sm text-red-600">{this.state.errors.message}</p>
                          )}
                        </div>
                        <div className="flex items-center gap-3">
                          <Button type="submit" disabled={this.state.status === 'submitting'}>
                            {this.state.status === 'submitting' ? 'Sending…' : 'Send Message'}
                          </Button>
                          {this.state.status === 'success' && (
                            <span className="text-sm text-green-600">Message sent!</span>
                          )}
                          {this.state.status === 'error' && (
                            <span className="text-sm text-red-600">Failed to send. Try again.</span>
                          )}
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
