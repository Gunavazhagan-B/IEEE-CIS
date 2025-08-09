import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type EventType = {
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
};

type AddEventDialogProps = {
	open: boolean;
	onClose: () => void;
	onAddEvent: (event: EventType) => void;
};

const AddEventDialog = ({ open, onClose, onAddEvent }: AddEventDialogProps) => {
	const [formData, setFormData] = useState({
		title: "",
		description: "",
		image: "",
		link: "",
		date: "",
		time: "",
		location: "",
		capacity: 0,
		registered: 0,
		type: "Workshop",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (
			formData.title &&
			formData.description &&
			formData.image &&
			formData.link &&
			formData.date &&
			formData.time &&
			formData.location &&
			formData.capacity > 0
		) {
			onAddEvent({
				...formData,
				id: Date.now(),
			});
			setFormData({ 
				title: "", 
				description: "", 
				image: "", 
				link: "", 
				date: "", 
				time: "", 
				location: "", 
				capacity: 0, 
				registered: 0,
				type: "Workshop"
			});
			onClose();
		}
	};

	if (!open) return null;

	return (
		<div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
			<Card className="w-full max-w-2xl glass-intense border-accent/20 shadow-deep">
				<CardHeader>
					<CardTitle className="text-2xl font-bold text-glow-cream">Add New Event</CardTitle>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className="space-y-4">
						<div className="grid md:grid-cols-2 gap-4">
							<div className="space-y-2">
								<label className="text-sm font-medium text-glow-cream">Event Title</label>
								<input
									type="text"
									placeholder="Enter event title"
									value={formData.title}
									onChange={(e) => setFormData({ ...formData, title: e.target.value })}
									className="w-full p-3 bg-background border border-accent/20 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
									required
								/>
							</div>
							<div className="space-y-2">
								<label className="text-sm font-medium text-glow-cream">Event Type</label>
								<select
									value={formData.type}
									onChange={(e) => setFormData({ ...formData, type: e.target.value })}
									className="w-full p-3 bg-background border border-accent/20 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
									required
								>
									<option value="Workshop">Workshop</option>
									<option value="Conference">Conference</option>
									<option value="Webinar">Webinar</option>
									<option value="Hackathon">Hackathon</option>
									<option value="Panel">Panel</option>
									<option value="Tech Talk">Tech Talk</option>
									<option value="Symposium">Symposium</option>
								</select>
							</div>
						</div>

						<div className="space-y-2">
							<label className="text-sm font-medium text-glow-cream">Description</label>
							<textarea
								placeholder="Enter event description"
								value={formData.description}
								onChange={(e) => setFormData({ ...formData, description: e.target.value })}
								rows={3}
								className="w-full p-3 bg-background border border-accent/20 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
								required
							/>
						</div>

						<div className="grid md:grid-cols-2 gap-4">
							<div className="space-y-2">
								<label className="text-sm font-medium text-glow-cream">Image URL</label>
								<input
									type="url"
									placeholder="Enter image URL"
									value={formData.image}
									onChange={(e) => setFormData({ ...formData, image: e.target.value })}
									className="w-full p-3 bg-background border border-accent/20 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
									required
								/>
							</div>
							<div className="space-y-2">
								<label className="text-sm font-medium text-glow-cream">Registration Link</label>
								<input
									type="url"
									placeholder="Enter registration link"
									value={formData.link}
									onChange={(e) => setFormData({ ...formData, link: e.target.value })}
									className="w-full p-3 bg-background border border-accent/20 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
									required
								/>
							</div>
						</div>

						<div className="grid md:grid-cols-3 gap-4">
							<div className="space-y-2">
								<label className="text-sm font-medium text-glow-cream">Date</label>
								<input
									type="date"
									value={formData.date}
									onChange={(e) => setFormData({ ...formData, date: e.target.value })}
									className="w-full p-3 bg-background border border-accent/20 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
									required
								/>
							</div>
							<div className="space-y-2">
								<label className="text-sm font-medium text-glow-cream">Time</label>
								<input
									type="time"
									value={formData.time}
									onChange={(e) => setFormData({ ...formData, time: e.target.value })}
									className="w-full p-3 bg-background border border-accent/20 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
									required
								/>
							</div>
							<div className="space-y-2">
								<label className="text-sm font-medium text-glow-cream">Capacity</label>
								<input
									type="number"
									placeholder="Enter capacity"
									value={formData.capacity}
									onChange={(e) => setFormData({ ...formData, capacity: parseInt(e.target.value) || 0 })}
									className="w-full p-3 bg-background border border-accent/20 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
									required
									min="1"
								/>
							</div>
						</div>

						<div className="space-y-2">
							<label className="text-sm font-medium text-glow-cream">Location</label>
							<input
								type="text"
								placeholder="Enter event location"
								value={formData.location}
								onChange={(e) => setFormData({ ...formData, location: e.target.value })}
								className="w-full p-3 bg-background border border-accent/20 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
								required
							/>
						</div>

						<div className="flex gap-3 pt-4">
							<Button
								type="button"
								variant="outline"
								onClick={onClose}
								className="flex-1 border-accent/30 text-accent hover:bg-accent/10"
							>
								Cancel
							</Button>
							<Button
								type="submit"
								className="flex-1 gradient-purple-glow hover:glow-purple-intense"
							>
								Add Event
							</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
};

export default AddEventDialog;
