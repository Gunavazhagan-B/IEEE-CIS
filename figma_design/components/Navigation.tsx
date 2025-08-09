import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Mail, Linkedin, Instagram } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'events', label: 'Events' },
  ];

  return (
    <nav className={`glass-intense sticky top-0 z-50 transition-all duration-500 ${
      isScrolled ? 'glow-purple shadow-purple-xl' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 animate-slide-in-left">
            <div className="w-10 h-10 gradient-purple-glow rounded-full flex items-center justify-center glow-purple animate-pulse-glow">
              <span className="text-primary-foreground font-bold text-glow">IEEE</span>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-foreground text-glow-cream">IEEE CIS</h1>
              <p className="text-xs text-muted-foreground">Your College Name</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`text-sm transition-all duration-300 hover-glow hover:text-accent ${
                  currentPage === item.id
                    ? 'text-accent text-glow border-b-2 border-accent pb-1'
                    : 'text-muted-foreground hover:text-foreground'
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </button>
            ))}
            
            <div className="flex items-center space-x-3 ml-6 animate-fade-in-up animate-delay-300">
              <a 
                href="mailto:ieee.cis@college.edu" 
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover-glow p-2 rounded-full"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a 
                href="https://linkedin.com/company/ieee-cis" 
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover-glow p-2 rounded-full"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="https://instagram.com/ieee_cis" 
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover-glow p-2 rounded-full"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
            
            <Button 
              onClick={() => onPageChange('join')} 
              className="gradient-purple-glow hover:glow-purple-intense transition-all duration-300 hover:scale-105 neon-border animate-fade-in-up animate-delay-400"
            >
              Join Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover-glow transition-all duration-300"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border glass animate-fade-in-up">
            <div className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left px-3 py-2 rounded-md text-sm transition-all duration-300 hover-glow ${
                    currentPage === item.id
                      ? 'gradient-purple-glow text-primary-foreground glow-purple'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary/20'
                  } animate-slide-in-left`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </button>
              ))}
              
              <div className="flex items-center space-x-4 px-3 py-2 animate-slide-in-left animate-delay-300">
                <a 
                  href="mailto:ieee.cis@college.edu" 
                  className="text-muted-foreground hover:text-accent transition-all duration-300 hover-glow p-2 rounded-full"
                >
                  <Mail className="h-4 w-4" />
                </a>
                <a 
                  href="https://linkedin.com/company/ieee-cis" 
                  className="text-muted-foreground hover:text-accent transition-all duration-300 hover-glow p-2 rounded-full"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a 
                  href="https://instagram.com/ieee_cis" 
                  className="text-muted-foreground hover:text-accent transition-all duration-300 hover-glow p-2 rounded-full"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
              
              <Button 
                onClick={() => onPageChange('join')} 
                className="gradient-purple-glow hover:glow-purple-intense transition-all duration-300 mx-3 neon-border animate-slide-in-left animate-delay-400"
              >
                Join Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}