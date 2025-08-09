import { useState, useEffect } from "react";
import "./App.css";
import LoginDialog from "./components/LoginDialog";
import HeroPage from "./pages/HeroPage";
import AboutPage from "./pages/AboutPage";
import EventsPage from "./pages/EventsPage";
import ContactPage from "./pages/ContactPage";
import { Navigation } from "./components/Navigation";
import Snow from "./components/Snow";
import JoinPage from "./pages/JoinPage";
import Footer from "./components/Footer";

const App = () => {
	const [currentPage, setCurrentPage] = useState("home");
	const [isAdmin, setIsAdmin] = useState(false);
	const [showLoginDialog, setShowLoginDialog] = useState(false);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		if (window.location.pathname === "/admin") {
			setShowLoginDialog(true);
		}
	}, []);

	const renderCurrentPage = () => {
		switch (currentPage) {
			case "about":
				return <AboutPage />;
			case "events":
				return <EventsPage isAdmin={isAdmin} />;
			case "contact":
				return <ContactPage />;
			case "join":
				return <JoinPage />
			default:
				return <HeroPage />;
		}
	};

	// Admin login handler
	const handleAdminLogin = () => {
		setIsAdmin(true);
        setCurrentPage("events");
        setShowLoginDialog(false);
        renderCurrentPage();
	};

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	return (
		<div className="min-h-screen relative overflow-hidden">

			<Snow
				mouseX={mousePosition.x}
				mouseY={mousePosition.y}
			/>

			<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
				<div
					className="absolute w-96 h-96 rounded-full gradient-purple-glow opacity-5"
					style={{
						left: `${mousePosition.x * 0.02}px`,
						top: `${mousePosition.y * 0.02}px`,
						filter: "blur(100px)",
						transition: "all 0.3s ease",
					}}
				/>
				<div
					className="absolute w-64 h-64 rounded-full gradient-purple-glow opacity-10"
					style={{
						right: `${mousePosition.x * 0.01}px`,
						bottom: `${mousePosition.y * 0.01}px`,
						filter: "blur(80px)",
						transition: "all 0.5s ease",
					}}
				/>
			</div>

			<div className="relative z-10">
				<Navigation
					currentPage={currentPage}
					onPageChange={setCurrentPage}
				/>
				<main>{renderCurrentPage()}</main>
				<Footer />
			</div>

			<LoginDialog
				open={showLoginDialog}
				onClose={() => setShowLoginDialog(false)}
				onLogin={handleAdminLogin}
			/>
		</div>
	);
};

export default App;
