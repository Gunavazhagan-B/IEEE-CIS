import { useEffect, useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Calendar, Users, Award, ChevronRight, Sparkles, Zap, Brain } from 'lucide-react';

interface HeroPageProps {
  onPageChange?: (page: string) => void;
}

const HeroPage = ({ onPageChange }: HeroPageProps) => {
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

  const communityItems = [
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
            <div className="w-40 h-40 flex items-center justify-center mx-auto mb-8 animate-pulse-glow">
              {/* Stylish IEEE CIS Society logo */}
              <div className="text-center">
                <div className="text-3xl font-bold text-glow-cream mb-1 tracking-wider">IEEE</div>
                <div className="text-2xl font-semibold text-accent mb-1 tracking-wide">CIS</div>
                <div className="text-sm font-medium text-muted-foreground tracking-wider">SOCIETY</div>
              </div>
            </div>
            <Badge variant="secondary" className="mb-6 bg-purple-900/30 text-accent border-accent/30 glow-purple px-6 py-2 text-lg animate-fade-in-up animate-delay-100">
              <Sparkles className="mr-2 h-4 w-4" />
              Computational Intelligence Society
            </Badge>
          </div>
          <h1 className="text-5xl md:text-8xl font-bold mb-8 text-glow-cream animate-fade-in-up animate-delay-200">
            Advancing Intelligence<br />
            <span className="text-glow-cream">Through Innovation</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-cream/90 leading-relaxed max-w-3xl mx-auto animate-fade-in-up animate-delay-300">
            Empowering students to push the boundaries of computational intelligence through research, education, and collaboration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-400">
            <Button 
              onClick={() => onPageChange?.('about')}
              className="gradient-purple-glow hover:glow-purple-intense transition-all duration-300 hover:scale-105 neon-border px-8 py-3 text-lg"
            >
              Learn More
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline"
              onClick={() => onPageChange?.('events')}
              className="border-accent/30 text-accent hover:bg-accent/10 transition-all duration-300 hover:scale-105 px-8 py-3 text-lg"
            >
              <Calendar className="mr-2 h-5 w-5" />
              View Events
            </Button>
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
                The IEEE Computational Intelligence Society (CIS) focuses on computational and theoretical aspects of mimicking nature for problem solving, offering leading research in nature-inspired problem solving, including neural networks, evolutionary algorithms, fuzzy systems, and hybrid intelligent systems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our society is dedicated to advancing the field of artificial intelligence through innovative research, education, and collaboration among students, academics, and industry professionals.
              </p>
              <Button 
                onClick={() => onPageChange?.('about')}
                className="gradient-purple-glow hover:glow-purple-intense transition-all duration-300 hover:scale-105 neon-border"
              >
                Learn More About Us
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="animate-fade-in-up animate-delay-200">
              <Card className="glass-intense border-accent/20 shadow-deep">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-glow-cream">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    To empower students to push the boundaries of computational intelligence through innovation and collaboration. We focus on providing opportunities for hands-on learning in areas like Machine Learning, Data Science, and IoT, while fostering leadership and professional growth.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 glass rounded-lg">
                      <div className="w-12 h-12 gradient-purple-glow rounded-full flex items-center justify-center mx-auto mb-2 glow-purple">
                        <Brain className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <p className="text-sm font-medium text-glow-cream">AI Research</p>
                    </div>
                    <div className="text-center p-4 glass rounded-lg">
                      <div className="w-12 h-12 gradient-purple-glow rounded-full flex items-center justify-center mx-auto mb-2 glow-purple">
                        <Users className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <p className="text-sm font-medium text-glow-cream">Collaboration</p>
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
              Our Achievements
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Celebrating our milestones and contributions to the field of computational intelligence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card 
                key={index}
                className={`glass-intense border-accent/20 shadow-deep transition-all duration-500 hover:scale-105 hover-glow ${
                  currentAchievement === index ? 'ring-2 ring-accent/50' : ''
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
                  <Badge variant="secondary" className="bg-accent/20 text-accent">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-glow-cream animate-fade-in-up">Global Impact</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-delay-100">
            IEEE CIS spans the globe with over 6,000 members worldwide, fostering collaboration 
            between academia and industry to advance computational intelligence research and applications.
          </p>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
            Our society publishes leading journals, organizes premier conferences, and supports 
            educational initiatives that shape the future of artificial intelligence and machine learning.
          </p>
        </div>
      </section>

      {/* Our Community Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow-cream">Our Community</h2>
            <p className="text-xl text-muted-foreground">Meet the passionate minds driving innovation</p>
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
                  <h3 className="font-semibold mb-2 text-glow-cream text-lg">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="gradient-dark-purple text-cream py-16 px-8 rounded-2xl glow-purple-intense glass-intense shadow-deep animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-glow-cream">
              Connect With Us
            </h2>
            <p className="text-xl mb-12 text-cream/90 leading-relaxed max-w-2xl mx-auto">
              Ready to be part of our innovative community? Contact us to learn more about membership opportunities and start your journey with computational intelligence.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6 glass rounded-lg hover-glow transition-all duration-300">
                <h3 className="font-semibold mb-3 text-lg text-glow-cream">📧 Email</h3>
                <p className="text-cream/80">ieee.cis@rec.edu</p>
              </div>
              <div className="p-6 glass rounded-lg hover-glow transition-all duration-300">
                <h3 className="font-semibold mb-3 text-lg text-glow-cream">🔗 LinkedIn</h3>
                <p className="text-cream/80">/company/ieee-cis-rec</p>
              </div>
              <div className="p-6 glass rounded-lg hover-glow transition-all duration-300">
                <h3 className="font-semibold mb-3 text-lg text-glow-cream">📱 Instagram</h3>
                <p className="text-cream/80">@ieee_cis_rec</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroPage;