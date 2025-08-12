import { useEffect, useState, useMemo } from "react";
import AddEventDialog from "../components/AddEventDialog";
import { Button } from "../components/ui/button";
import {
	Card,
	CardContent,
	// CardHeader,
	// CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Calendar, Users, Clock, Zap } from "lucide-react";

import type { PastEvent } from "../types";
import { PastEvents } from "../components/PastEvents";


interface Event {
	id: number;
	title: string;
	description: string;
	image: string;
	link: string;
	type: string;
}

interface EventCategory {
	title: string;
	description: string;
	icon: React.ReactNode;
}

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
	const [pastEvents, setPastEvents] = useState<PastEvent[]>([]);
	const [showAddDialog, setShowAddDialog] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState<string | null>(
		null
	);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

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

				// const apiResponse = await fetch("http://localhost:5000/events");
				// if (apiResponse.ok) {
				// 	const data = await apiResponse.json();
				// 	setEvents(data);
				// 	return;
				// }

				const localResponse = await fetch("/events.json");
				if (!localResponse.ok)
					throw new Error("Both backend and local fetch failed");

				const localData = await localResponse.json();
				setEvents(localData);
				console.warn("Using fallback local events data");
			} catch (error) {
				console.error("Failed to fetch events:", error);
				setError("Failed to load live data. Showing cached events.");
			} finally {
				setLoading(false);
			}
		};

		fetchEvents();
	}, []);

	useEffect(() => {
		const fetchPastEvents = async () => {
			try {
				const resp = await fetch("/past_event.json");
				const data = await resp.json();
				setPastEvents(data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchPastEvents();
	}, []);

	// Delete event (API only - no local fallback)
	const handleDeleteEvent = async (eventId: number) => {
		const originalEvents = [...events];
		setEvents(events.filter((event) => event.id !== eventId));

		try {
			const response = await fetch(
				`http://localhost:5000/delete-event/${eventId}`,
				{ method: "DELETE" }
			);
			if (!response.ok) throw new Error("Delete failed");
		} catch (error) {
			console.error("Error deleting event:", error);
			setEvents(originalEvents);
			setError("Failed to delete event. Please try again.");
		}
	};

	const handleCategoryFilter = (category: string) => {
		setSelectedCategory(selectedCategory === category ? null : category);
	};

	// Add event (API only - assumes backend is available)
	const handleAddEvent = async (newEvent: Omit<Event, "id">) => {
		try {
			const response = await fetch("http://localhost:5000/add-event", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(newEvent),
			});

			if (!response.ok) throw new Error("Add failed");

			const savedEvent = await response.json();
			setEvents([...events, savedEvent]);
		} catch (error) {
			console.error("Error adding event:", error);
			setError("Failed to add event. Backend might be unavailable.");
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
												// src={`http://localhost:5000/images/${event.image}`}
												src={event.image}
												alt={event.title}
												className="h-full object-cover rounded-lg"
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
			<PastEvents pastEvents={pastEvents} />

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
							<a className="gradient-purple-glow hover:glow-purple-intense transition-all duration-300 hover:scale-105 neon-border px-8 py-3 text-lg " href="https://cis.ieee.org/publications/newsletter">
								Subscribe to Newsletter
							</a>
							{/* <Button
								variant="outline"
								className="border-accent/30 text-accent hover:bg-accent/10 transition-all duration-300 hover:scale-105 px-8 py-3 text-lg"
							>
								Follow Us
							</Button> */}
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
