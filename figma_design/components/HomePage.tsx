import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, Users, Award, ChevronRight, Sparkles, Zap, Brain } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export function HomePage({ onPageChange }: HomePageProps) {
  const [currentAchievement, setCurrentAchievement] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const achievements = [
    {
      title: "Best Student Chapter Award 2023",
      description: "Recognized by IEEE for outstanding contributions to computational intelligence research and education.",
      year: "2023",
      icon: <Award className="h-6 w-6" />
    },
    {
      title: "International Workshop Success",
      description: "Successfully organized an international workshop on AI and Machine Learning with 500+ participants.",
      year: "2023",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Research Publications",
      description: "Our members published 25+ research papers in top-tier IEEE journals and conferences.",
      year: "2022",
      icon: <Brain className="h-6 w-6" />
    },
    {
      title: "Industry Partnerships",
      description: "Established partnerships with leading tech companies for internships and collaborative projects.",
      year: "2022",
      icon: <Zap className="h-6 w-6" />
    }
  ];

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

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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
            filter: 'blur(60px)'
          }}
        />
        <div 
          className="absolute w-96 h-96 rounded-full gradient-purple-glow opacity-10 animate-float"
          style={{
            right: `${mousePosition.x * 0.005}px`,
            bottom: `${mousePosition.y * 0.005}px`,
            filter: 'blur(80px)',
            animationDelay: '1s'
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="gradient-dark-purple text-cream py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-black/20"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-12 animate-fade-in-up">
            <div className="w-32 h-32 gradient-purple-glow rounded-full flex items-center justify-center mx-auto mb-8 glow-purple-intense animate-pulse-glow">
              <span className="text-5xl font-bold text-glow">IEEE</span>
            </div>
            <Badge variant="secondary" className="mb-6 bg-purple-900/30 text-accent border-accent/30 glow-purple px-6 py-2 text-lg animate-fade-in-up animate-delay-100">
              <Sparkles className="mr-2 h-4 w-4" />
              Computational Intelligence Society
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold mb-8 text-glow-cream animate-fade-in-up animate-delay-200">
            Driving Innovation.<br />
            <span className="gradient-cream bg-clip-text text-transparent shimmer"> Empowering Intelligence</span>
          </h1>
          
          <p className="text-xl md:text-3xl mb-12 text-cream/90 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-delay-300">
             Step into the world of computational intelligence<span className="text-accent text-glow"> — only at REC CIS!</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animate-delay-400">
            <Button 
              size="lg" 
              className="gradient-cream text-black hover:glow-cream transition-all duration-500 hover:scale-110 px-8 py-4 text-lg neon-border"
              onClick={() => onPageChange('join')}
            >
              Join Our Community
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-accent text-accent hover:gradient-purple-glow hover:text-cream transition-all duration-500 hover:scale-110 px-8 py-4 text-lg glass-intense"
              onClick={() => onPageChange('events')}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Upcoming Events
            </Button>
          </div>
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-accent rounded-full opacity-60 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </section>

      {/* Scrolling Achievements */}
      <section className="py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow-cream">Our Achievements</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Chasing Big Ideas. Making Bigger Moves.</p>
          </div>
          
          <div className="relative overflow-hidden glass-intense rounded-2xl glow-purple shadow-purple-xl">
            <div className="flex transition-transform duration-1000 ease-in-out"
                 style={{ transform: `translateX(-${currentAchievement * 100}%)` }}>
              {achievements.map((achievement, index) => (
                <Card key={index} className="min-w-full glass border-accent/20">
                  <CardContent className="p-12 text-center">
                    <div className="w-20 h-20 gradient-purple-glow rounded-full flex items-center justify-center mx-auto mb-6 glow-purple animate-float">
                      <div className="text-accent">{achievement.icon}</div>
                    </div>
                    <Badge variant="outline" className="mb-6 border-accent text-accent glow-purple">{achievement.year}</Badge>
                    <h3 className="text-3xl font-bold mb-6 text-glow-cream">{achievement.title}</h3>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="flex justify-center mt-8 space-x-3">
              {achievements.map((_, index) => (
                <button
                  key={index}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentAchievement 
                      ? 'bg-accent glow-purple scale-125' 
                      : 'bg-muted hover:bg-accent/50'
                  }`}
                  onClick={() => setCurrentAchievement(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What is IEEE CIS */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-glow-cream">What is IEEE CIS?</h2>
              <p className="text-xl mb-8 text-muted-foreground leading-relaxed">
                The IEEE Computational Intelligence Society (CIS) is a professional society of the Institute of 
                Electrical and Electronics Engineers is where tech gets smarter. We’re all about creating systems that 
                can think, learn, and adapt, inspired by how humans and nature work. From AIML to robotics, IEEE CIS 
                bridges the gap between theory and real-world impact.
                It’s not just a society — it’s a community shaping the future, where innovation meets impact.
              </p>
              
              <div className="space-y-6 mb-10">
                {[
                  "Neural Networks and Deep Learning",
                  "Evolutionary Computation and Genetic Algorithms", 
                  "Fuzzy Systems and Approximate Reasoning"
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-4 p-4 glass rounded-lg hover-glow transition-all duration-300"
                  >
                    <div className="w-3 h-3 bg-accent rounded-full glow-purple animate-pulse"></div>
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </div>
              
              <Button 
                onClick={() => onPageChange('about')} 
                className="gradient-purple-glow hover:glow-purple-intense transition-all duration-500 hover:scale-105 px-8 py-4 text-lg neon-border"
              >
                Learn More About Us
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="relative animate-slide-in-right">
              <div className="absolute inset-0 gradient-purple-glow rounded-2xl glow-purple-intense opacity-30 animate-pulse-glow"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop"
                alt="AI and Machine Learning Concept"
                className="rounded-2xl shadow-deep w-full h-96 object-cover relative z-10 hover-scale transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact */}
      <section className="py-24 glass-intense px-4 relative overflow-hidden">
        <div className="absolute inset-0 gradient-purple-glow opacity-10"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-glow-cream animate-fade-in-up">Global Impact</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-delay-100">
            Over 486,000 members across continents, IEEE CIS is a powerhouse connecting brilliant minds from universities, research labs,
            and industry leaders to push the boundaries of computational intelligence.
          </p>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
            We drive the future of AI and machine learning through world-class journals, game-changing conferences, and 
            forward-thinking educational programs — turning today’s ideas into tomorrow’s breakthroughs.
          </p>
        </div>
      </section>

      {/* Team Pictures */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow-cream">Our Community</h2>
            <p className="text-xl text-muted-foreground">A hub of dreamers, doers, and disruptors.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Annual Conference 2023",
                description: "Our team presenting cutting-edge research",
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
              },
              {
                title: "AI Workshop",
                description: "Hands-on learning with industry experts",
                image: "https://images.unsplash.com/photo-1543269664-7eef42226a21?w=400&h=300&fit=crop"
              },
              {
                title: "Core Team Meeting",
                description: "Planning the future of our chapter",
                image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&h=300&fit=crop"
              }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="overflow-hidden glass border-accent/20 hover-glow hover-scale transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 text-glow-cream text-lg">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="gradient-dark-purple text-cream py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-black/30"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="w-20 h-20 gradient-purple-glow rounded-full flex items-center justify-center mx-auto mb-8 glow-purple-intense animate-float">
            <Users className="h-10 w-10 text-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-glow-cream animate-fade-in-up">Your Future in AI Starts Here.</h2>
          <p className="text-xl mb-12 text-cream/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-100">
            Connect with like-minded innovators, access cutting-edge resources, 
            and be part of groundbreaking research in computational intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animate-delay-200">
            <Button 
              size="lg" 
              className="gradient-cream text-black hover:glow-cream transition-all duration-500 hover:scale-110 px-8 py-4 text-lg"
              onClick={() => onPageChange('join')}
            >
              Join Our Chapter
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-accent text-accent hover:gradient-purple-glow hover:text-cream transition-all duration-500 hover:scale-110 px-8 py-4 text-lg glass-intense"
              onClick={() => onPageChange('events')}
            >
              View Events
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-accent text-accent hover:gradient-purple-glow hover:text-cream transition-all duration-500 hover:scale-110 px-8 py-4 text-lg glass-intense"
              onClick={() => onPageChange('contact')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
