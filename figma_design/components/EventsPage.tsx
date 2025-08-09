import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, Clock, MapPin, Users, ExternalLink, ArrowRight, Sparkles, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "AI & Machine Learning Summit 2024",
      description: "Join us for a comprehensive summit featuring the latest advances in AI and ML, with keynote speakers from Google, Microsoft, and leading academic institutions.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=300&fit=crop",
      date: "March 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Main Auditorium, Engineering Building",
      attendees: "500+",
      type: "Conference",
      registrationLink: "#register-ai-summit"
    },
    {
      id: 2,
      title: "Deep Learning Workshop",
      description: "Hands-on workshop covering neural network architectures, training techniques, and practical implementation using TensorFlow and PyTorch.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=300&fit=crop",
      date: "March 22, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Computer Lab 101",
      attendees: "50",
      type: "Workshop",
      registrationLink: "#register-dl-workshop"
    },
    {
      id: 3,
      title: "Industry Panel: Future of AI",
      description: "Panel discussion with industry leaders discussing career opportunities, emerging trends, and the future landscape of artificial intelligence.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=300&fit=crop",
      date: "April 5, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "Hybrid (Room 205 & Online)",
      attendees: "200+",
      type: "Panel",
      registrationLink: "#register-industry-panel"
    }
  ];

  const pastEvents = [
    {
      title: "International Conference on Neural Networks",
      description: "Successfully hosted our annual international conference with 800+ participants from 25 countries.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
      date: "November 2023",
      type: "Conference",
      highlights: ["800+ Participants", "25 Countries", "50+ Research Papers"]
    },
    {
      title: "Hackathon: AI for Social Good",
      description: "48-hour hackathon focused on developing AI solutions for social challenges and humanitarian causes.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop",
      date: "October 2023",
      type: "Hackathon",
      highlights: ["100+ Participants", "20 Teams", "$10K Prize Pool"]
    },
    {
      title: "Evolutionary Computation Webinar Series",
      description: "Monthly webinar series featuring world-renowned experts in genetic algorithms and evolutionary programming.",
      image: "https://images.unsplash.com/photo-1587614385131-b71c92041b9d?w=400&h=250&fit=crop",
      date: "Sep 2023",
      type: "Webinar",
      highlights: ["6 Sessions", "International Speakers", "500+ Attendees"]
    },
    {
      title: "Fuzzy Systems Workshop",
      description: "Comprehensive workshop on fuzzy logic systems, approximate reasoning, and real-world applications.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
      date: "August 2023",
      type: "Workshop",
      highlights: ["Hands-on Training", "Industry Cases", "Certificate Program"]
    },
    {
      title: "Student Research Symposium",
      description: "Showcasing outstanding research projects by undergraduate and graduate students in computational intelligence.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop",
      date: "July 2023",
      type: "Symposium",
      highlights: ["30+ Presentations", "Best Paper Awards", "Industry Judges"]
    },
    {
      title: "Tech Talk: Quantum Computing & AI",
      description: "Expert talk on the intersection of quantum computing and artificial intelligence by IBM Research.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop",
      date: "June 2023",
      type: "Tech Talk",
      highlights: ["IBM Research Speaker", "Q&A Session", "200+ Attendees"]
    }
  ];

  const eventCategories = [
    {
      title: "Conferences",
      description: "International conferences with renowned speakers and cutting-edge research presentations",
      icon: <Users className="h-10 w-10" />
    },
    {
      title: "Workshops",
      description: "Hands-on learning experiences with practical implementation and real-world applications",
      icon: <Calendar className="h-10 w-10" />
    },
    {
      title: "Webinars",
      description: "Online sessions featuring experts sharing insights on latest trends and technologies",
      icon: <Clock className="h-10 w-10" />
    },
    {
      title: "Hackathons",
      description: "Competitive coding events focusing on innovative solutions to real-world challenges",
      icon: <Zap className="h-10 w-10" />
    }
  ];

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="gradient-dark-purple text-cream py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-black/20"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="w-20 h-20 gradient-purple-glow rounded-full flex items-center justify-center mx-auto mb-8 glow-purple-intense animate-float">
            <Calendar className="h-10 w-10 text-accent" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-glow-cream animate-fade-in-up">Events</h1>
          <p className="text-xl text-cream/90 leading-relaxed animate-fade-in-up animate-delay-100">
            Join us for cutting-edge workshops, conferences, and networking opportunities
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow-cream">Upcoming Events</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Don't miss these exciting opportunities to learn and network
            </p>
          </div>

          <div className="space-y-12">
            {upcomingEvents.map((event, index) => (
              <Card 
                key={event.id} 
                className="overflow-hidden glass border-accent/20 glow-purple hover-glow transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="lg:flex">
                  <div className="lg:w-1/3 relative">
                    <ImageWithFallback
                      src={event.image}
                      alt={event.title}
                      className="w-full h-64 lg:h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent lg:hidden"></div>
                  </div>
                  <div className="lg:w-2/3 p-8 lg:p-12">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <Badge 
                        variant="secondary" 
                        className="bg-accent/20 text-accent border-accent/30 glow-purple px-4 py-2"
                      >
                        <Sparkles className="mr-2 h-4 w-4" />
                        {event.type}
                      </Badge>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2" />
                        {event.time}
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-4 text-glow-cream">{event.title}</h3>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-6 mb-8 text-muted-foreground">
                      <div className="flex items-center p-3 glass rounded-lg">
                        <MapPin className="h-5 w-5 mr-2 text-accent" />
                        {event.location}
                      </div>
                      <div className="flex items-center p-3 glass rounded-lg">
                        <Users className="h-5 w-5 mr-2 text-accent" />
                        {event.attendees} expected
                      </div>
                    </div>
                    
                    <Button 
                      className="gradient-purple-glow hover:glow-purple-intense transition-all duration-500 hover:scale-105 px-8 py-4 text-lg neon-border"
                    >
                      <ExternalLink className="mr-2 h-5 w-5" />
                      Register Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-24 glass-intense px-4 relative overflow-hidden">
        <div className="absolute inset-0 gradient-purple-glow opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow-cream">Past Events</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Celebrating our successful events and achievements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <Card 
                key={index} 
                className="overflow-hidden glass border-accent/20 hover-glow hover-scale transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge 
                      variant="outline" 
                      className="border-accent text-accent glow-purple"
                    >
                      {event.type}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{event.date}</span>
                  </div>
                  <CardTitle className="text-xl text-glow-cream">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="space-y-3">
                    {event.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center p-2 glass rounded-lg">
                        <ArrowRight className="h-4 w-4 text-accent mr-3 flex-shrink-0 glow-purple" />
                        <span className="text-sm text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow-cream">Event Categories</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We organize diverse events to cater to different interests and skill levels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventCategories.map((category, index) => (
              <Card 
                key={index} 
                className="text-center glass border-accent/20 hover-glow hover-scale transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-24 h-24 gradient-purple-glow rounded-full flex items-center justify-center mx-auto mb-6 glow-purple animate-float">
                    <div className="text-accent">{category.icon}</div>
                  </div>
                  <h3 className="font-semibold mb-4 text-xl text-glow-cream">{category.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="gradient-dark-purple text-cream py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-black/30"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="w-20 h-20 gradient-purple-glow rounded-full flex items-center justify-center mx-auto mb-8 glow-purple-intense animate-float">
            <Sparkles className="h-10 w-10 text-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-glow-cream animate-fade-in-up">Stay Updated</h2>
          <p className="text-xl mb-12 text-cream/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-100">
            Never miss an event! Subscribe to our newsletter for the latest updates on upcoming events and activities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto animate-fade-in-up animate-delay-200">
            <Button 
              size="lg" 
              className="gradient-cream text-black hover:glow-cream transition-all duration-500 hover:scale-110 px-8 py-4 text-lg flex-1"
            >
              Subscribe to Newsletter
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-accent text-accent hover:gradient-purple-glow hover:text-cream transition-all duration-500 hover:scale-110 px-8 py-4 text-lg glass-intense"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}