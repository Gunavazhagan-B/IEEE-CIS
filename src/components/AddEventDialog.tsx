import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type EventType = {
	id: number;
	title: string;
	description: string;
	image: string;
	link: string;
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
		link: "",
		type: "Workshop",
	});

	const [imageFile, setImageFile] = useState<File | null>(null);

	const handleImageUpload = async (file: File): Promise<string | null> => {
		const formData = new FormData();
		formData.append("image", file);

		try {
			const res = await fetch("http://localhost:5000/upload-image", {
				method: "POST",
				body: formData,
			});
			const data = await res.json();
			return data.filename;
		} catch (err) {
			console.error("Image upload failed:", err);
			return null;
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (
			formData.title &&
			formData.description &&
			formData.link &&
			imageFile
		) {
			const uploadedImage = await handleImageUpload(imageFile);
			if (!uploadedImage) {
				alert("Image upload failed. Try again.");
				return;
			}

			const newEvent: EventType = {
				id: Date.now(),
				title: formData.title,
				description: formData.description,
				image: uploadedImage,
                link: formData.link,
                type: formData.type
			};
			onAddEvent(newEvent);
			setFormData({
				title: "",
				description: "",
				link: "",
				type: "Workshop",
			});
			onClose();
		}
	};

	if (!open) return null;

	return (
		<div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
			<Card className="w-full max-w-2xl glass-intense border-accent/20 shadow-deep">
				<CardHeader>
					<CardTitle className="text-2xl font-bold text-glow-cream">
						Add New Event
					</CardTitle>
				</CardHeader>
				<CardContent>
					<form
						onSubmit={handleSubmit}
						className="space-y-4"
					>
						<div className="grid md:grid-cols-2 gap-4">
							<div className="space-y-2">
								<label className="text-sm font-medium text-glow-cream">
									Event Title
								</label>
								<input
									type="text"
									placeholder="Enter event title"
									value={formData.title}
									onChange={(e) =>
										setFormData({
											...formData,
											title: e.target.value,
										})
									}
									className="w-full p-3 bg-background border border-accent/20 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
									required
								/>
							</div>
							<div className="space-y-2">
								<label className="text-sm font-medium text-glow-cream">
									Event Type
								</label>
								<select
									value={formData.type}
									onChange={(e) =>
										setFormData({
											...formData,
											type: e.target.value,
										})
									}
									className="w-full p-3 bg-black border border-accent/20 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
									required
								>
									<option value="Workshop">Workshop</option>
									<option value="Conference">
										Conference
									</option>
									<option value="Webinar">Webinar</option>
									<option value="Hackathon">Hackathon</option>
									<option value="Panel">Panel</option>
									<option value="Tech Talk">Tech Talk</option>
									<option value="Symposium">Symposium</option>
								</select>
							</div>
						</div>

						<div className="space-y-2">
							<label className="text-sm font-medium text-glow-cream">
								Description
							</label>
							<textarea
								placeholder="Enter event description"
								value={formData.description}
								onChange={(e) =>
									setFormData({
										...formData,
										description: e.target.value,
									})
								}
								rows={3}
								className="w-full p-3 bg-background border border-accent/20 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
								required
							/>
						</div>

						<div className="grid md:grid-cols-2 gap-4">
							<div className="space-y-2">
								<label className="text-sm font-medium text-glow-cream">
									Image URL
								</label>
								<input
									type="file"
									accept="image/*"
									placeholder="Upload Event Poster"
									onChange={(e) => {
										const file = e.target.files?.[0];
										if (file) {
											setImageFile(file);
										}
									}}
									className="w-full p-3 bg-background border border-accent/20 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
									required
								/>
							</div>
							<div className="space-y-2">
								<label className="text-sm font-medium text-glow-cream">
									Registration Link
								</label>
								<input
									type="url"
									placeholder="Enter registration link"
									value={formData.link}
									onChange={(e) =>
										setFormData({
											...formData,
											link: e.target.value,
										})
									}
									className="w-full p-3 bg-background border border-accent/20 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
									required
								/>
							</div>
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
