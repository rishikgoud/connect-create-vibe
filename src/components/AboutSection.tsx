import { MapPin, MessageCircle, Target, CreditCard } from 'lucide-react';

const AboutSection = () => {
  const steps = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Post Location-Based Gigs",
      description: "Clients post creative gigs with specific time and location requirements"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Get Matched Instantly",
      description: "Nearby creators receive notifications based on their skills and interests"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Connect & Collaborate",
      description: "Built-in chat and tracking system for seamless communication"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Get Paid Securely",
      description: "Fast, secure payment processing integrated into the platform"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How ConnectCreator Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bridging the gap between talented creators and clients who need creative work done. 
            Our platform makes it simple to find, connect, and collaborate on creative projects in your area.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="feature-card text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-2xl mb-4">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 fade-in">
          <div className="gradient-hero rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Creating?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of creators and clients who are already using ConnectCreator 
              to bring amazing projects to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#register" className="btn-primary bg-white text-primary hover:bg-white/90">
                Get Started Today
              </a>
              <a href="#features" className="btn-secondary border-white/30 text-white hover:bg-white/10">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;