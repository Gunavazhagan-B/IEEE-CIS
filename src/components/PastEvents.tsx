import React from 'react'
import type { PastEvent } from '../types';
import { Badge } from './ui/badge';
import { Card, CardTitle } from './ui/card';

interface PastEventsProps {
  pastEvents: PastEvent[];
}

export const PastEvents: React.FC<PastEventsProps> = ({ pastEvents }) => {
  return (
		<section className="py-16 glass-intense px-4 relative overflow-hidden">
			<div className="absolute inset-0 gradient-purple-glow opacity-10"></div>
			<div className="max-w-7xl mx-auto relative z-10">
				<div className="text-center mb-16 animate-fade-in-up">
					<h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow-cream">
						Past Events
					</h2>
					<p className="text-xl text-muted-foreground leading-relaxed">
						Celebrating our successful events and achievements
					</p>
				</div>

				<div className="space-y-12">
					{pastEvents.map((event, index) => (
						<Card
							key={index}
							className="overflow-hidden glass border-accent/20 hover-glow transition-all duration-500 animate-fade-in-up flex flex-col md:flex-row"
							style={{
								animationDelay: `${index * 0.1}s`,
								minHeight: "500px",
							}}
						>
							{/* Image on left - poster aspect ratio */}
							<div className="md:w-2/5 relative">
								<img
									src={event.image}
									alt={event.title}
									className="w-full h-full object-cover"
									loading="lazy"
								/>
								<div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent md:hidden"></div>
							</div>

							{/* Content on right */}
							<div className="md:w-3/5 p-6 flex flex-col justify-between">
								<div>
									<div className="flex items-center justify-between mb-4">
										<Badge
											variant="outline"
											className="border-accent text-accent glow-purple"
										>
											{event.type}
										</Badge>
										<span className="text-sm text-muted-foreground">
											{event.date}
										</span>
									</div>

									<CardTitle className="text-2xl md:text-3xl text-glow-cream mb-4">
										{event.title}
									</CardTitle>

									<p className="text-muted-foreground mb-6 leading-relaxed">
										{event.description}
									</p>
								</div>

								<div className="space-y-3">{event.faculty}</div>
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
  );
}
