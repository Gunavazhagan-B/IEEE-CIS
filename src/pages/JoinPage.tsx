

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
						Ready to be part of our innovative community? Contact us
						to learn more about membership opportunities and start
						your journey with computational intelligence.
					</p>
					<div className="grid md:grid-cols-3 gap-8 text-center">
						<div className="p-6 glass rounded-lg hover-glow transition-all duration-300">
							<h3 className="font-semibold mb-3 text-lg text-glow-cream">
								📧 Email
							</h3>
							<p className="text-cream/80">ieee.cis@rec.edu</p>
						</div>
						<div className="p-6 glass rounded-lg hover-glow transition-all duration-300">
							<h3 className="font-semibold mb-3 text-lg text-glow-cream">
								🔗 LinkedIn
							</h3>
							<p className="text-cream/80">
								/company/ieee-cis-rec
							</p>
						</div>
						<div className="p-6 glass rounded-lg hover-glow transition-all duration-300">
							<h3 className="font-semibold mb-3 text-lg text-glow-cream">
								📱 Instagram
							</h3>
							<p className="text-cream/80">@ieee_cis_rec</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default JoinPage;
