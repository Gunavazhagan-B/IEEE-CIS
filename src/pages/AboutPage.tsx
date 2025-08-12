import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Users, Award, Brain, Target, Globe, Linkedin, Github, CheckCircle } from 'lucide-react';
import type { MemberGroups } from '../types';
import membersData from "./members.json";
import { Instagram } from 'lucide-react';


const AboutPage = () => {
	const memberGroups: MemberGroups = membersData; 
    // const placeholderImage = "https://via.placeholder.com/150";
    
	// const coreTeam = [
	// 	{
	// 		name: "Alex Johnson",
	// 		role: "Chapter President",
	// 		image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
	// 		linkedin: "https://linkedin.com/in/alexjohnson",
	// 		github: "https://github.com/alexjohnson",
	// 		email: "alex.johnson@college.edu",
	// 	},
	// 	{
	// 		name: "Sarah Chen",
	// 		role: "Vice President",
	// 		image: "https://images.unsplash.com/photo-1494790108755-2616b2e67ad8?w=300&h=300&fit=crop",
	// 		linkedin: "https://linkedin.com/in/sarahchen",
	// 		github: "https://github.com/sarahchen",
	// 		email: "sarah.chen@college.edu",
	// 	},
	// 	{
	// 		name: "Michael Rodriguez",
	// 		role: "Technical Lead",
	// 		image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
	// 		linkedin: "https://linkedin.com/in/michaelrodriguez",
	// 		github: "https://github.com/mrodriguez",
	// 		email: "michael.rodriguez@college.edu",
	// 	},
	// 	{
	// 		name: "Emily Zhang",
	// 		role: "Events Coordinator",
	// 		image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
	// 		linkedin: "https://linkedin.com/in/emilyzhang",
	// 		github: "https://github.com/emilyzhang",
	// 		email: "emily.zhang@college.edu",
	// 	},
	// 	{
	// 		name: "David Kim",
	// 		role: "Research Coordinator",
	// 		image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
	// 		linkedin: "https://linkedin.com/in/davidkim",
	// 		github: "https://github.com/davidkim",
	// 		email: "david.kim@college.edu",
	// 	},
	// 	{
	// 		name: "Lisa Thompson",
	// 		role: "Outreach Manager",
	// 		image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop",
	// 		linkedin: "https://linkedin.com/in/lisathompson",
	// 		github: "https://github.com/lisathompson",
	// 		email: "lisa.thompson@college.edu",
	// 	},
	// ];

	const coreActivities = [
		{
			title: "Research & Development",
			description:
				"Conducting cutting-edge research in neural networks, evolutionary computation, and fuzzy systems.",
			icon: <Brain className="h-8 w-8" />,
		},
		{
			title: "Educational Workshops",
			description:
				"Regular workshops on AI, machine learning, and computational intelligence techniques.",
			icon: <Users className="h-8 w-8" />,
		},
		{
			title: "Industry Collaboration",
			description:
				"Partnerships with leading tech companies for internships and real-world projects.",
			icon: <Globe className="h-8 w-8" />,
		},
		{
			title: "Conference Organization",
			description:
				"Hosting international conferences and symposiums on computational intelligence.",
			icon: <Award className="h-8 w-8" />,
		},
	];

	const membershipBenefits = [
		"Access to exclusive workshops and seminars",
		"Networking opportunities with industry professionals",
		"Research collaboration opportunities",
		"Access to IEEE digital library and resources",
		"Certificate programs and skill development",
		"Mentorship from senior members and faculty",
		"Priority registration for conferences and events",
		"Career guidance and placement assistance",
	];

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="gradient-dark-purple text-cream py-24 px-4 relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-black/20"></div>
				<div className="max-w-7xl mx-auto relative z-10">
					<div className="text-center mb-16 animate-fade-in-up">
						{/* <Badge
							variant="secondary"
							className="mb-6 bg-purple-900/30 text-accent border-accent/30 glow-purple px-6 py-2 text-lg"
						>
							About Us
						</Badge> */}
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-glow-cream">
							IEEE Computational Intelligence Society
						</h1>
						<p className="text-xl text-cream/90 leading-relaxed max-w-3xl mx-auto">
							A dynamic community of students passionate about
							artificial intelligence, machine learning, and
							intelligent systems.
						</p>
					</div>
				</div>
			</section>

			{/* Mission and Vision Section */}
			<section className="py-24 px-4">
				<div className="max-w-7xl mx-auto">
					<div className="grid lg:grid-cols-2 gap-12">
						<Card className="glass border-accent/20 glow-purple hover-glow transition-all duration-500 animate-slide-in-left">
							<CardHeader>
								<CardTitle className="flex items-center gap-4 text-2xl">
									<div className="w-12 h-12 gradient-purple-glow rounded-full flex items-center justify-center glow-purple">
										<Target className="h-6 w-6 text-accent" />
									</div>
									<span className="text-glow-cream">
										Our Mission
									</span>
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-lg text-muted-foreground leading-relaxed">
									Advance the theory, design, and application
									of biologically and linguistically motivated
									computational paradigms including neural
									networks, connectionist systems, genetic
									algorithms, evolutionary programming, fuzzy
									systems, and hybrid intelligent systems.
								</p>
							</CardContent>
						</Card>

						<Card className="glass border-accent/20 glow-purple hover-glow transition-all duration-500 animate-slide-in-right">
							<CardHeader>
								<CardTitle className="flex items-center gap-4 text-2xl">
									<div className="w-12 h-12 gradient-purple-glow rounded-full flex items-center justify-center glow-purple">
										<Globe className="h-6 w-6 text-accent" />
									</div>
									<span className="text-glow-cream">
										Our Vision
									</span>
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-lg text-muted-foreground leading-relaxed">
									To be the leading global community for
									computational intelligence, fostering
									innovation through research, education, and
									collaboration that addresses real-world
									challenges and creates a positive impact on
									society.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Global and Local Impact Section */}
			<section className="py-24 glass-intense px-4 relative overflow-hidden">
				<div className="absolute inset-0 gradient-purple-glow opacity-10"></div>
				<div className="max-w-7xl mx-auto relative z-10">
					<div className="text-center mb-16 animate-fade-in-up">
						<h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow-cream">
							Our Impact
						</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
							Making a difference both globally and locally
							through research, education, and innovation
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-12">
						<Card className="glass border-accent/20 glow-purple hover-glow transition-all duration-500 animate-slide-in-left">
							<CardHeader>
								<CardTitle className="flex items-center gap-4 text-2xl">
									<div className="w-12 h-12 gradient-purple-glow rounded-full flex items-center justify-center glow-purple animate-pulse-glow">
										<Globe className="h-6 w-6 text-accent" />
									</div>
									<span className="text-glow-cream">
										Global Impact
									</span>
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-6">
								{[
									"Contributing to IEEE's global network of 420,000+ members",
									"Publishing research in top-tier international journals",
									"Collaborating with researchers from 160+ countries",
									"Setting standards for AI and computational intelligence",
								].map((item, index) => (
									<div
										key={index}
										className="flex items-start space-x-4 p-3 glass rounded-lg hover-glow transition-all duration-300"
									>
										<CheckCircle className="h-6 w-6 text-accent mt-0.5 flex-shrink-0 glow-purple" />
										<p className="text-muted-foreground leading-relaxed">
											{item}
										</p>
									</div>
								))}
							</CardContent>
						</Card>

						<Card className="glass border-accent/20 glow-purple hover-glow transition-all duration-500 animate-slide-in-right">
							<CardHeader>
								<CardTitle className="flex items-center gap-4 text-2xl">
									<div className="w-12 h-12 gradient-purple-glow rounded-full flex items-center justify-center glow-purple animate-pulse-glow">
										<Users className="h-6 w-6 text-accent" />
									</div>
									<span className="text-glow-cream">
										Local Impact
									</span>
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-6">
								{[
									"Training 500+ students annually in AI and ML",
									"Partnering with local tech companies for internships",
									"Organizing community outreach programs",
									"Supporting local entrepreneurship in AI startups",
								].map((item, index) => (
									<div
										key={index}
										className="flex items-start space-x-4 p-3 glass rounded-lg hover-glow transition-all duration-300"
									>
										<CheckCircle className="h-6 w-6 text-accent mt-0.5 flex-shrink-0 glow-purple" />
										<p className="text-muted-foreground leading-relaxed">
											{item}
										</p>
									</div>
								))}
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Core Activities Section */}
			<section className="py-24 px-4">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16 animate-fade-in-up">
						<h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow-cream">
							Core Activities
						</h2>
						<p className="text-xl text-muted-foreground leading-relaxed">
							Driving innovation through diverse programs and
							initiatives
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{coreActivities.map((activity, index) => (
							<Card
								key={index}
								className="text-center glass border-accent/20 hover-glow hover-scale transition-all duration-500 animate-fade-in-up"
								style={{ animationDelay: `${index * 0.2}s` }}
							>
								<CardContent className="p-8">
									<div className="w-20 h-20 gradient-purple-glow rounded-full flex items-center justify-center mx-auto mb-6 glow-purple animate-float">
										<div className="text-accent">
											{activity.icon}
										</div>
									</div>
									<h3 className="font-semibold mb-4 text-lg text-glow-cream">
										{activity.title}
									</h3>
									<p className="text-muted-foreground leading-relaxed">
										{activity.description}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Meet Our Team Section - Modified */}
			<section className="py-24 glass-intense px-4 relative overflow-hidden">
				<div className="absolute inset-0 gradient-purple-glow opacity-10"></div>
				<div className="max-w-7xl mx-auto relative z-10">
					<div className="text-center mb-16 animate-fade-in-up">
						<h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow-cream">
							Meet Our Team
						</h2>
						<p className="text-xl text-muted-foreground leading-relaxed">
							Passionate leaders driving our mission forward
						</p>
					</div>

					{/* Dynamically render member groups */}
					{Object.entries(memberGroups).map(
						([groupName, members], groupIndex) => (
							<div
								key={groupName}
								className="mb-16"
							>
								<h3 className="text-2xl md:text-3xl font-bold mb-8 text-glow-cream text-center">
									{groupName}
								</h3>
								<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
									{members.map((member, index) => (
										<Card
											key={`${groupName}-${index}`}
											className="text-center overflow-hidden glass border-accent/20 hover-glow hover-scale transition-all duration-500 animate-fade-in-up"
											style={{
												animationDelay: `${
													(groupIndex *
														members.length +
														index) *
													0.1
												}s`,
											}}
										>
											<CardContent className="p-8">
												<div className="relative mb-6">
													<div className="absolute inset-0 gradient-purple-glow rounded-full glow-purple opacity-50 animate-pulse-glow"></div>
													{member.Photo === "" && (
														<img
															src="./deafult_pfp.jpg"
															className="w-28 h-28 rounded-full mx-auto object-cover relative z-10 border-2 border-accent/30 bg-gray"
														/>
													)}
													{member.Photo !== "" && (
														<img
															src={member.Photo}
															alt={member.Name}
															className="w-28 h-28 rounded-full mx-auto object-cover relative z-10 border-2 border-accent/30"
														/>
													)}
													<Badge
														variant="secondary"
														className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-accent/20 text-accent border-accent/30 glow-purple"
													>
														{member.Role}
													</Badge>
												</div>

												<h3 className="font-semibold mb-2 text-lg text-glow-cream">
													{member.Name}
												</h3>

												<div className="flex justify-center space-x-4">
													{member["LinkedIn ID"] && (
														<a
															href={
																member[
																	"LinkedIn ID"
																]
															}
															target="_blank"
															rel="noopener noreferrer"
															className="text-muted-foreground hover:text-[#0A66C2] transition-all duration-300 hover-glow p-2 rounded-full glass"
														>
															<Linkedin className="h-5 w-5" />
														</a>
													)}
													{member.Github && (
														<a
															href={member.Github}
															target="_blank"
															rel="noopener noreferrer"
															className="text-muted-foreground hover:text-gray-800 transition-all duration-300 hover-glow p-2 rounded-full glass"
														>
															<Github className="h-5 w-5" />
														</a>
													)}
													{member["Insta ID"] &&
														!member[
															"Insta ID"
														].includes("NIL") && (
															<a
																href={`https://instagram.com/${member["Insta ID"]}`}
																target="_blank"
																rel="noopener noreferrer"
																className="text-muted-foreground hover:text-[#E1306C] transition-all duration-300 hover-glow p-2 rounded-full glass"
															>
																<Instagram className="h-5 w-5" />
															</a>
														)}
												</div>
											</CardContent>
										</Card>
									))}
								</div>
							</div>
						)
					)}

					{/* Group Photo */}
					{/* <Card className="overflow-hidden glass border-accent/20 glow-purple hover-glow transition-all duration-500 animate-fade-in-up">
						<div className="relative">
							<img
								src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=400&fit=crop"
								alt="IEEE CIS Team Group Photo"
								className="w-full h-80 object-cover transition-transform duration-500 hover:scale-105"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
						</div>
						<CardContent className="p-8 text-center">
							<h3 className="text-2xl font-semibold mb-4 text-glow-cream">
								Our Amazing Team
							</h3>
							<p className="text-lg text-muted-foreground leading-relaxed">
								Together, we're building the future of
								computational intelligence
							</p>
						</CardContent>
					</Card> */}
				</div>
			</section>

			{/* Membership Benefits Section */}
			<section className="py-24 px-4">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16 animate-fade-in-up">
						<h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow-cream">
							Membership Benefits
						</h2>
						<p className="text-xl text-muted-foreground leading-relaxed">
							Join us and unlock exclusive opportunities for
							growth and learning
						</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div className="animate-slide-in-left">
							<div className="space-y-6 mb-12">
								{membershipBenefits.map((benefit, index) => (
									<div
										key={index}
										className="flex items-start space-x-4 p-4 glass rounded-lg hover-glow transition-all duration-300"
									>
										<CheckCircle className="h-6 w-6 text-accent mt-0.5 flex-shrink-0 glow-purple" />
										<p className="text-lg text-muted-foreground leading-relaxed">
											{benefit}
										</p>
									</div>
								))}
							</div>

							<div className="space-y-6">
								<a
									className="gradient-purple-glow hover:glow-purple-intense transition-all duration-500 hover:scale-105 px-8 py-4 text-lg w-full sm:w-auto neon-border rounded-lg"
									href="https://www.ieee.org/membership/join"
								>
									{/* <Zap className="mr-2 h-5 w-5" /> */}
									Become a Member
								</a>
								<p className="text-muted-foreground leading-relaxed">
									Ready to join our community? Click above to
									start your journey with IEEE CIS.
								</p>
							</div>
						</div>

						<div className="relative animate-slide-in-right">
							<div className="absolute inset-0 gradient-purple-glow rounded-2xl glow-purple-intense opacity-30 animate-pulse-glow"></div>
							<img
								src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
								alt="Team collaboration and networking"
								className="w-full h-96 object-cover rounded-2xl shadow-deep relative z-10 hover-scale transition-transform duration-500"
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AboutPage;