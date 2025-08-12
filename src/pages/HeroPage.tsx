import { useEffect, useRef, useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
	// Calendar,
	Users,
	Award,
	ChevronRight,
	// Sparkles,
	Zap,
	Brain,
} from "lucide-react";

interface HeroPageProps {
	onPageChange?: (page: string) => void;
}

type VantaInstance = { destroy: () => void } | null;

const HeroPage = ({ onPageChange }: HeroPageProps) => {
	const [currentAchievement, setCurrentAchievement] = useState(0);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	const vantaRef = useRef<HTMLDivElement | null>(null);
	const effectRef = useRef<VantaInstance>(null);

	useEffect(() => {
		let mounted = true;
		async function initVanta() {
			try {
				const [{ default: VANTA }, THREE] = await Promise.all([
					import("vanta/dist/vanta.globe.min"),
					import("three"),
				]);

				if (!mounted || !vantaRef.current) return;

				effectRef.current = VANTA({
					el: vantaRef.current,
					THREE,
					mouseControls: true,
					touchControls: true,
					gyroControls: false,
					minHeight: 200.0,
					minWidth: 200.0,
					scale: 0.5,
					scaleMobile: 1.0,
					size: 1.0,
					color: 0x8b5cf6, // purple lines
					backgroundAlpha: 0.0, // keep background transparent so our gradients/glows show
				});
			} catch (e) {
				console.error("Failed to load Vanta Globe:", e);
			}
		}
		initVanta();
		return () => {
			mounted = false;
			if (effectRef.current) {
				effectRef.current.destroy();
				effectRef.current = null;
			}
		};
	}, []);

	const achievements = [
		{
			title: "Flagship Conferences",
			description:
				"Hosts premier events like WCCI, uniting experts in AI and computational intelligence",
			icon: <Award className="h-6 w-6" />,
		},
		{
			title: "Research Publications",
			description:
				"Publishes leading journals and magazines shaping the future of AI",
			icon: <Users className="h-6 w-6" />,
		},
		{
			title: "Global Competitions",
			description:
				"Organizes challenges that inspire innovation and real-world AI solutions.",
			icon: <Brain className="h-6 w-6" />,
		},
		{
			title: "Education & Mentorship",
			description:
				"Provides training, webinars, and guidance for skill growth in AI.",
			icon: <Zap className="h-6 w-6" />,
		},
	];

	// const communityItems = [
	// 	{
	// 		title: "Annual Conference 2023",
	// 		description: "Our team presenting cutting-edge research",
	// 		image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
	// 	},
	// 	{
	// 		title: "AI Workshop",
	// 		description: "Hands-on learning with industry experts",
	// 		image: "https://images.unsplash.com/photo-1543269664-7eef42226a21?w=400&h=300&fit=crop",
	// 	},
	// 	{
	// 		title: "Core Team Meeting",
	// 		description: "Planning the future of our chapter",
	// 		image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&h=300&fit=crop",
	// 	},
	// ];

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentAchievement((prev) => (prev + 1) % achievements.length);
		}, 4000);
		return () => clearInterval(timer);
	}, [achievements.length]);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	return (
		<div className="min-h-screen">
			{/* Floating orbs for ambient effect */}
			<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
				<div
					className="absolute w-64 h-64 rounded-full gradient-purple-glow opacity-20 animate-float"
					style={{
						left: `${mousePosition.x * 0.01}px`,
						top: `${mousePosition.y * 0.01}px`,
						filter: "blur(60px)",
					}}
				/>
				<div
					className="absolute w-96 h-96 rounded-full gradient-purple-glow opacity-10 animate-float"
					style={{
						right: `${mousePosition.x * 0.005}px`,
						bottom: `${mousePosition.y * 0.005}px`,
						filter: "blur(80px)",
						animationDelay: "1s",
					}}
				/>
			</div>

			{/* Hero Section
			<section className="gradient-dark-purple text-cream py-32 px-4 relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-black/20"></div>
				<div className="flex flex-row items-center justify-around">
					<div className="mb-12 animate-fade-in-up">
						<div className="absolute inset-30 w-64 h-64 rounded-full bg-purple-500 blur-3xl opacity-50"></div>
						<img
							src="ieee-logo.svg"
							alt="ieee-logo"
							className="relative z-10 w-1000 h-1000"
						></img>
					</div>
					<div className="">
						<h1 className="text-5xl md:text-5xl font-bold mb-8 text-glow-cream animate-fade-in-up animate-delay-200">
							Advancing Intelligence
							<br />
							<span className="text-glow-cream">
								Through Innovation
							</span>
						</h1>
						<p className="text-xl md:text-2xl mb-12 text-cream/90 leading-relaxed max-w-3xl mx-auto animate-fade-in-up animate-delay-300">
							Empowering students to push the boundaries of
							computational intelligence through research,
							education, and collaboration.
						</p>
					</div>
				</div>
			</section> */}

			{/* new Hero section */}
			<section
				id="hero"
				className="relative isolate overflow-hidden text-white min-h-[100svh]"
			>
				{/* Vanta background */}
				<div
					ref={vantaRef}
					className="absolute inset-0 z-0 bg-gradient-to-br from-purple-900 via-purple-800 to-black"
					aria-hidden="true"
				/>

				{/* Brand gradients and a left-side white wash like the preview */}
				<div
					className="absolute inset-0 z-10"
					aria-hidden="true"
				>
					<div className="absolute inset-0 bg-gradient-to-br from-[#2A1B45]/85 via-[#1a122b]/40 to-black/80" />
					{/* White wash coming from left to mimic the preview highlight */}
					<div className="absolute inset-0 bg-[radial-gradient(90%_120%_at_0%_50%,rgba(255,255,255,0.22),transparent_55%)]" />
				</div>

				{/* Content */}
				<div className="relative z-20 container mx-auto min-h-[100svh] px-4">
					<div className="grid min-h-[100svh] grid-cols-1 items-center gap-8 md:grid-cols-12 lg:gap-12">
						{/* Left: Logo - taking up less space and pushed left */}
						<div className="relative flex items-center justify-center md:justify-start md:col-span-4 lg:col-span-4">
							{/* A large radial glow container that exceeds the SVG bounds so the glow fully covers it */}
							<div
								className="pointer-events-none absolute -inset-16 md:-inset-20 lg:-inset-24 rounded-[48px] bg-white/18 blur-3xl"
								aria-hidden="true"
							/>
							{/* Optional subtle purple glows for depth */}
							<div
								className="pointer-events-none absolute -left-10 top-1/2 -translate-y-1/2 h-[28rem] w-[28rem] rounded-full bg-purple-500/30 blur-3xl"
								aria-hidden="true"
							/>
							<div
								className="pointer-events-none absolute -right-8 -bottom-8 h-[20rem] w-[20rem] rounded-full bg-fuchsia-500/20 blur-3xl"
								aria-hidden="true"
							/>
							{/* Constrain width so we can scale the logo responsively */}
							<div className="relative w-[280px] md:w-[320px] lg:w-[400px]">
								{/* Placeholder for IEEE logo */}
								<img
									src="/ieee-logo.svg"
									alt="IEEE Computational Intelligence Society logo"
									width={1200}
									height={600}
									// priority
									className="relative z-10 h-auto w-full [filter:drop-shadow(0_0_22px_rgba(255,255,255,0.55))_drop-shadow(0_0_60px_rgba(255,255,255,0.38))]"
								/>
							</div>
						</div>

						{/* Separator Line */}
						<div className="hidden md:flex md:col-span-1 lg:col-span-1 items-center justify-center">
							<div className="h-32 lg:h-60 w-[2px] bg-white"></div>
						</div>

						{/* Right: Heading with more space for two lines */}
						<div className="md:col-span-7 lg:col-span-7">
							<h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.05] tracking-tight drop-shadow-[0_0_24px_rgba(255,255,255,0.25)]">
								<span className="block">
									Driving Innovation
								</span>
								<span className="block drop-shadow-[0_0_28px_rgba(255,255,255,0.35)]">
									Empowering Intelligence
								</span>
							</h1>
							<p className="mt-6 text-lg md:text-xl lg:text-2xl leading-relaxed text-white/90 max-w-2xl">
								Step into the world of Computational
								Intelligence - Only at REC CIS
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section className="py-24 px-4 relative">
				<div className="max-w-7xl mx-auto">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div className="animate-fade-in-up">
							<h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow-cream">
								What is IEEE CIS?
							</h2>
							<p className="text-lg text-muted-foreground leading-relaxed mb-8">
								The IEEE Computational Intelligence Society
								(CIS) is a professional society of the Institute
								of Electrical and Electronics Engineers is where
								tech gets smarter. We're all about creating
								systems that can think, learn, and adapt,
								inspired by how humans and nature work. From
								AIML to robotics, IEEE CIS bridges the gap
								between theory and real-world impact. <br />It's not
								just a society — it's a community shaping the
								future, where innovation meets impact.
							</p>
							{/* <p className="text-lg text-muted-foreground leading-relaxed mb-8">
								Our society is dedicated to advancing the field
								of artificial intelligence through innovative
								research, education, and collaboration among
								students, academics, and industry professionals.
							</p> */}
							{/* <Button
								onClick={() => onPageChange?.("about")}
								className="gradient-purple-glow hover:glow-purple-intense transition-all duration-300 hover:scale-105 neon-border"
							>
								Learn More About Us
								<ChevronRight className="ml-2 h-4 w-4" />
							</Button> */}
						</div>

						<div className="animate-fade-in-up animate-delay-200">
							<Card className="glass-intense border-accent/20 shadow-deep">
								<CardContent className="p-8">
									<h3 className="text-2xl font-bold mb-6 text-glow-cream">
										Our Mission
									</h3>
									<p className="text-muted-foreground leading-relaxed mb-6">
										To empower students to push the
										boundaries of computational intelligence
										through innovation and collaboration. We
										focus on providing opportunities for
										hands-on learning in areas like Machine
										Learning, Data Science, and IoT, while
										fostering leadership and professional
										growth.
									</p>
									<div className="grid grid-cols-2 gap-4">
										<div className="text-center p-4 glass rounded-lg">
											<div className="w-12 h-12 gradient-purple-glow rounded-full flex items-center justify-center mx-auto mb-2 glow-purple">
												<Brain className="h-6 w-6 text-primary-foreground" />
											</div>
											<p className="text-sm font-medium text-glow-cream">
												AI Research
											</p>
										</div>
										<div className="text-center p-4 glass rounded-lg">
											<div className="w-12 h-12 gradient-purple-glow rounded-full flex items-center justify-center mx-auto mb-2 glow-purple">
												<Users className="h-6 w-6 text-primary-foreground" />
											</div>
											<p className="text-sm font-medium text-glow-cream">
												Collaboration
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Achievements Section */}
			<section className="py-24 px-4 relative overflow-hidden">
				<div className="absolute inset-0 gradient-dark-purple opacity-50"></div>
				<div className="max-w-7xl mx-auto relative z-10">
					<div className="text-center mb-16 animate-fade-in-up">
						<h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow-cream">
							Highlights
						</h2>
						<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
							Hub of Dreamers, Doers and Disruptors
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{achievements.map((achievement, index) => (
							<Card
								key={index}
								className={`glass-intense border-accent/20 shadow-deep transition-all duration-500 hover:scale-105 hover-glow ${
									currentAchievement === index
										? "ring-2 ring-accent/50"
										: ""
								}`}
							>
								<CardContent className="p-6 text-center">
									<div className="w-16 h-16 gradient-purple-glow rounded-full flex items-center justify-center mx-auto mb-4 glow-purple">
										{achievement.icon}
									</div>
									<h3 className="text-lg font-semibold mb-2 text-glow-cream">
										{achievement.title}
									</h3>
									<p className="text-sm text-muted-foreground mb-3">
										{achievement.description}
									</p>
									<Badge
										variant="secondary"
										className="bg-accent/20 text-accent"
									>
										{achievement.year}
									</Badge>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Global Impact Section */}

			<section className="py-24 glass-intense px-4 relative overflow-hidden">
				<div className="absolute inset-0 gradient-purple-glow opacity-10"></div>
				<div className="max-w-7xl mx-auto text-center relative z-10">
					<h2 className="text-4xl md:text-5xl font-bold mb-8 text-glow-cream animate-fade-in-up">
						Global Impact
					</h2>
					<p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-delay-100">
						Over 486,000 members across continents, IEEE CIS is a powerhouse connecting brilliant minds from universities, research labs, and industry leaders to push the boundaries of computational intelligence.
					</p>
					<p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
						We drive the future of AI and machine learning through world-class journals, game-changing conferences, and 
            forward-thinking educational programs — turning today's ideas into tomorrow's breakthroughs.
					</p>
				</div>
			</section>

			{/* Our Community Section */}
			{/* <section className="py-24 px-4">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16 animate-fade-in-up">
						<h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow-cream">
							Our Community
						</h2>
						<p className="text-xl text-muted-foreground">
							Meet the passionate minds driving innovation
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{communityItems.map((item, index) => (
							<Card
								key={index}
								className="overflow-hidden glass border-accent/20 hover-glow hover-scale transition-all duration-500 animate-fade-in-up"
								style={{ animationDelay: `${index * 0.2}s` }}
							>
								<div className="relative">
									<img
										src={item.image}
										alt={item.title}
										className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
								</div>
								<CardContent className="p-6">
									<h3 className="font-semibold mb-2 text-glow-cream text-lg">
										{item.title}
									</h3>
									<p className="text-muted-foreground">
										{item.description}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section> */}

			{/* Contact Section */}
			<section className="py-24 px-4">
				<div className="max-w-4xl mx-auto text-center">
					<div className="gradient-dark-purple text-cream py-16 px-8 rounded-2xl glow-purple-intense glass-intense shadow-deep animate-fade-in-up">
						<h2 className="text-4xl md:text-5xl font-bold mb-8 text-glow-cream">
							Your Future in AI Starts Here.
						</h2>
						<p className="text-xl mb-12 text-cream/90 leading-relaxed max-w-2xl mx-auto">
							Connect with like-minded innovators, access cutting-edge resources, 
            and be part of groundbreaking research in computational intelligence.
						</p>
						<p className="text-xl mb-12 text-cream/90 leading-relaxed max-w-2xl mx-auto">
							Join workshops, participate in global competitions, and collaborate with experts shaping the future of AI.
Expand your skills, grow your network, and make a lasting impact on technology for humanity
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default HeroPage;
