import React, { Component } from 'react';
import { Element } from 'react-scroll';
import Slider from 'react-slick';
import withFullHeight from './withFullHeight';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

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
				<section id="portfolio-hero" style={{ height: height }} data-section="home" className="relative">
					<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
					<Slider {...settings}>
						<div>
							<div style={{ height: height, backgroundImage: 'url(images/About%201.jpg)'}}>
								<div className="overlay"></div>
								<div className="container-section h-full flex items-center">
									<div className="ml-auto max-w-2xl">
										<Card className="bg-background/70 backdrop-blur">
											<CardContent className="p-6">
												<div className="desc">
													<h1>Hi! <br/>I'm Albert</h1>
													<h2>A versatile full-stack developer with expertise in both
														front-end and back-end technologies.</h2>
													<p><Button>Download CV</Button></p>
												</div>
											</CardContent>
										</Card>
									</div>
								</div>
							</div>
						</div>
						<div>
							<div style={{ height: height, backgroundImage: 'url(images/About.JPG)'}}>
								<div className="overlay"></div>
								<div className="container-section h-full flex items-center">
									<div className="ml-auto max-w-2xl">
										<Card className="bg-background/70 backdrop-blur">
											<CardContent className="p-6">
												<div className="desc">
													<h1>I am <br/>a Developer</h1>
													<h2>A versatile full-stack developer with expertise in both
														front-end and back-end technologies.</h2>
													<p><Button variant="secondary">View Portfolio</Button></p>
												</div>
											</CardContent>
										</Card>
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