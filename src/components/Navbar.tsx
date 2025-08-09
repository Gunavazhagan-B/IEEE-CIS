import React from "react";

type NavbarProps = {
    currentPage: string;
    setCurrentPage: React.Dispatch<React.SetStateAction<string>>
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
	// Navigation handler
	const handleNavigation = (page: React.SetStateAction<string>) => {
		setCurrentPage(page);
		window.history.pushState(null, "", page === "home" ? "/" : `/${page}`);
	};

	return (
		<div className="navbar">
			<div className="nav-container">
				<div
					className="logo"
					onClick={() => handleNavigation("home")}
				>
					IEEE CIS
				</div>
				<div className="nav-links">
					<button
						className={`nav-link ${
							currentPage === "events" ? "active" : ""
						}`}
						onClick={() => handleNavigation("events")}
					>
						Events
					</button>
					<button
						className={`nav-link ${
							currentPage === "about" ? "active" : ""
						}`}
						onClick={() => handleNavigation("about")}
					>
						About
					</button>
					<button
						className={`nav-link ${
							currentPage === "contact" ? "active" : ""
						}`}
						onClick={() => handleNavigation("contact")}
					>
						Contact
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
