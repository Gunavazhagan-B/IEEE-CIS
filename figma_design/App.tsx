import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { EventsPage } from './components/EventsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={setCurrentPage} />;
      case 'about':
        return <AboutPage onPageChange={setCurrentPage} />;
      case 'events':
        return <EventsPage />;
      case 'join':
        return (
          <div className="min-h-screen py-24 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="gradient-dark-purple text-cream py-16 px-8 rounded-2xl glow-purple-intense glass-intense shadow-deep animate-fade-in-up">
                <div className="w-20 h-20 gradient-purple-glow rounded-full flex items-center justify-center mx-auto mb-8 glow-purple animate-float">
                  <span className="text-2xl font-bold text-glow">✨</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-glow-cream">Join IEEE CIS</h1>
                <p className="text-xl mb-12 text-cream/90 leading-relaxed max-w-2xl mx-auto">
                  Ready to be part of our innovative community? Contact us to learn more about membership opportunities and start your journey with computational intelligence.
                </p>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="p-6 glass rounded-lg hover-glow transition-all duration-300">
                    <h3 className="font-semibold mb-3 text-lg text-glow-cream">📧 Email</h3>
                    <p className="text-cream/80">ieee.cis@college.edu</p>
                  </div>
                  <div className="p-6 glass rounded-lg hover-glow transition-all duration-300">
                    <h3 className="font-semibold mb-3 text-lg text-glow-cream">🔗 LinkedIn</h3>
                    <p className="text-cream/80">/company/ieee-cis</p>
                  </div>
                  <div className="p-6 glass rounded-lg hover-glow transition-all duration-300">
                    <h3 className="font-semibold mb-3 text-lg text-glow-cream">📱 Instagram</h3>
                    <p className="text-cream/80">@ieee_cis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className="min-h-screen py-24 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="gradient-dark-purple text-cream py-16 px-8 rounded-2xl glow-purple-intense glass-intense shadow-deep animate-fade-in-up">
                <div className="w-20 h-20 gradient-purple-glow rounded-full flex items-center justify-center mx-auto mb-8 glow-purple animate-float">
                  <span className="text-2xl font-bold text-glow">💬</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-glow-cream">Contact Us</h1>
                <p className="text-xl mb-12 text-cream/90 leading-relaxed max-w-2xl mx-auto">
                  Have questions or want to get involved? We'd love to hear from you! Reach out through any of our channels below.
                </p>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="p-8 glass rounded-lg hover-glow hover-scale transition-all duration-500">
                    <div className="w-16 h-16 gradient-purple-glow rounded-full flex items-center justify-center mx-auto mb-4 glow-purple">
                      <span className="text-2xl">📧</span>
                    </div>
                    <h3 className="font-semibold mb-3 text-xl text-glow-cream">Email</h3>
                    <p className="text-cream/80">ieee.cis@college.edu</p>
                  </div>
                  <div className="p-8 glass rounded-lg hover-glow hover-scale transition-all duration-500">
                    <div className="w-16 h-16 gradient-purple-glow rounded-full flex items-center justify-center mx-auto mb-4 glow-purple">
                      <span className="text-2xl">🔗</span>
                    </div>
                    <h3 className="font-semibold mb-3 text-xl text-glow-cream">LinkedIn</h3>
                    <p className="text-cream/80">/company/ieee-cis</p>
                  </div>
                  <div className="p-8 glass rounded-lg hover-glow hover-scale transition-all duration-500">
                    <div className="w-16 h-16 gradient-purple-glow rounded-full flex items-center justify-center mx-auto mb-4 glow-purple">
                      <span className="text-2xl">📱</span>
                    </div>
                    <h3 className="font-semibold mb-3 text-xl text-glow-cream">Instagram</h3>
                    <p className="text-cream/80">@ieee_cis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <HomePage onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Global ambient effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div 
          className="absolute w-96 h-96 rounded-full gradient-purple-glow opacity-5"
          style={{
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`,
            filter: 'blur(100px)',
            transition: 'all 0.3s ease'
          }}
        />
        <div 
          className="absolute w-64 h-64 rounded-full gradient-purple-glow opacity-10"
          style={{
            right: `${mousePosition.x * 0.01}px`,
            bottom: `${mousePosition.y * 0.01}px`,
            filter: 'blur(80px)',
            transition: 'all 0.5s ease'
          }}
        />
      </div>

      <div className="relative z-10">
        <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
        <main>
          {renderPage()}
        </main>
        
        {/* Enhanced Footer */}
        <footer className="glass-intense border-t border-accent/20 py-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 gradient-purple-glow opacity-5"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-4 gap-12">
              <div className="animate-fade-in-up">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 gradient-purple-glow rounded-full flex items-center justify-center glow-purple">
                    <span className="text-primary-foreground font-bold text-glow">IEEE</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-glow-cream">IEEE CIS</h3>
                    <p className="text-sm text-muted-foreground">Your College Name</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Advancing computational intelligence through research, education, and innovation.
                </p>
              </div>
              
              <div className="animate-fade-in-up animate-delay-100">
                <h4 className="font-semibold mb-6 text-lg text-glow-cream">Quick Links</h4>
                <div className="space-y-3">
                  {[
                    { label: 'Home', page: 'home' },
                    { label: 'About Us', page: 'about' },
                    { label: 'Events', page: 'events' },
                    { label: 'Join Us', page: 'join' }
                  ].map((link) => (
                    <button 
                      key={link.page}
                      onClick={() => setCurrentPage(link.page)} 
                      className="block text-muted-foreground hover:text-accent transition-all duration-300 hover-glow p-2 rounded-lg"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="animate-fade-in-up animate-delay-200">
                <h4 className="font-semibold mb-6 text-lg text-glow-cream">Connect</h4>
                <div className="space-y-4">
                  <div className="flex items-center p-3 glass rounded-lg hover-glow transition-all duration-300">
                    <span className="mr-3">📧</span>
                    <span className="text-muted-foreground">ieee.cis@college.edu</span>
                  </div>
                  <div className="flex items-center p-3 glass rounded-lg hover-glow transition-all duration-300">
                    <span className="mr-3">🔗</span>
                    <span className="text-muted-foreground">/company/ieee-cis</span>
                  </div>
                  <div className="flex items-center p-3 glass rounded-lg hover-glow transition-all duration-300">
                    <span className="mr-3">📱</span>
                    <span className="text-muted-foreground">@ieee_cis</span>
                  </div>
                </div>
              </div>
              
              <div className="animate-fade-in-up animate-delay-300">
                <h4 className="font-semibold mb-6 text-lg text-glow-cream">IEEE Resources</h4>
                <div className="space-y-3">
                  {[
                    { label: 'IEEE.org', href: 'https://ieee.org' },
                    { label: 'IEEE CIS Society', href: 'https://cis.ieee.org' },
                    { label: 'IEEE Xplore', href: 'https://ieeexplore.ieee.org' }
                  ].map((link, index) => (
                    <a 
                      key={index}
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
              <p className="text-muted-foreground">&copy; 2024 IEEE Computational Intelligence Society - Your College Name. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}