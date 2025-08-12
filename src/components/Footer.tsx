
const Footer = () => {
  return (
		<footer className="glass-intense border-t border-accent/20 py-16 px-4 relative overflow-hidden">
			<div className="absolute inset-0 gradient-purple-glow opacity-5"></div>
			<div className="max-w-7xl mx-auto relative z-10">
				<div className="grid md:grid-cols-4 gap-12">
					<div className="animate-fade-in-up">
						<div className="flex items-center space-x-3 mb-6">
							<div className="w-12 h-12 gradient-purple-glow rounded-full flex items-center justify-center glow-purple">
								<span className="text-primary-foreground font-bold text-glow">
									IEEE
								</span>
							</div>
							<div>
								<h3 className="font-semibold text-lg text-glow-cream">
									IEEE CIS
								</h3>
								<p className="text-sm text-muted-foreground">
									Rajalakshmi Engineering College
								</p>
							</div>
						</div>
						<p className="text-muted-foreground leading-relaxed">
							Advancing computational intelligence through
							research, education, and innovation.
						</p>
					</div>

					<div className="animate-fade-in-up animate-delay-200">
						<h4 className="font-semibold mb-6 text-lg text-glow-cream">
							Connect
						</h4>
						<div className="space-y-4">
							<div className="flex items-center p-3 glass rounded-lg hover-glow transition-all duration-300">
								<span className="mr-3">📧</span>
								<a className="text-muted-foreground" href="https://mail.google.com/mail/?view=cm&fs=1&to=ieee.cis@rajalakshmi.edu.in">
									Email
								</a>
							</div>
							<div className="flex items-center p-3 glass rounded-lg hover-glow transition-all duration-300">
								<span className="mr-3">🔗</span>
								<a className="text-muted-foreground" href="https://linkedin.com/company/ieee-cis-rec">
									LinkedIn
								</a>
							</div>
							<div className="flex items-center p-3 glass rounded-lg hover-glow transition-all duration-300">
								<span className="mr-3">📱</span>
								<a className="text-muted-foreground" href="https://instagram.com/ieee_cis_rec ">
									Instagram
								</a>
							</div>
						</div>
					</div>

					<div className="animate-fade-in-up animate-delay-300">
						<h4 className="font-semibold mb-6 text-lg text-glow-cream">
							IEEE Resources
						</h4>
						<div className="space-y-3">
							{[
								{
									label: "IEEE.org",
									href: "https://ieee.org",
								},
								{
									label: "IEEE CIS Society",
									href: "https://cis.ieee.org",
								},
								{
									label: "IEEE Xplore",
									href: "https://ieeexplore.ieee.org",
								},
							].map((link) => (
								<a
									key={link.href}
									href={link.href}
									className="block text-muted-foreground hover:text-accent transition-all duration-300 hover-glow p-2 rounded-lg"
									target="_blank"
									rel="noopener noreferrer"
								>
									{link.label}
								</a>
							))}
						</div>
					</div>
				</div>

				<div className="border-t border-accent/20 mt-12 pt-8 text-center animate-fade-in-up animate-delay-400">
					<p className="text-muted-foreground">
						&copy; 2024 IEEE Computational Intelligence Society -
						Rajalakshmi Engineering College. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
  );
}

export default Footer