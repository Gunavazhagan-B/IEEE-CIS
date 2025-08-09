import { useState } from "react";
import AddEventDialog from "../components/AddEventDialog";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Plus, Calendar, MapPin, Users, Clock, ArrowRight, Sparkles, Zap } from 'lucide-react';

interface Event {
	id: number;
	title: string;
	description: string;
	image: string;
	link: string;
	date: string;
	time: string;
	location: string;
	capacity: number;
	registered: number;
	type: string;
	attendees?: string;
}

interface PastEvent {
	title: string;
	description: string;
	image: string;
	date: string;
	type: string;
	highlights: string[];
}

interface EventCategory {
	title: string;
	description: string;
	icon: React.ReactNode;
}

const initialEvents: Event[] = [
	{
		id: 1,
		title: "AI & Machine Learning Summit 2024",
		description: "Join us for a comprehensive summit featuring the latest advances in AI and ML, with keynote speakers from Google, Microsoft, and leading academic institutions.",
		image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=300&fit=crop",
		link: "https://example.com/register/ai-summit",
		date: "March 15, 2024",
		time: "9:00 AM - 5:00 PM",
		location: "Main Auditorium, Engineering Building",
		capacity: 500,
		registered: 350,
		type: "Conference",
		attendees: "500+"
	},
	{
		id: 2,
		title: "Deep Learning Workshop",
		description: "Hands-on workshop covering neural network architectures, training techniques, and practical implementation using TensorFlow and PyTorch.",
		image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=300&fit=crop",
		link: "https://example.com/register/dl-workshop",
		date: "March 22, 2024",
		time: "2:00 PM - 6:00 PM",
		location: "Computer Lab 101",
		capacity: 50,
		registered: 35,
		type: "Workshop",
		attendees: "50"
	},
	{
		id: 3,
		title: "Industry Panel: Future of AI",
		description: "Panel discussion with industry leaders discussing career opportunities, emerging trends, and the future landscape of artificial intelligence.",
		image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=300&fit=crop",
		link: "https://example.com/register/industry-panel",
		date: "April 5, 2024",
		time: "6:00 PM - 8:00 PM",
		location: "Hybrid (Room 205 & Online)",
		capacity: 200,
		registered: 150,
		type: "Panel",
		attendees: "200+"
	}
];

const pastEvents: PastEvent[] = [
	{
		title: "International Conference on Neural Networks",
		description: "Successfully hosted our annual international conference with 800+ participants from 25 countries.",
		image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
		date: "November 2023",
		type: "Conference",
		highlights: ["800+ Participants", "25 Countries", "50+ Research Papers"]
	},
	{
		title: "Hackathon: AI for Social Good",
		description: "48-hour hackathon focused on developing AI solutions for social challenges and humanitarian causes.",
		image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop",
		date: "October 2023",
		type: "Hackathon",
		highlights: ["100+ Participants", "20 Teams", "$10K Prize Pool"]
	},
	{
		title: "Evolutionary Computation Webinar Series",
		description: "Monthly webinar series featuring world-renowned experts in genetic algorithms and evolutionary programming.",
		image: "https://images.unsplash.com/photo-1587614385131-b71c92041b9d?w=400&h=250&fit=crop",
		date: "Sep 2023",
		type: "Webinar",
		highlights: ["6 Sessions", "International Speakers", "500+ Attendees"]
	},
	{
		title: "Fuzzy Systems Workshop",
		description: "Comprehensive workshop on fuzzy logic systems, approximate reasoning, and real-world applications.",
		image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
		date: "August 2023",
		type: "Workshop",
		highlights: ["Hands-on Training", "Industry Cases", "Certificate Program"]
	},
	{
		title: "Student Research Symposium",
		description: "Showcasing outstanding research projects by undergraduate and graduate students in computational intelligence.",
		image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop",
		date: "July 2023",
		type: "Symposium",
		highlights: ["30+ Presentations", "Best Paper Awards", "Industry Judges"]
	},
	{
		title: "Tech Talk: Quantum Computing & AI",
		description: "Expert talk on the intersection of quantum computing and artificial intelligence by IBM Research.",
		image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop",
		date: "June 2023",
		type: "Tech Talk",
		highlights: ["IBM Research Speaker", "Q&A Session", "200+ Attendees"]
	}
];

const eventCategories: EventCategory[] = [
	{
		title: "Conferences",
		description: "International conferences with renowned speakers and cutting-edge research presentations",
		icon: <Users className="h-10 w-10" />
	},
	{
		title: "Workshops",
		description: "Hands-on learning experiences with practical implementation and real-world applications",
		icon: <Calendar className="h-10 w-10" />
	},
	{
		title: "Webinars",
		description: "Online sessions featuring experts sharing insights on latest trends and technologies",
		icon: <Clock className="h-10 w-10" />
	},
	{
		title: "Hackathons",
		description: "Competitive coding events focusing on innovative solutions to real-world challenges",
		icon: <Zap className="h-10 w-10" />
	}
];

interface EventsPageProps {
	isAdmin: boolean;
}

const EventsPage = ({ isAdmin }: EventsPageProps) => {
	const [events, setEvents] = useState<Event[]>(initialEvents);
	const [showAddDialog, setShowAddDialog] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
	const [filteredEvents, setFilteredEvents] = useState<Event[]>(initialEvents);

	// Filter events based on selected category
	const handleCategoryFilter = (category: string) => {
		if (selectedCategory === category) {
			setSelectedCategory(null);
			setFilteredEvents(events);
		} else {
			setSelectedCategory(category);
			const filtered = events.filter(event => event.type.toLowerCase() === category.toLowerCase());
			setFilteredEvents(filtered);
		}
	};

	// Add event handler
	const handleAddEvent = (newEvent: Event) => {
		const eventWithType = { ...newEvent, type: newEvent.type || "Workshop" };
		setEvents([...events, eventWithType]);
		setFilteredEvents([...filteredEvents, eventWithType]);
	};

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="gradient-dark-purple text-cream py-24 px-4 relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-black/20"></div>
				<div className="max-w-7xl mx-auto relative z-10">
					<div className="text-center mb-16 animate-fade-in-up">
						<Badge variant="secondary" className="mb-6 bg-purple-900/30 text-accent border-accent/30 glow-purple px-6 py-2 text-lg">
							<Calendar className="mr-2 h-4 w-4" />
							Events & Workshops
						</Badge>
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-glow-cream">
							Upcoming Events
						</h1>
						<p className="text-xl text-cream/90 leading-relaxed max-w-3xl mx-auto">
							Join us for exciting workshops, seminars, and hands-on projects in computational intelligence and AI.
						</p>
					</div>
				</div>
			</section>

			{/* Event Categories */}
			<section className="py-24 px-4">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16 animate-fade-in-up">
						<h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow-cream">Event Categories</h2>
						<p className="text-xl text-muted-foreground leading-relaxed">
							We organize diverse events to cater to different interests and skill levels
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{eventCategories.map((category, index) => (
							<Card 
								key={index} 
								className={`text-center glass border-accent/20 hover-glow hover-scale transition-all duration-500 animate-fade-in-up cursor-pointer ${
									selectedCategory === category.title ? 'ring-2 ring-accent/50 glow-purple' : ''
								}`}
								style={{ animationDelay: `${index * 0.2}s` }}
								onClick={() => handleCategoryFilter(category.title)}
							>
								<CardContent className="p-8">
									<div className="w-24 h-24 gradient-purple-glow rounded-full flex items-center justify-center mx-auto mb-6 glow-purple animate-float">
										<div className="text-accent">{category.icon}</div>
									</div>
									<h3 className="font-semibold mb-4 text-xl text-glow-cream">{category.title}</h3>
									<p className="text-muted-foreground leading-relaxed">
										{category.description}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Featured Events Section */}
			<section className="py-24 px-4">
				<div className="max-w-7xl mx-auto">
					<div className="flex justify-between items-center mb-12 animate-fade-in-up">
						<h2 className="text-3xl font-bold text-glow-cream">
							{selectedCategory ? `${selectedCategory} Events` : 'Featured Events'}
						</h2>
						{isAdmin && (
							<Button
								onClick={() => setShowAddDialog(true)}
								className="gradient-purple-glow hover:glow-purple-intense transition-all duration-300 hover:scale-105 neon-border"
							>
								<Plus className="mr-2 h-4 w-4" />
								Add Event
							</Button>
						)}
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{filteredEvents.map((event, index) => (
							<Card 
								key={event.id}
								className="glass-intense border-accent/20 shadow-deep transition-all duration-500 hover:scale-105 hover-glow animate-fade-in-up"
								style={{ animationDelay: `${index * 0.1}s` }}
							>
								<CardContent className="p-6">
									<div className="aspect-video bg-gradient-to-br from-purple-900/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
										{event.image ? (
											<img 
												src={event.image} 
												alt={event.title}
												className="w-full h-full object-cover rounded-lg"
											/>
										) : (
											<div className="w-16 h-16 gradient-purple-glow rounded-full flex items-center justify-center glow-purple">
												<Calendar className="h-8 w-8 text-primary-foreground" />
											</div>
										)}
									</div>
									
									<div className="space-y-3">
										<div className="flex items-center justify-between">
											<Badge variant="secondary" className="bg-accent/20 text-accent">
												{event.type}
											</Badge>
											<span className="text-sm text-muted-foreground">{event.date}</span>
										</div>
										
										<h3 className="text-xl font-semibold text-glow-cream">
											{event.title}
										</h3>
										<p className="text-muted-foreground text-sm leading-relaxed">
											{event.description}
										</p>
										
										<div className="space-y-2">
											<div className="flex items-center text-sm text-muted-foreground">
												<Clock className="mr-2 h-4 w-4" />
												{event.time}
											</div>
											<div className="flex items-center text-sm text-muted-foreground">
												<MapPin className="mr-2 h-4 w-4" />
												{event.location}
											</div>
											<div className="flex items-center text-sm text-muted-foreground">
												<Users className="mr-2 h-4 w-4" />
												{event.registered}/{event.capacity} registered
											</div>
										</div>
										
										<div className="flex justify-between items-center pt-4">
											<Badge variant="secondary" className="bg-accent/20 text-accent">
												{event.capacity && event.registered ? 
													`${Math.round((event.registered / event.capacity) * 100)}% Full` : 
													'Open'
												}
											</Badge>
											<Button 
												className="gradient-purple-glow hover:glow-purple-intense transition-all duration-300 hover:scale-105"
												onClick={() => window.open(event.link, '_blank')}
											>
												Register Now
											</Button>
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</div>

					{/* Empty State */}
					{filteredEvents.length === 0 && (
						<div className="text-center py-16 animate-fade-in-up">
							<div className="w-24 h-24 gradient-purple-glow rounded-full flex items-center justify-center mx-auto mb-6 glow-purple">
								<Calendar className="h-12 w-12 text-primary-foreground" />
							</div>
							<h3 className="text-2xl font-semibold mb-4 text-glow-cream">
								No Events Found
							</h3>
							<p className="text-muted-foreground max-w-md mx-auto">
								{selectedCategory ? `No ${selectedCategory} events scheduled at the moment.` : "We're currently planning our next events. Check back soon for exciting workshops and seminars!"}
							</p>
						</div>
					)}
				</div>
			</section>

			{/* Past Events Section */}
			<section className="py-24 glass-intense px-4 relative overflow-hidden">
				<div className="absolute inset-0 gradient-purple-glow opacity-10"></div>
				<div className="max-w-7xl mx-auto relative z-10">
					<div className="text-center mb-16 animate-fade-in-up">
						<h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow-cream">Past Events</h2>
						<p className="text-xl text-muted-foreground leading-relaxed">
							Celebrating our successful events and achievements
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{pastEvents.map((event, index) => (
							<Card 
								key={index} 
								className="overflow-hidden glass border-accent/20 hover-glow hover-scale transition-all duration-500 animate-fade-in-up"
								style={{ animationDelay: `${index * 0.1}s` }}
							>
								<div className="relative">
									<img
										src={event.image}
										alt={event.title}
										className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
								</div>
								<CardHeader>
									<div className="flex items-center justify-between mb-3">
										<Badge 
											variant="outline" 
											className="border-accent text-accent glow-purple"
										>
											{event.type}
										</Badge>
										<span className="text-sm text-muted-foreground">{event.date}</span>
									</div>
									<CardTitle className="text-xl text-glow-cream">{event.title}</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-muted-foreground mb-6 leading-relaxed">
										{event.description}
									</p>
									
									<div className="space-y-3">
										{event.highlights.map((highlight, idx) => (
											<div key={idx} className="flex items-center p-2 glass rounded-lg">
												<ArrowRight className="h-4 w-4 text-accent mr-3 flex-shrink-0 glow-purple" />
												<span className="text-sm text-muted-foreground">{highlight}</span>
											</div>
										))}
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-24 px-4">
				<div className="max-w-4xl mx-auto text-center">
					<div className="gradient-dark-purple text-cream py-16 px-8 rounded-2xl glow-purple-intense glass-intense shadow-deep animate-fade-in-up">
						<h2 className="text-4xl font-bold mb-8 text-glow-cream">
							Stay Updated
						</h2>
						<p className="text-xl mb-12 text-cream/90 leading-relaxed max-w-2xl mx-auto">
							Don't miss out on our upcoming events! Follow us on social media and subscribe to our newsletter for the latest updates.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
							<Button 
								className="gradient-purple-glow hover:glow-purple-intense transition-all duration-300 hover:scale-105 neon-border px-8 py-3 text-lg"
							>
								Subscribe to Newsletter
							</Button>
							<Button 
								variant="outline"
								className="border-accent/30 text-accent hover:bg-accent/10 transition-all duration-300 hover:scale-105 px-8 py-3 text-lg"
							>
								Follow Us
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Dialogs */}
			<AddEventDialog
				open={showAddDialog}
				onClose={() => setShowAddDialog(false)}
				onAddEvent={handleAddEvent}
			/>
		</div>
	);
};

export default EventsPage;
