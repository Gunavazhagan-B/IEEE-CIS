import { useEffect, useState, useMemo } from "react";
import AddEventDialog from "../components/AddEventDialog";
import { Button } from "../components/ui/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Calendar, Users, Clock, ArrowRight, Zap } from "lucide-react";

interface Event {
	id: number;
	title: string;
	description: string;
	image: string;
	link: string;
	type: string;
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

const pastEvents: PastEvent[] = [
	{
		title: "International Conference on Neural Networks",
		description:
			"Successfully hosted our annual international conference with 800+ participants from 25 countries.",
		image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
		date: "November 2023",
		type: "Conference",
		highlights: [
			"800+ Participants",
			"25 Countries",
			"50+ Research Papers",
		],
	},
	{
		title: "Hackathon: AI for Social Good",
		description:
			"48-hour hackathon focused on developing AI solutions for social challenges and humanitarian causes.",
		image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop",
		date: "October 2023",
		type: "Hackathon",
		highlights: ["100+ Participants", "20 Teams", "$10K Prize Pool"],
	},
	{
		title: "Evolutionary Computation Webinar Series",
		description:
			"Monthly webinar series featuring world-renowned experts in genetic algorithms and evolutionary programming.",
		image: "https://images.unsplash.com/photo-1587614385131-b71c92041b9d?w=400&h=250&fit=crop",
		date: "Sep 2023",
		type: "Webinar",
		highlights: ["6 Sessions", "International Speakers", "500+ Attendees"],
	},
	{
		title: "Fuzzy Systems Workshop",
		description:
			"Comprehensive workshop on fuzzy logic systems, approximate reasoning, and real-world applications.",
		image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
		date: "August 2023",
		type: "Workshop",
		highlights: [
			"Hands-on Training",
			"Industry Cases",
			"Certificate Program",
		],
	},
	{
		title: "Student Research Symposium",
		description:
			"Showcasing outstanding research projects by undergraduate and graduate students in computational intelligence.",
		image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop",
		date: "July 2023",
		type: "Symposium",
		highlights: [
			"30+ Presentations",
			"Best Paper Awards",
			"Industry Judges",
		],
	},
	{
		title: "Tech Talk: Quantum Computing & AI",
		description:
			"Expert talk on the intersection of quantum computing and artificial intelligence by IBM Research.",
		image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop",
		date: "June 2023",
		type: "Tech Talk",
		highlights: ["IBM Research Speaker", "Q&A Session", "200+ Attendees"],
	},
];

const eventCategories: EventCategory[] = [
	{
		title: "Conferences",
		description:
			"International conferences with renowned speakers and cutting-edge research presentations",
		icon: <Users className="h-10 w-10" />,
	},
	{
		title: "Workshops",
		description:
			"Hands-on learning experiences with practical implementation and real-world applications",
		icon: <Calendar className="h-10 w-10" />,
	},
	{
		title: "Webinars",
		description:
			"Online sessions featuring experts sharing insights on latest trends and technologies",
		icon: <Clock className="h-10 w-10" />,
	},
	{
		title: "Hackathons",
		description:
			"Competitive coding events focusing on innovative solutions to real-world challenges",
		icon: <Zap className="h-10 w-10" />,
	},
];

interface EventsPageProps {
	isAdmin: boolean;
}

const EventsPage = ({ isAdmin }: EventsPageProps) => {
	const [events, setEvents] = useState<Event[]>([]);
	const [showAddDialog, setShowAddDialog] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState<string | null>(
		null
	);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	// Memoized filtered events
	const filteredEvents = useMemo(() => {
		if (!selectedCategory) return events;
		return events.filter(
			(event) =>
				event.type.toLowerCase() === selectedCategory.toLowerCase()
		);
	}, [events, selectedCategory]);

	useEffect(() => {
		const fetchEvents = async () => {
			try {
				setLoading(true);
				setError(null);
				const response = await fetch("http://localhost:5000/events");

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const data = await response.json();
				console.log(data);
				setEvents(data);
			} catch (error) {
				console.error("Failed to fetch events:", error);
				setError("Failed to load events. Please try again later.");
			} finally {
				setLoading(false);
			}
		};

		fetchEvents();
	}, []);

	const handleDeleteEvent = async (eventId: number) => {
		// Optimistic update
		const originalEvents = events;
		setEvents(events.filter((event) => event.id !== eventId));

		try {
			const response = await fetch(
				`http://localhost:5000/delete-event/${eventId}`,
				{
					method: "DELETE",
				}
			);

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
		} catch (error) {
			console.error("Error deleting event:", error);
			// Revert optimistic update on error
			setEvents(originalEvents);
			setError("Failed to delete event. Please try again.");
		}
	};

	const handleCategoryFilter = (category: string) => {
		setSelectedCategory(selectedCategory === category ? null : category);
	};

	const handleAddEvent = async (newEvent: Omit<Event, "id">) => {
		try {
			const response = await fetch("http://localhost:5000/add-event", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newEvent),
			});

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const savedEvent = await response.json();
			setEvents([...events, savedEvent]);
		} catch (error) {
			console.error("Error adding event:", error);
			setError("Failed to add event. Please try again.");
		}
	};

	if (loading) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-center">
					<div className="w-16 h-16 gradient-purple-glow rounded-full flex items-center justify-center mx-auto mb-4 glow-purple animate-pulse">
						<Calendar className="h-8 w-8 text-primary-foreground" />
					</div>
					<p className="text-muted-foreground">Loading events...</p>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen">
			{/* Error Display */}
			{error && (
				<div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 m-4 rounded-lg">
					{error}
					<button
						onClick={() => setError(null)}
						className="ml-4 underline hover:no-underline"
					>
						Dismiss
					</button>
				</div>
			)}

			{/* Hero Section */}
			<section className="gradient-dark-purple text-cream py-24 px-4 relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-black/20"></div>
				<div className="max-w-7xl mx-auto relative z-10">
					<div className="text-center mb-16 animate-fade-in-up">
						<Badge
							variant="secondary"
							className="mb-6 bg-purple-900/30 text-accent border-accent/30 glow-purple px-6 py-2 text-lg"
						>
							<Calendar className="mr-2 h-4 w-4" />
							Events & Workshops
						</Badge>
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-glow-cream">
							Upcoming Events
						</h1>
						<p className="text-xl text-cream/90 leading-relaxed max-w-3xl mx-auto">
							Join us for exciting workshops, seminars, and
							hands-on projects in computational intelligence and
							AI.
						</p>
					</div>
				</div>
			</section>

			{/* Event Categories */}
			<section className="py-24 px-4">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16 animate-fade-in-up">
						<h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow-cream">
							Event Categories
						</h2>
						<p className="text-xl text-muted-foreground leading-relaxed">
							We organize diverse events to cater to different
							interests and skill levels
						</p>
					</div>

					{isAdmin && (
						<div className="flex justify-end">
							<Button
								className="gradient-purple-glow hover:glow-purple-intense transition-all duration-300 hover:scale-105 mb-10 mr-10"
								onClick={() => setShowAddDialog(true)}
							>
								+ Add Event
							</Button>
						</div>
					)}

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{eventCategories.map((category, index) => (
							<Card
								key={index}
								className={`text-center glass border-accent/20 hover-glow hover-scale transition-all duration-500 animate-fade-in-up cursor-pointer ${
									selectedCategory === category.title
										? "ring-2 ring-accent/50 glow-purple"
										: ""
								}`}
								style={{ animationDelay: `${index * 0.2}s` }}
								onClick={() =>
									handleCategoryFilter(category.title)
								}
							>
								<CardContent className="p-8">
									<div className="w-24 h-24 gradient-purple-glow rounded-full flex items-center justify-center mx-auto mb-6 glow-purple animate-float">
										<div className="text-accent">
											{category.icon}
										</div>
									</div>
									<h3 className="font-semibold mb-4 text-xl text-glow-cream">
										{category.title}
									</h3>
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
							{selectedCategory
								? `${selectedCategory} Events`
								: "Featured Events"}
						</h2>
						{selectedCategory && (
							<Button
								variant="outline"
								onClick={() => setSelectedCategory(null)}
								className="border-accent/30 text-accent hover:bg-accent/10"
							>
								Show All Events
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
												src={`http://localhost:5000/images/${event.image}`}
												alt={event.title}
												className="w-full h-full object-cover rounded-lg"
												loading="lazy"
											/>
										) : null}
										<div
											className={`w-16 h-16 gradient-purple-glow rounded-full flex items-center justify-center glow-purple ${
												event.image ? "hidden" : ""
											}`}
										>
											<Calendar className="h-8 w-8 text-primary-foreground" />
										</div>
									</div>

									<div className="space-y-3">
										<div className="flex items-center justify-between">
											<Badge
												variant="secondary"
												className="bg-accent/20 text-accent"
											>
												{event.type}
											</Badge>
										</div>

										<h3 className="text-xl font-semibold text-glow-cream">
											{event.title}
										</h3>
										<p className="text-muted-foreground text-sm leading-relaxed">
											{event.description}
										</p>

										<div className="flex justify-between items-center pt-4">
											{isAdmin && (
												<Button
													variant="destructive"
													size="sm"
													onClick={() =>
														handleDeleteEvent(
															event.id
														)
													}
												>
													Delete
												</Button>
											)}
											<Button
												className="gradient-purple-glow hover:glow-purple-intense transition-all duration-300 hover:scale-105 ml-auto"
												onClick={() =>
													window.open(
														event.link,
														"_blank"
													)
												}
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
					{filteredEvents.length === 0 && !loading && (
						<div className="text-center py-16 animate-fade-in-up">
							<div className="w-24 h-24 gradient-purple-glow rounded-full flex items-center justify-center mx-auto mb-6 glow-purple">
								<Calendar className="h-12 w-12 text-primary-foreground" />
							</div>
							<h3 className="text-2xl font-semibold mb-4 text-glow-cream">
								No Events Found
							</h3>
							<p className="text-muted-foreground max-w-md mx-auto">
								{selectedCategory
									? `No ${selectedCategory} events scheduled at the moment.`
									: "We're currently planning our next events. Check back soon for exciting workshops and seminars!"}
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
						<h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow-cream">
							Past Events
						</h2>
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
										loading="lazy"
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
										<span className="text-sm text-muted-foreground">
											{event.date}
										</span>
									</div>
									<CardTitle className="text-xl text-glow-cream">
										{event.title}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-muted-foreground mb-6 leading-relaxed">
										{event.description}
									</p>

									<div className="space-y-3">
										{event.highlights.map(
											(highlight, idx) => (
												<div
													key={idx}
													className="flex items-center p-2 glass rounded-lg"
												>
													<ArrowRight className="h-4 w-4 text-accent mr-3 flex-shrink-0 glow-purple" />
													<span className="text-sm text-muted-foreground">
														{highlight}
													</span>
												</div>
											)
										)}
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
							Don't miss out on our upcoming events! Follow us on
							social media and subscribe to our newsletter for the
							latest updates.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
							<Button className="gradient-purple-glow hover:glow-purple-intense transition-all duration-300 hover:scale-105 neon-border px-8 py-3 text-lg">
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

			<AddEventDialog
				open={showAddDialog}
				onClose={() => setShowAddDialog(false)}
				onAddEvent={handleAddEvent}
			/>
		</div>
	);
};

export default EventsPage;
