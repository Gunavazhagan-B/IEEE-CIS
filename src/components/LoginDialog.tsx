import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Users, Lock, Eye, EyeOff } from 'lucide-react';

interface LoginDialogProps {
	open: boolean;
	onClose: () => void;
	onLogin: (isAdmin: boolean) => void;
}

const LoginDialog = ({ open, onClose, onLogin }: LoginDialogProps) => {
	const [credentials, setCredentials] = useState({
		username: "",
		password: "",
	});
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState("");

	// IEEE CIS member credentials (in a real app, this would be handled server-side)
	const validCredentials = {
		username: "ieee_cis_admin",
		password: "cis_society_2024"
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setError("");

		if (credentials.username === validCredentials.username && credentials.password === validCredentials.password) {
			onLogin(true);
			setCredentials({ username: "", password: "" });
		} else {
			setError("Invalid credentials. Please use your IEEE CIS member credentials.");
		}
	};

	if (!open) return null;

	return (
		<div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
			<Card className="w-full max-w-md glass-intense border-accent/20 shadow-deep">
				<CardHeader className="text-center">
					<div className="w-16 h-16 gradient-purple-glow rounded-full flex items-center justify-center mx-auto mb-4 glow-purple">
						<Users className="h-8 w-8 text-accent" />
					</div>
					<CardTitle className="text-2xl font-bold text-glow-cream">IEEE CIS Member Login</CardTitle>
					<p className="text-muted-foreground">Access restricted to IEEE CIS Society members only</p>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className="space-y-4">
						{error && (
							<div className="p-3 bg-destructive/20 border border-destructive/30 rounded-lg">
								<p className="text-destructive text-sm">{error}</p>
							</div>
						)}
						
						<div className="space-y-2">
							<label className="text-sm font-medium text-glow-cream">Username</label>
							<input
								type="text"
								value={credentials.username}
								onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
								className="w-full p-3 bg-background border border-accent/20 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
								placeholder="Enter your username"
								required
							/>
						</div>
						
						<div className="space-y-2">
							<label className="text-sm font-medium text-glow-cream">Password</label>
							<div className="relative">
								<input
									type={showPassword ? "text" : "password"}
									value={credentials.password}
									onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
									className="w-full p-3 pr-10 bg-background border border-accent/20 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
									placeholder="Enter your password"
									required
								/>
								<button
									type="button"
									onClick={() => setShowPassword(!showPassword)}
									className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-accent"
								>
									{showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
								</button>
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
								<Lock className="mr-2 h-4 w-4" />
								Login
							</Button>
						</div>
					</form>
					
					<div className="mt-6 p-4 glass rounded-lg">
						<p className="text-sm text-muted-foreground text-center">
							<strong>Demo Credentials:</strong><br />
							Username: ieee_cis_admin<br />
							Password: cis_society_2024
						</p>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default LoginDialog;