

const JoinPage = () => {
	return (
		<div className="min-h-screen py-24 px-4">
			<div className="max-w-4xl mx-auto text-center">
				<div className="gradient-dark-purple text-cream py-16 px-8 rounded-2xl glow-purple-intense glass-intense shadow-deep animate-fade-in-up">
					<div className="w-20 h-20 gradient-purple-glow rounded-full flex items-center justify-center mx-auto mb-8 glow-purple animate-float">
						<span className="text-2xl font-bold text-glow">✨</span>
					</div>
					<h1 className="text-4xl md:text-5xl font-bold mb-8 text-glow-cream">
						Join IEEE CIS
					</h1>
					<p className="text-xl mb-12 text-cream/90 leading-relaxed max-w-2xl mx-auto">
						Ready to be part of our innovative society? Join us and
						start your journey with computational intelligence.
					</p>
					<div className="text-center flex justify-center items-center">
						<a
							className="gradient-purple-glow hover:glow-purple-intense transition-all duration-500 hover:scale-105 px-8 py-4 text-lg w-full sm:w-auto neon-border rounded-lg"
							href="https://www.ieee.org/membership/join"
						>
							Become a Member
							{/* <Zap className="mr-2 h-5 w-5" /> */}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default JoinPage;
