import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Mail, Linkedin, Instagram, MapPin, Phone, Clock, Send } from 'lucide-react';

const ContactPage = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "ieee.cis@rec.edu",
      link: "mailto:ieee.cis@rec.edu",
      description: "Send us an email for general inquiries and membership questions."
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      value: "/company/ieee-cis-rec",
      link: "https://linkedin.com/company/ieee-cis-rec",
      description: "Follow us on LinkedIn for professional updates and networking opportunities."
    },
    {
      icon: <Instagram className="h-6 w-6" />,
      title: "Instagram",
      value: "@ieee_cis_rec",
      link: "https://instagram.com/ieee_cis_rec",
      description: "Stay updated with our latest events and activities on Instagram."
    }
  ];

  const officeInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      value: "Rajalakshmi Engineering College, Chennai"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "+91 44 2715 0000"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Office Hours",
      value: "Monday - Friday, 9:00 AM - 5:00 PM"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-dark-purple text-cream py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-black/20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge variant="secondary" className="mb-6 bg-purple-900/30 text-accent border-accent/30 glow-purple px-6 py-2 text-lg">
              <Send className="mr-2 h-4 w-4" />
              Get in Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-glow-cream">
              Contact Us
            </h1>
            <p className="text-xl text-cream/90 leading-relaxed max-w-3xl mx-auto">
              Ready to join our community of computational intelligence enthusiasts? We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6 text-glow-cream">
              Connect With Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose your preferred way to get in touch with our team.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card 
                key={index}
                className="glass-intense border-accent/20 shadow-deep transition-all duration-500 hover:scale-105 hover-glow animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 gradient-purple-glow rounded-full flex items-center justify-center mx-auto mb-6 glow-purple">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-glow-cream">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {method.description}
                  </p>
                  <Button 
                    className="gradient-purple-glow hover:glow-purple-intense transition-all duration-300 hover:scale-105 neon-border w-full"
                    onClick={() => window.open(method.link, '_blank')}
                  >
                    {method.title === "Email" ? "Send Email" : `Visit ${method.title}`}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Information Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 gradient-dark-purple opacity-50"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6 text-glow-cream">
              Office Information
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Visit us at our campus location or get in touch during office hours.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {officeInfo.map((info, index) => (
              <Card 
                key={index}
                className="glass-intense border-accent/20 shadow-deep transition-all duration-500 hover:scale-105 hover-glow animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 gradient-purple-glow rounded-full flex items-center justify-center flex-shrink-0 glow-purple">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-glow-cream">
                        {info.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6 text-glow-cream">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about IEEE CIS membership and activities.
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "How can I join IEEE CIS?",
                answer: "You can join IEEE CIS by contacting us through email or visiting our office during business hours. We welcome students from all backgrounds who are interested in computational intelligence."
              },
              {
                question: "What activities does IEEE CIS organize?",
                answer: "We organize workshops, seminars, hands-on projects, research competitions, and networking events focused on AI, machine learning, and computational intelligence."
              },
              {
                question: "Do I need prior experience in AI to join?",
                answer: "No prior experience is required! We welcome beginners and provide comprehensive learning programs to help you get started in the field of computational intelligence."
              },
              {
                question: "How can I stay updated with events?",
                answer: "Follow us on social media (LinkedIn and Instagram) or subscribe to our newsletter to stay updated with our latest events and activities."
              }
            ].map((faq, index) => (
              <Card 
                key={index}
                className="glass-intense border-accent/20 shadow-deep transition-all duration-500 hover:scale-105 hover-glow animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-glow-cream">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="gradient-dark-purple text-cream py-16 px-8 rounded-2xl glow-purple-intense glass-intense shadow-deep animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-8 text-glow-cream">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-12 text-cream/90 leading-relaxed max-w-2xl mx-auto">
              Join our community of computational intelligence enthusiasts and start your journey in AI and machine learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                className="gradient-purple-glow hover:glow-purple-intense transition-all duration-300 hover:scale-105 neon-border px-8 py-3 text-lg"
                onClick={() => window.open('mailto:ieee.cis@rec.edu', '_blank')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Send us an Email
              </Button>
              <Button 
                variant="outline"
                className="border-accent/30 text-accent hover:bg-accent/10 transition-all duration-300 hover:scale-105 px-8 py-3 text-lg"
                onClick={() => window.open('https://linkedin.com/company/ieee-cis-rec', '_blank')}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                Follow on LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;